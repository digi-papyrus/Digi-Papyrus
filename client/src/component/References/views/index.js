import React from "react";
import "./ReferenceCard.sass";

export default function ReferenceCard(prop) {
  return (
    <div className="ReferenceCard">
      <img src={prop.src} />
      <div className="DescriptionCard">
        <p className="statement">{`" ` + prop.statement + ` "`}</p>
        <p className="name">{"~ " + prop.name}</p>
      </div>
    </div>
  );
}
