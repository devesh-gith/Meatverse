import React from "react";
import { useMoralis } from "react-moralis";

function ChangeUserName() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter the nre username current name:${user.getUsername()}`
    );

    setUserData({
      username,
    });
  };
  return (
    <div className="absolute top-5 right-5 text-pink-400">
      <button
        onClick={setUsername}
        disabled={isUserUpdating}
        className="hover:text-pink-700"
      >
        Change your name
      </button>
    </div>
  );
}

export default ChangeUserName;
