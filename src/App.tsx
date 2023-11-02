import React from "react";
import Layout from "./Component/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
  );
};

export default App;
