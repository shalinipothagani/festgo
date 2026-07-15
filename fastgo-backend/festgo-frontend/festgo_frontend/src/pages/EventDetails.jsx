import { useNavigate, useParams } from "react-router-dom";
import "./EventDetails.css";

const events = [
  {
    name: "Dance Fest",
    date: "2026-03-10",
    venue: "Main Stage",
    img: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e",
    description: "Enjoy amazing dance performances and competitions."
  },
  {
    name: "Music Night",
    date: "2026-03-11",
    venue: "Auditorium",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    description: "Live DJ and music performances."
  },
  {
    name: "Fashion Show",
    date: "2026-08-05",
    venue: "Open Arena",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    description: "Trendy fashion showcase and modeling event."
  }
];

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events[parseInt(id)];

  if (!event) {
    return <h2 style={{color:"white"}}>Event not found</h2>;
  }

  return (
    <div className="details-page">
      <img src={event.img} alt={event.name} />

      <h1>{event.name}</h1>
      <p>📅 {event.date}</p>
      <p>📍 {event.venue}</p>
      <p className="desc">{event.description}</p>

      <button 
        className="register-btn"
        onClick={() => navigate(`/register/${id}`)}
      >
        Register Now 🚀
      </button>
    </div>
  );
}

export default EventDetails;