import React from "react";
import "./IndividualChat.sass";
export default function IndividualChatStatic(prop) {
  let marginLeft;
  let marginRight;
  let backgroundColor;
  let border;

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
      <div style={{ margin: " 10px 0px" }}>
        <p
          className="date"
          style={{
            marginLeft: marginLeft,
            marginRight: marginRight,
          }}
        >
          {prop.date}
        </p>
        <div
          className="chat"
          style={{
            marginLeft: marginLeft,
            marginRight: marginRight,
            backgroundColor: backgroundColor,
            border: border,
          }}
        >
          <div>
            <p>{prop.chat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
