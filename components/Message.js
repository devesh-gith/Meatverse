import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Message({ message }) {
  const { user } = useMoralis();
  const isUserMessage = user.get("ethAddress") == message.get("ethAddress");
  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      } `}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={user.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 font-bold rounded-lg text-[16px] ${
          isUserMessage
            ? "bg-pink-300 rounded-br-none"
            : "bg-blue-400 rounded-bl-none"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>

      <div>{/* timestamp */}</div>

      <div
        className={`absolute -bottom-5 text-xs font-semibold ${
          isUserMessage ? "text-pink-400" : "text-blue-400"
        }`}
      >
        <p>{user.get("username")}</p>
      </div>
    </div>
  );
}

export default Message;
