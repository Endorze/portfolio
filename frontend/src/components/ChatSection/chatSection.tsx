import React, { useState, useRef } from "react";
import { ThreeDots } from "react-loading-icons";
import VoiceRecognition from "../VoiceRecognition/voiceRecognition";
import { BACKEND_URL } from "../../utils/api";
import styles from "./chatSection.module.css"

interface Message {
    sender: "user" | "ai";
    text: string;
}

const ChatSection: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [isTyping, setIsTyping] = useState<boolean>(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

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
        } finally {
            setIsTyping(false);
        }

    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") sendMessage();
    };

    return (
        <div className="bg-[#FF8989]">
            <div className="py-16 max-md:py-12">
                <div className="container">
                    <div>
                        <div className={styles.chatTitle}>
                            <p className="pb-6 max-md:pb-4">Ask me Questions about Alexander Hallgren</p>
                        </div>
                        <div className="border rounded-2xl p-12 max-md:p-4 bg-white">
                            <div className="h-[225px] overflow-y-auto scrollbar-hide">
                                {messages.map((msg, idx) => (

                                    <div
                                        className={`pb-4 ${msg.sender === "user" ? "text-right" : "text-left"}`}
                                    >
                                        <div className="text-sm font-bold text-indigo-600">
                                            {msg.sender === "user" ? "You" : "Alexander's Assistant"}
                                        </div>
                                        <div className={`inline-block px-4 py-2 rounded-xl mt-1 ${msg.sender === "user" ? "bg-indigo-100" : "bg-zinc-100"
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </div>

                                ))}
                                {isTyping && (
                                    <div className="text-left pb-4">
                                        <div className="text-sm font-bold">Alexander's Assistant</div>
                                        <div className="bg-gray-200 inline-block px-4 py-2 rounded-xl mt-1 italic text-gray-600">
                                            <ThreeDots fill="#4B5563" height={16} />
                                        </div>
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>

                            <div className="flex py-4">
                                <input
                                    type="text"
                                    placeholder="Ask me anything"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="overflow-x-auto w-full scrollbar-hide"
                                />
                            </div>
                            <div>
                                <button className="bg-indigo-600 text-white rounded-xl p-2" onClick={sendMessage}>Skicka</button>
                                <VoiceRecognition onVoiceSubmit={(voiceText) => {
                                    setInput(voiceText);
                                    sendMessage();
                                }}/>
                            </div>
                        </div>
                    </div>
                    <p className="text-white pt-6">"What does Alex know?"</p>
                </div>
        
            </div>
        </div>
    );
};

export default ChatSection;