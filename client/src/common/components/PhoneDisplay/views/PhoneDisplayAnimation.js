import React, { useEffect, Suspense, useRef, useState } from "react";
import Individualchat from "./Individualchat";
import PhoneModel from "./Phone";
import { Canvas } from "@react-three/fiber";
import "./PhoneDisplay.sass";
export default function PhoneDisplayAnimation(prop) {
  const messageEndref = useRef(null);
  const [count, setCount] = useState(0);
  const xyz = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        return <h1>Nirjal</h1>;
      }, 10000);
    }
  };

  // let chatDraftedList = prop.chat.slice(0, count).map((chats, index) => {
  //   if (chats) {
  //     return (
  //       <Individualchat
  //         chat={chats.text}
  //         type={chats.sender === prop.sender ? "sender" : "reciever"}
  //       />
  //     );
  //   } else {
  //     console.log("error");
  //   }
  // });
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
            <div className="chatnepal">
              {xyz}
              <div ref={messageEndref} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React, { useEffect, Suspense, useRef, useState } from "react";
// import Individualchat from "./Individualchat";
// import PhoneModel from "./Phone";
// import { Canvas } from "@react-three/fiber";
// import "./PhoneDisplay.sass";
// export default function PhoneDisplayAnimation(prop) {
//   const chat = prop.chat;
//   const messageEndref = useRef(null);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // messageEndref.current.scrollIntoView({ behavior: "smooth" });
//     let counter = count;
//     const delay = setTimeout(() => {
//       if (counter >= prop.chat.length) {
//         clearTimeout(delay);
//       } else {
//         setCount((count) => count + 1);
//         counter++;
//       }
//     }, 200);
//     return () => clearTimeout(delay);
//   }, [chat]);
//   let chatDraftedList = chat.slice(0, count).map((chats, index) => {
//     if (chats) {
//       console.log(chats);
//       return (
//         <Individualchat
//           chat={chats.text}
//           type={chats.sender === prop.sender ? "sender" : "reciever"}
//         />
//       );
//     } else {
//       console.log("error");
//     }
//   });
//   return (
//     <div className="PhoneDisplay">
//       <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
//         <ambientLight />
//         <directionalLight
//           intensity={0.3}
//           position={[-5, 0, 10]}
//           castShadow
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//         />
//         <mesh
//           rotation={[-0.5 * Math.PI, 0, 0]}
//           position={[0, -3, -2]}
//           receiveShadow
//         >
//           <planeBufferGeometry args={[10, 10, 1, 1]} />
//           <shadowMaterial transparent opacity={0.2} />
//         </mesh>
//         <Suspense fallback={null}>
//           <PhoneModel
//             scale={[2.5, 2.5, 2.5]}
//             position={[0, 0, 0.8]}
//             rotation={[Math.PI, 0, -Math.PI]}
//           />
//         </Suspense>
//       </Canvas>
//       <div className="screen">
//         <div className="display">
//           <div className="alldis">
//             <div className="navbar">
//               <p>9:45</p>
//               <p>5G</p>
//             </div>
//             <div className="chatnepal">
//               {chatDraftedList}
//               <div ref={messageEndref} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
