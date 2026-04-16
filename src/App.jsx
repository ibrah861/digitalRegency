import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import { NavigationContext } from "./util/Context";
// css
import "./App.css";
import "./style/Landpage.css";
import "./style/Nav.css";
import "./style/auth.css";
import "./style/loader.css";
import "./style/utility/ProjectName.css";

// pages
import Landpage from "./pages/Landpage";
import Navigation from "./pages/Nav";
import Menu from "./pages/Menu";
// auth routes
import AuthSignup from "./pages/authPage/Auth.Signup";
import AuthSignin from "./pages/authPage/Auth.Login";

// protected routes
import View from "./pages/protectedRoutes/View";
import Create from "./pages/protectedRoutes/Create";
import Update from "./pages/protectedRoutes/Update";
import Post from "./pages/protectedRoutes/Post";

function App() {
  return (
    <>
      <NavigationContext>
        <Menu />
        <Navigation />
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/auth-signup" element={<AuthSignup />} />
          <Route path="/auth-signin" element={<AuthSignin />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
          <Route path="/view" element={<View />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </NavigationContext>
    </>
  );
}

export default App;
