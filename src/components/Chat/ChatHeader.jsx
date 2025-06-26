import React from "react";
import happyBot from "../../assets/bot-face/bot_happy.svg";
import shockedBot from "../../assets/bot-face/bot_shocked.svg";
import ideaBot from "../../assets/bot-face/bot_idea.svg";
import loveBot from "../../assets/bot-face/bot_love.svg";
import laughtBot from "../../assets/bot-face/bot_laught.svg";
import messageBot from "../../assets/bot-face/bot_message.svg";

const ChatHeader = ({ expression = "happy" }) => {
  const images = {
    happy: happyBot,
    shocked: shockedBot,
    idea: ideaBot,
    love: loveBot,
    laught: laughtBot,
    message: messageBot,
  };

  return (
    <div className="flex items-center justify-center gap-6 p-2">
      <div className="min-w-28 min-h-28 max-w-28 max-h-28 bg-pink-600 rounded-full flex items-center justify-center shadow-md ring-2 ring-pink-400">
        <img
          src={images[expression]}
          alt={`ENGIBOT is ${expression}`}
          className="w-20 h-20 object-contain"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-wider bg-gradient-to-r from-amber-400 to-pink-600 bg-clip-text text-transparent font-display">
          ENGIBOT
        </h2>
        <p className="font-body text-white text-sm">¡Chatea con una IA! para los estudiantes de ingeniería</p>
      </div>
    </div>
  );
};

export default ChatHeader;
