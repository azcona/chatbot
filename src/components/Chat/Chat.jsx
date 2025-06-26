import React, { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import { FaComments, FaTimes } from "react-icons/fa";

const expressions = ["happy", "idea", "love", "laught", "message"];
const getRandomExpression = () =>
  expressions[Math.floor(Math.random() * expressions.length)];

const Chat = ({ visible = true }) => {
  const [botExpression, setBotExpression] = useState("happy");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hola, soy EngiBot 🤖 ¿En qué puedo ayudarte?",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setBotExpression(getRandomExpression());
    const openChatListener = () => setIsOpen(true);
    window.addEventListener("openEngibotChat", openChatListener);
    return () => {
      window.removeEventListener("openEngibotChat", openChatListener);
    };
  }, []);

  const handleSendMessage = (text) => {
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: "👍 Noted! Let me think...",
        timestamp: new Date(),
      };
      setBotExpression(getRandomExpression());
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:z-50">
      {isOpen ? (
        <div
          className={`
            fixed inset-0 sm:inset-auto sm:bottom-4 sm:right-4
            w-full h-full sm:w-[500px] sm:h-[700px]
            bg-[#0F0F2DEF] sm:rounded-2xl rounded-none
            border-none sm:border-4 border-pink-500
            shadow-[0_0_15px_4px_#FF00FF] overflow-hidden
            flex flex-col
          `}
        >
          <div className="flex justify-end p-2 sm:p-3">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-pink-300 transition-colors"
              title="Cerrar"
            >
              <FaTimes className="text-lg sm:text-xl" />
            </button>
          </div>
          <div className="flex flex-col flex-1 overflow-hidden p-4 pt-0 gap-4">
            <ChatHeader expression={botExpression} />
            <ChatWindow messages={messages} isTyping={isTyping} />
            <ChatInput onSend={handleSendMessage} />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full shadow-lg text-xl transition-colors duration-200 ease-in-out"
          title="Abrir chat"
        >
          <FaComments />
        </button>
      )}
    </div>
  );
};

export default Chat;