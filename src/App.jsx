import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { NavigationContext } from "./util/Context";
// css
import "./App.css";
import "./style/Landpage.css";
import "./style/Nav.css";

// pages
import Landpage from "./pages/Landpage";
import Navigation from "./pages/Nav";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <NavigationContext>
        <Menu />
        <Navigation />
        <Routes>
          <Route path="/" element={<Landpage />} />
        </Routes>
      </NavigationContext>
    </>
  );
}

export default App;
