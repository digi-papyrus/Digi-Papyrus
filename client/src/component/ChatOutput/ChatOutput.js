import axios from "axios";
import React, { useEffect, useState } from "react";
import preprocessor from "../../logic/preprocessor";
import PhoneDisplayAnimation from "../PhoneDisplay/PhoneDisplayAnimation";
import { useParams } from "react-router-dom";
import PhoneDisplayStatic from "../PhoneDisplay/PhoneDisplayStatic";

export default function ChatOutput() {
  const [chat, setChat] = useState("");
  const [sender, setSender] = useState("");
  const { _id } = useParams();

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/individualChat", {
        id: _id,
      })
      .then((res) => {
        setChat(res.data.chat);
        setSender(res.data.sender);
      });
  }, []);
  return (
    <div style={{ height: "90vh", width: "100%" }}>
      {/* <PhoneDisplayStatic chat={preprocessor(chat)} sender={sender} /> */}
      <PhoneDisplayAnimation chat={preprocessor(chat)} sender={sender} />
    </div>
  );
}
