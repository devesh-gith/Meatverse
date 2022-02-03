import React, { useState } from "react";
import { useMoralis } from "react-moralis";
function SendMessages({ endOfMessageRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (messages) => {},
        (error) => {
          console.log(error.message);
        }
      );

    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };
  return (
    <form className="flex fixed bottom-10 bg-black w-11/12 max-w-2xl px-6 py-4 rounded-full border-2 border-blue-400 shadow-xl">
      <input
        className=" flex-grow outline-none bg-transparent text-white placeholder-gray-400 pr-5 "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder={`Enter a message ${user.getUsername()}`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="text-pink-500 font-bold"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessages;
