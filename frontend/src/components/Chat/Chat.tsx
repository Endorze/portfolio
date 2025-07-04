import React, { useState, useRef, useEffect } from "react";
import { BACKEND_URL } from "../../utils/api";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    if (messages.length > 50) {
      alert("Du får max skriva 50 karaktärer")
    }
    setInput("");

    try {
      const res = await fetch(`${BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        console.log(res);
        const errorText = await res.text();
        throw new Error(`Servern svarade med fel: ${res.status} – ${errorText}`);
      }

      const data = await res.json();

      console.log(data)

      if (!data?.reply) {
        throw new Error("Inget svar från backend");
      }

      const aiMessage: Message = { sender: "ai", text: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err: any) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: err.message || "Kunde inte hämta svar från AI." },
      ]);
    }

  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999 }}>
      {open ? (
        <div style={styles.chatBox}>
          <div style={styles.header}>
            <span>🤖 Endorze-AI</span>
            <button style={styles.closeButton} onClick={() => setOpen(false)}>×</button>
          </div>
          <div style={styles.messages}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.message,
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.sender === "user" ? "#dcf8c6" : "#f1f0f0",
                }}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div style={styles.inputArea}>
            <input
              type="text"
              placeholder="Skriv ett meddelande..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              style={styles.input}
            />
            <button onClick={sendMessage} style={styles.sendButton}>Skicka</button>
          </div>
        </div>
      ) : (
        <button style={styles.openButton} onClick={() => setOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  openButton: {
    backgroundColor: "#041c3b",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    padding: "16px",
    fontSize: "20px",
    cursor: "pointer",
  },
  chatBox: {
    width: "300px",
    height: "400px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#0084ff",
    color: "#fff",
    padding: "10px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },
  messages: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    backgroundColor: "#f7f7f7",
  },
  message: {
    maxWidth: "80%",
    padding: "8px 12px",
    borderRadius: "16px",
    fontSize: "14px",
    lineHeight: "1.4",
    color: "#000000"
  },
  inputArea: {
    display: "flex",
    padding: "8px",
    borderTop: "1px solid #ccc",
    color: "#000000"
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  sendButton: {
    marginLeft: "8px",
    padding: "8px 12px",
    border: "none",
    backgroundColor: "#0084ff",
    color: "#fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ChatWidget;
