import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "@/components/Chat";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
