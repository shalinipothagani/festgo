import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


function Home(){

  const location = useLocation();

  const [showMessage,setShowMessage] = useState(false);


  useEffect(()=>{

    if(location.state?.message){

      setShowMessage(true);


      setTimeout(()=>{

        setShowMessage(false);

      },3000);

    }

  },[location]);



  return(

    <div className="home-page">


      {/* LOGOUT MESSAGE */}

      {
        showMessage && (

          <div className="logout-message">

            {location.state.message}

          </div>

        )
      }





      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="bg-video"
      >

        <source 
          src="/video.mp4" 
          type="video/mp4"
        />

      </video>





      <div className="overlay"></div>




      <Navbar />





      <div className="hero-content">


        <h1>
          FESTGO
        </h1>



        <h2>
          COLLEGE FEST MANAGEMENT SYSTEM
        </h2>



        <p>
          Manage, Explore and Register Events Easily
        </p>




        <br />



        <Link to="/login">

          <button>
            Login to Explore Events
          </button>

        </Link>



      </div>




    </div>

  )

}


export default Home;