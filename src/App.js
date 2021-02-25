// React
import React from "react";
import "./App.css";

// Custom components
import Header from "./layout/Header";
import QRGenerator from "./components/QRGenerator";

const App = () => (
  <div className="containerCenter">
    <Header />
    <QRGenerator />
  </div>
);

export default App;
