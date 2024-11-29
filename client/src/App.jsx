import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Projects from "./pages/Projects";
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/Signin" element={<Signin />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Dashboard" element={<Dashboard />}/>
      <Route path="/projects" element={<Projects />}/>


      </Routes>
      </BrowserRouter>
  )
}