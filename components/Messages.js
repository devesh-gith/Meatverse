import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessages from "./SendMessages";

const MAX_DURATION = 15;
function Messages() {
  const { user, Moralis } = useMoralis();
  const endOfMessageRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MAX_DURATION)
        ),
    [],
    {
      live: true,
    }
  );
  console.log(data);

  return (
    <div className="pb-56">
      <div className="pt-4">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />

        <div className="space-y-10 p-4 ">
          {data.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
        <div className="flex justify-center">
          <SendMessages endOfMessageRef={endOfMessageRef} />
        </div>

        <div className="text-center pt-6 text-gray-500" ref={endOfMessageRef}>
          <h2>You are up to date {user.get("username")} </h2>
        </div>
      </div>
    </div>
  );
}

export default Messages;
