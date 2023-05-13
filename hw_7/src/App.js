import React from "react";
import { Routes, Route} from "react-router";
import About from "./pages/About";
import MainPage from "./pages/MainPage";

const App = () =>  {
  return (
    <>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </>
  );
}

export default App;
