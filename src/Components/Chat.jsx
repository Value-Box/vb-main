import React, { useState } from 'react';

const ChatBotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const getBotReply = async (message) => {
    // Replace with your actual logic or API call
    return new Promise((resolve) => {
      setTimeout(() => resolve("This is a mock reply from the bot."), 1000);
    });
  };

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
      {!isOpen && (
  <button
    onClick={toggleChat}
    className="fixed bottom-10 right-20 w-[50px] h-[50px] flex items-center justify-center rounded-full shadow-lg text-white z-50"
    style={{ backgroundColor: "#002882" }}
  >
    💬
  </button>
)}
      {/* Popup Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-10 right-20 w-80 bg-white shadow-2xl rounded-xl flex flex-col z-[1000] opacity-0 scale-95 animate-[fadeInScale_0.3s_ease-out_forwards]"
          style={{ height: "500px" }}
        >
          {/* Header */}
          <div
            className="text-white p-3 font-semibold flex justify-between items-center rounded-t-xl"
            style={{ backgroundColor: "#002882" }}
          >
            <span className="flex items-center gap-2">🤖 ChatBot</span>
            <button onClick={toggleChat} className="text-white text-lg font-bold">✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm scroll-smooth bg-white">
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-end ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
         {msg.sender === "bot" && (
  <div className="w-7 h-7 mr-2 bg-white rounded-full shadow flex items-center justify-center text-lg border border-gray-200">
    🤖
  </div>
)}

                   <div
                  className={`px-4 py-2 rounded-xl max-w-[70%] text-sm shadow-md ${
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
              <div className="flex justify-start text-gray-500 text-xs italic">Bot is typing...</div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2 bg-white rounded-b-xl border-gray-200">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-1.5 text-sm outline-none shadow-sm"
            />
            <button
              onClick={sendMessage}
              className="text-white px-4 py-1.5 rounded-full text-sm shadow-md"
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
