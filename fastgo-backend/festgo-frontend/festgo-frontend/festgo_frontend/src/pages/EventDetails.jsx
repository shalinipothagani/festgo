import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./EventDetails.css";

function EventDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);


  useEffect(() => {

    axios.get(`http://localhost:8080/api/events/${id}`)
      .then(res => setEvent(res.data))
      .catch(err => console.log(err));

  }, [id]);


  if (!event) {
    return (
      <h2 className="loading">
        Loading...
      </h2>
    );
  }


  return (

    <div className="details-page">


      <button 
        className="back-btn"
        onClick={()=>navigate(-1)}
      >
        ⬅ Back
      </button>


      <div className="details-card">


        <h1>
          {event.name}
        </h1>


        <img
          src={event.img || "https://via.placeholder.com/400"}
          alt={event.name}
          className="event-image"
        />


        <p>
          📅 <b>Date:</b> {event.date}
        </p>


        <p>
          📍 <b>Venue:</b> {event.venue}
        </p>


        <p>
          📝 <b>Description:</b> {event.description}
        </p>



        {/* OPEN REGISTRATION FORM */}
        <button
          className="register-btn"
          onClick={()=>navigate(`/register/${event.id}`)}
        >
          🚀 Register Now
        </button>


      </div>


    </div>

  );
}

export default EventDetails;