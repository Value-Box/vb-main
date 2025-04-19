import React, { useState } from 'react';


const ChatBotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const botReply = await getBotReply(input);
    const botMsg = { sender: "bot", text: botReply };
    setMessages(prev => [...prev, botMsg]);
    setLoading(false);
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-10 right-20 px-4 py-2 rounded-full shadow-lg text-white" 
        style={{ backgroundColor: "#002882"}}
      >
        💬 Chat
      </button>

      {/* Popup Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-10 right-20 w-80 bg-white shadow-xl rounded-xl flex flex-col z-50"
          style={{ height: "500px" }} // 👈 Fixed height
        >
          {/* Header */}
          <div
            className="text-white p-3 font-semibold flex justify-between items-center"
            style={{ backgroundColor: "#002882" }}
          >
            Chat with us
            <button onClick={toggleChat} className="text-white">✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-xl max-w-[70%] ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-right"
                      : "bg-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-gray-500 text-xs">Bot is typing...</div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 border rounded-full px-3 py-1 text-sm outline-none"
            />
            <button
              onClick={sendMessage}
              className="text-white px-3 py-1 rounded-full text-sm"
              style={{ backgroundColor: "#002882" }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotPopup;
