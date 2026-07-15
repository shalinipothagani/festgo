import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


function Home(){

  return(

    <div className="home-page">


      <video autoPlay muted loop playsInline className="bg-video">

        <source src="/video.mp4" type="video/mp4"/>

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