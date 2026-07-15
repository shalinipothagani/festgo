import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EventDetails from "./pages/EventDetails";
import Register from "./pages/Register"; // ✅ ADD THIS

function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/login" element={<Login/>} />

        <Route path="/dashboard" element={<Dashboard/>} />

        <Route path="/about" element={<About/>} />

        <Route path="/contact" element={<Contact/>} />

        {/* ✅ NEW ROUTE */}
        <Route path="/event/:id" element={<EventDetails/>} />
        
        <Route path="/register/:id" element={<Register />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App;