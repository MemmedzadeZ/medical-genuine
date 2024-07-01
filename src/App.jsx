import { useState } from "react";

import Header from "./components/Header/Header";
import Specialize from "./components/Mains/Specialize/Specialize";
import Experts from "./components/Mains/Experts/Experts";
import Followings from "./components/Mains/Followings/Followings";
import Departments from "./components/Mains/Departments/Departments";
import EachEvery from "./components/Mains/Each&Every/Each&Every";
import JoinUs from "./components/Mains/JoinUs/JoinUs";

function App() {
  return (
    <>
      <Header />
      <Specialize />
      <Experts />
      <Followings />
      <Departments />
      <EachEvery />
      <JoinUs />
    </>
  );
}

export default App;
