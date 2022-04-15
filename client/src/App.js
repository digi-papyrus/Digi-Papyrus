import React from "react";
import "./App.css";
import NavigationBar from "./component/NavigationBar/NavigationBar";
import HomePage from "./component/Homepage/HomePage";
import AboutUsPage from "./component/AboutUsPage/AboutUsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login/login";
import ChatInput from "./component/PublishDigiChats/ChatInput";
import ChatOutput from "./component/ChatOutput/ChatOutput";
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
