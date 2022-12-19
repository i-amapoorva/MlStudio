import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import "antd/dist/antd.css";
import Projects from './Pages/Projects/Projects';
import Login from "./Pages/Login/Login";
import Test from './Pages/Test';
import SignUp from "./Pages/Signup/SignUp";
import AddImages from "./Pages/Addimages/AddImages";
import Annotation from "./Pages/Annotate/Annotate";
import Training from "./Pages/Training/Training";
import Testing from "./Pages/Testing/Testing";

const routes = (
  <Router>
    <Routes>
      <Route path="/projects" element={<Projects />} />      
      <Route path="/" element={<Login />} />      
      <Route path="/signup" element={<SignUp />} />      
      <Route path="/add-images/:id" element={<AddImages />} />      
      <Route path="/annotate/:id" element={<Annotation />} />      
      <Route path="/training/:id" element={<Training />} />      
      <Route path="/testing/:id" element={<Testing />} />      
    </Routes>
  </Router>
);

function App() {
  return (
    <div className="">
      {routes}
      
      
      
    </div>
  );
}

export default App;
