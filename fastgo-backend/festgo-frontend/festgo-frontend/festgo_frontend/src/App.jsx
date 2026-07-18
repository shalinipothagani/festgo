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
import Register from "./pages/Register";
import Registrations from "./pages/Registrations";
import Categories from "./pages/Categories";


import ProtectedRoute from "./components/ProtectedRoute";



function App(){


  return(


    <BrowserRouter>


      <Routes>


        {/* HOME */}

        <Route 
          path="/" 
          element={<Home/>} 
        />



        {/* LOGIN */}

        <Route 
          path="/login" 
          element={<Login/>} 
        />




        {/* ADMIN DASHBOARD */}

        <Route

          path="/dashboard"

          element={

            <ProtectedRoute>

              <Dashboard/>

            </ProtectedRoute>

          }

        />
        <Route
 path="/categories"
 element={
   <ProtectedRoute>
      <Categories/>
   </ProtectedRoute>
 }
/>





        {/* REGISTERED STUDENTS PAGE */}

        <Route

          path="/registrations"

          element={

            <ProtectedRoute>

              <Registrations/>

            </ProtectedRoute>

          }

        />






        {/* OTHER PAGES */}

        <Route 
          path="/about" 
          element={<About/>} 
        />



        <Route 
          path="/contact" 
          element={<Contact/>} 
        />






        {/* EVENT DETAILS */}

        <Route

          path="/event/:id"

          element={<EventDetails/>}

        />






        {/* EVENT REGISTRATION FORM */}

        <Route

          path="/register/:id"

          element={<Register/>}

        />




      </Routes>


    </BrowserRouter>


  )

}


export default App;