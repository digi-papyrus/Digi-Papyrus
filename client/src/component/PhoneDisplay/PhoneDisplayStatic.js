import React, { Suspense } from "react";
import PhoneModel from "./Phone";
import { Canvas } from "@react-three/fiber";
import "./PhoneDisplay.sass";
import IndividualChatStatic from "./IndivisualChatStatic";
export default function PhoneDisplayStatic(prop) {
  // useEffect(() => {
  //   console.log(prop);
  // }, []);
  let chat;
  if (!prop.chat) {
    chat = [];
  } else {
    chat = prop.chat;
  }
  let chatDraftedList = chat.map((chats, index) => {
    if (chats) {
      return (
        <IndividualChatStatic
          date={chats.date}
          chat={chats.text}
          type={chats.sender === prop.sender ? "sender" : "reciever"}
        />
      );
    } else {
      console.log("error");
    }
  });
  return (
    <div className="PhoneDisplay">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight />
        <directionalLight
          intensity={0.3}
          position={[-5, 0, 10]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -3, -2]}
          receiveShadow
        >
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
        <Suspense fallback={null}>
          <PhoneModel
            scale={[2.5, 2.5, 2.5]}
            position={[0, 0, 0.8]}
            rotation={[Math.PI, 0, -Math.PI]}
          />
        </Suspense>
      </Canvas>
      <div className="screen">
        <div className="display">
          <div className="alldis">
            <div className="navbar">
              <p>9:45</p>
              <p>5G</p>
            </div>
            <div className="chatnepal">{chatDraftedList}</div>{" "}
            {/* this is just a class to style the component */}
          </div>
        </div>
      </div>
    </div>
  );
}
