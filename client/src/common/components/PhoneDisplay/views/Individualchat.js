import React, { useState } from "react";
import "./IndividualChat.sass";
export default function Individualchat(prop) {
  const Typingfunction = () => {
    return <p className="typing">Typing</p>;
  };
  const Textfunction = () => {
    return (
      <div>
        <p>{prop.date}</p>
        <p>{prop.chat}</p>
      </div>
    );
  };

  let marginLeft;
  let marginRight;
  let backgroundColor;
  let border;
  const [typing, setTyping] = useState(true);

  setTimeout(() => {
    setTyping(false);
  }, 1000);

  if (prop.type === "reciever") {
    marginLeft = "20px";
    marginRight = "auto";
    backgroundColor = "rgb(100, 228, 100)";
    border = "none";
  } else {
    marginLeft = "auto";
    marginRight = "20px";
    border = "solid rgb(100, 228, 100) 2px";
  }
  return (
    <div className={prop.className}>
      <div
        className="chat"
        style={{
          marginLeft: marginLeft,
          marginRight: marginRight,
          backgroundColor: backgroundColor,
          border: border,
        }}
      >
        {typing ? <Typingfunction /> : <Textfunction />}
      </div>
    </div>
  );
}
