import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate(); // ✅ ADD THIS

  const [events,setEvents] = useState([

    {
      name:"Dance Fest",
      date:"2026-03-10",
      venue:"Main Stage",
      link:"#",
      img:"https://images.unsplash.com/photo-1504609813442-a8924e83f76e"
    },

    {
      name:"Music Night",
      date:"2026-03-11",
      venue:"Auditorium",
      link:"#",
      img:"https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
    },

    {
      name:"Fashion Show",
      date:"2026-08-05",
      venue:"Open Arena",
      link:"#",
      img:"https://images.unsplash.com/photo-1509631179647-0177331693ae"
    }

  ]);

  const [event,setEvent]=useState({

    name:"",
    date:"",
    venue:"",
    link:""

  });

  function addEvent(e){

    e.preventDefault();

    const newEvent={

      ...event,
      img:"https://images.unsplash.com/photo-1511578314322-379afb476865"

    };

    setEvents([...events,newEvent]);

    setEvent({

      name:"",
      date:"",
      venue:"",
      link:""

    });

  }

  return(

    <div className="admin-dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <h2>FESTGO</h2>

        <ul>
          <li>Dashboard</li>
          <li>Manage Events</li>
          <li>Registrations</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>

      </aside>

      {/* MAIN CONTENT */}
      <div className="dashboard-content">

        <h1>Admin Dashboard</h1>
        <p>Manage college fest events easily</p>

        {/* STATS */}
        <div className="stats">

          <div className="stat-card">
            <h2>{events.length}</h2>
            <p>Total Events</p>
          </div>

          <div className="stat-card">
            <h2>150+</h2>
            <p>Students Registered</p>
          </div>

          <div className="stat-card">
            <h2>10</h2>
            <p>Categories</p>
          </div>

        </div>

        {/* ADD EVENT */}
        <div className="event-form">

          <h2>Add New Event</h2>

          <form onSubmit={addEvent}>

            <input
              placeholder="Event Name"
              value={event.name}
              onChange={(e)=>
                setEvent({...event,name:e.target.value})
              }
            />

            <input
              type="date"
              value={event.date}
              onChange={(e)=>
                setEvent({...event,date:e.target.value})
              }
            />

            <input
              placeholder="Venue"
              value={event.venue}
              onChange={(e)=>
                setEvent({...event,venue:e.target.value})
              }
            />

            <input
              placeholder="Registration Link"
              value={event.link}
              onChange={(e)=>
                setEvent({...event,link:e.target.value})
              }
            />

            <button>Add Event</button>

          </form>

        </div>

        {/* EVENT LIST */}
        <h2 className="event-title">Upcoming Events</h2>

        <div className="event-grid">

          {
            events.map((e,index)=>(

              <div className="admin-card" key={index}>

                <img src={e.img} alt={e.name}/>

                <div>

                  <h3>{e.name}</h3>

                  <p>📅 {e.date}</p>

                  <p>📍 {e.venue}</p>

                  {/* ✅ ONLY CHANGE HERE */}
                  <button onClick={() => navigate(`/event/${index}`)}>
                    View Details
                  </button>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </div>

  )
}

export default Dashboard;