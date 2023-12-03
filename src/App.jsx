import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "./components/layouts/Layouts";
import HomePage from "./components/pages/homePage/HomePage";
import AIImageGeneratione from "./components/pages/aIImageGeneratione/AIImageGeneratione";
import "./assets/styles/global.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<HomePage />} />
        <Route element={<AIImageGeneratione />} path="aiImageGeneratione" />
      </Route>
    </Routes>
  );
}

export default App;
