import React from "react"
import { Routes, Route } from "react-router-dom";
import "./App.css"
import { Home } from "./pages/Home"
import { Dashboard } from "./pages/Dashboard"
import { Products } from "./pages/Products"
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Products" element={<Products />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
