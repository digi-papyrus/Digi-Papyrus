import React from "react";
import "./App.css";
import NavigationBar from "./common/components/NavigationBar/views/index.js";
import HomePage from "./component/Homepage/views/index";
import AboutUsPage from "./component/AboutUsPage/views/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login/views/index";
import ChatInput from "./component/PublishDigiChats/views/index";
import ChatOutput from "./component/ChatOutput/views/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatInput" element={<ChatInput />} />
          <Route path="/chat/:_id" element={<ChatOutput />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
