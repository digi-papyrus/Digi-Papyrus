import React from "react";
import "./ChatCard.sass";
import PhoneDisplayStatic from "../../../common/components/PhoneDisplay/views/PhoneDisplayStatic";
import preprocessor from "../../../common/logic/preprocessor";

export default function ChatCard(prop) {
  return (
    <div>
      <div className="ChatCard">
        <div className="RectangleBackground">
          <div className="Canvas">
            <PhoneDisplayStatic
              chat={preprocessor(prop.chat)}
              sender={prop.sender}
            />
          </div>
        </div>
        <div className="Content">
          <h1>{prop.title}</h1>
          <p>{prop.description}</p>
        </div>
      </div>
    </div>
  );
}
