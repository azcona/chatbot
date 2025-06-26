import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

const ChatWindow = ({ messages, isTyping }) => {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="h-full overflow-y-auto p-4 rounded-lg bg-[#1B1B3A] border border-fuchsia-500 shadow-inner shadow-pink-500/30">
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          sender={msg.sender}
          text={msg.text}
          timestamp={msg.timestamp}
        />
      ))}

      {isTyping && (
        <div className="mb-3 flex justify-start">
          <div className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-pink-600 shadow-md animate-pulse">
            <span className="tracking-widest">...</span>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatWindow;
