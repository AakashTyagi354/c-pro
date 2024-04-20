import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./pages/SignUp";
import RoomPage from "./pages/RoomPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/roompage" element={<RoomPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
