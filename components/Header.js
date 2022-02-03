import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
  const { user, logout } = useMoralis();
  return (
    <div className="sticky  top-0 p-4 z-50 text-pink-500 shadow-sm border-b-2 border-pink-700 bg-black">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 hidden mx-auto lg:inline-grid  ">
          <Image
            className="rounded-full"
            src="https://i.ibb.co/wpk0Wbx/img.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-4 mx-auto space-y-1">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-4 rounded-full ">
            <Avatar />
          </div>
          <h1 className="text-3xl text-pink-500">Mataverse Real-Time Chat</h1>

          <h2 className="text-2xl font-bold text-pink-500 truncate lg:text-center">
            {user.getUsername()}
          </h2>

          <ChangeUserName />
          <div className=" absolute bottom-5 right-5 bg-pink-500 text-gray-900 font-bold py-2 px-4 rounded-2xl">
            <button className="font-bold" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
