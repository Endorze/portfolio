import React, { useState, useRef, useEffect } from "react";

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
            const res = await fetch("http://localhost:8080/api/chat", {
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
                <div>
                    <div>
                        <span>🤖 Endorze-AI</span>
                        <button onClick={() => setOpen(false)}>×</button>
                    </div>
                    <div>
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}

                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Skriv ett meddelande..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button onClick={sendMessage}>Skicka</button>
                    </div>
                </div>
            ) : (
                <button onClick={() => setOpen(true)}>
                    💬
                </button>
            )}
        </div>
    );
};