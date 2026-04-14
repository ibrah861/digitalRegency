import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import { NavigationContext } from "./util/Context";
// css
import "./App.css";
import "./style/Landpage.css";
import "./style/Nav.css";
import "./style/auth.css";

// pages
import Landpage from "./pages/Landpage";
import Navigation from "./pages/Nav";
import Menu from "./pages/Menu";
import AuthSignup from "./pages/authPage/Auth.Signup";

function App() {
  const location = useLocation();
  const path = location.pathname;

  const login = "/auth-sigin";
  const signup = "/auth-signup";

  if (path === login || path === signup) {
    console.log("correct path");
  }
  return (
    <>
      <NavigationContext>
        <Menu />
        <Navigation />
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/auth-signup" element={<AuthSignup />} />
        </Routes>
      </NavigationContext>
    </>
  );
}

export default App;
