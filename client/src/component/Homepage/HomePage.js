import React, { useEffect, useState } from "react";
import "./HomePage.sass";
import ChatCard from "../ChatCard/ChatCard";
import { Link, useNavigate } from "react-router-dom";
import PhoneDisplayStatic from "../PhoneDisplay/PhoneDisplayStatic";
import axios from "axios";
export default function HomePage() {
  const [chats, setChats] = useState([]);
  const chat = [
    {
      date: "09/12/2021, 9:27 pm",
      sender: "+977 981-6364854",
      text: " Hi Mate! What's Up?😀 ",
      reciever: "+977 981-6364854",
    },
    {
      date: "09/12/2021, 9:27 pm",
      sender: "Nirjal Bhurtel",
      text: " Thank You! All good😁 what about you was just chilling and having fun with Digi !",
    },
    {
      date: "09/12/2021, 9:28 pm",
      sender: "+977 981-6364854",
      text: "Yeah! The animations and digi chat is fun bro! I also enjoy reading it!",
      reciever: "+977 981-6364854",
    },
    {
      date: "09/12/2021, 9:29 pm",
      sender: "Nirjal Bhurtel",
      text: "Yeah mate! Reading books is not same as it used to! I started reading more",
    },
    {
      date: "09/12/2021, 9:29 pm",
      sender: "Nirjal Bhurtel",
      text: " Same here mate! Cheers! For Digi!",
    },
  ];
  useEffect(() => {
    axios.get("http://localhost:5000/api/fetchChat").then((res) => {
      setChats(res.data);
      
    });
  }, []);

  const history = useNavigate();
  const token = localStorage.getItem("jwt");

  const callDash = async () => {
    try {
      const url = "/authenticate";
      axios
        .post(url, {
          token: token,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 202) {
            console.log("hello");
            history("/login");
         
            const error = new Error(res.error);
            throw error;
          }
        });
    } catch (error) {
      
      console.log("hello");
    }
  };

  useEffect(() => {
    callDash();
  }, []);

  return (
    <div className="HomePage">
      <div className="Page1">
        <div className="Header">
          <h1>
            Digi
            <br />
            Papyrus
          </h1>
          <p>Think Opening Imagination as you turn the pages of book !</p>
        </div>
        <div className="Canvas">
          <PhoneDisplayStatic chat={chat} sender="Nirjal Bhurtel" />
        </div>
      </div>
      <div className="Page2">
        <h1>Popular Digi-Chats</h1>
        <div className="Cards">
          {" "}
          {chats.map((chat) => (
            <Link to={"/chat/" + chat._id}>
              <ChatCard
                title={chat.title}
                chat={chat.chat}
                sender={chat.sender}
              />
            </Link>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}
