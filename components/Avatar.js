import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <div>
      <Image
        className="rounded-full bg-black cursor-pointer hover:opacity-80 mx-auto"
        src={`https://avatars.dicebear.com/api/pixel-art/${
          username || user.get("username")
        }.svg `}
        layout="fill"
      />
    </div>
  );
}

export default Avatar;
