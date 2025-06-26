const ChatMessage = ({ sender, text, timestamp }) => {
  const isUser = sender === "user";

  const timeString = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const triangleBase = "absolute w-0 h-0 border-y-[8px] border-y-transparent";
  const triangleUser = "border-l-[8px] border-l-violet-600 right-[-6px] top-2";
  const triangleBot = "border-r-[8px] border-r-pink-600 left-[-6px] top-2";

  return (
    <div className={`mb-3 flex ${isUser ? "justify-end" : "justify-start"} relative`}>
      <div className="relative max-w-xs">
        <div
          className={`${triangleBase} ${
            isUser ? triangleUser : triangleBot
          }`}
        />
        <div className={`chat-bubble ${isUser ? "user-bubble" : "bot-bubble"}`}>
          {text}
        </div>
        <p className={`timestamp ${isUser ? "timestamp-user" : "timestamp-bot"}`}>
          {timeString}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
