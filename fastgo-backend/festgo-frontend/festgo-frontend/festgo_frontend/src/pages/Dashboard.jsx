import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {

  const navigate = useNavigate();

  const BASE_URL = "http://localhost:8080/api/events";


  const [events, setEvents] = useState([]);

  const [event, setEvent] = useState({

    name:"",
    date:"",
    venue:"",
    description:"",
    img:"",
    link:""

  });



  useEffect(()=>{


    if(!localStorage.getItem("token")){

      navigate("/login",{replace:true});
      return;

    }


    fetchEvents();


  },[navigate]);





  function fetchEvents(){

    axios.get(BASE_URL)

    .then(res=>{

      setEvents(res.data);

    })

    .catch(err=>{

      console.log(err);

    });

  }







  function scrollToEvents(){


    document
    .getElementById("upcoming-events")
    .scrollIntoView({

      behavior:"smooth"

    });


  }







  function handleLogout(){


    localStorage.removeItem("token");


    navigate("/",{

      replace:true,

      state:{
        message:"Logged out successfully"
      }

    });


  }








  async function addEvent(e){


    e.preventDefault();


    try{


      const res =
      await axios.post(
        BASE_URL,
        event
      );



      setEvents(prev=>[

        ...prev,
        res.data

      ]);




      setEvent({

        name:"",
        date:"",
        venue:"",
        description:"",
        img:"",
        link:""

      });



      alert("✅ Event Added");


    }


    catch(err){

      console.log(err);

      alert("❌ Event not added");

    }


  }







  async function deleteEvent(id){


    try{


      await axios.delete(

        `${BASE_URL}/${id}`

      );



      setEvents(prev=>

        prev.filter(
          e=>e.id!==id
        )

      );


    }


    catch(err){

      console.log(err);

    }


  }









return(


<div className="admin-dashboard">





{/* SIDEBAR */}


<aside className="sidebar">


<h2>FESTGO</h2>


<ul>


<li onClick={()=>navigate("/dashboard")}>

🏠 Dashboard

</li>



<li onClick={scrollToEvents}>

🎉 Events

</li>




<li onClick={()=>navigate("/registrations")}>

👨‍🎓 Students

</li>




<li onClick={()=>navigate("/categories")}>

🎭 Categories

</li>





<li onClick={handleLogout}>

🚪 Logout

</li>



</ul>


</aside>









{/* MAIN CONTENT */}


<div className="dashboard-content">



<h1>
 Dashboard 
</h1>


<p>
Manage college fest events easily
</p>








{/* STATS */}


<div className="stats">





<div className="stat-card">

<h2>
{events.length}
</h2>

<p>
Total Events
</p>

</div>







<div

className="stat-card"

onClick={()=>navigate("/registrations")}

style={{cursor:"pointer"}}

>


<h2>
2
</h2>


<p>
👨‍🎓 Students Registered
</p>


</div>









<div

className="stat-card"

onClick={()=>navigate("/categories")}

style={{cursor:"pointer"}}

>


<h2>
6
</h2>


<p>
🎭 Categories
</p>


</div>






</div>









{/* ADD EVENT */}



<div className="event-form">


<h2>
Add New Event
</h2>



<form onSubmit={addEvent}>


<input

placeholder="Event Name"

value={event.name}

onChange={(e)=>

setEvent({

...event,

name:e.target.value

})

}

required

/>






<input

type="date"

value={event.date}

onChange={(e)=>

setEvent({

...event,

date:e.target.value

})

}

required

/>






<input

placeholder="Venue"

value={event.venue}

onChange={(e)=>

setEvent({

...event,

venue:e.target.value

})

}

required

/>







<input

placeholder="Event Description"

value={event.description}

onChange={(e)=>

setEvent({

...event,

description:e.target.value

})

}

required

/>







<input

placeholder="Event Image URL"

value={event.img}

onChange={(e)=>

setEvent({

...event,

img:e.target.value

})

}

required

/>







<input

placeholder="Registration Link"

value={event.link}

onChange={(e)=>

setEvent({

...event,

link:e.target.value

})

}

required

/>






<button type="submit">

Add Event

</button>



</form>


</div>









{/* EVENTS */}



<h2

className="event-title"

id="upcoming-events"

>

🎉 Upcoming Events

</h2>







<div className="event-grid">



{

events.map((e)=>(


<div

className="admin-card"

key={e.id}

>



<img

src={

e.img ||

"https://via.placeholder.com/300"

}

alt={e.name}

/>





<h3>

{e.name}

</h3>



<p>

📅 {e.date}

</p>




<p>

📍 {e.venue}

</p>



<p>

{e.description}

</p>







<button

onClick={()=>navigate(`/event/${e.id}`)}

>

View Details

</button>






<button

className="delete-btn"

onClick={()=>deleteEvent(e.id)}

>

Delete

</button>




</div>



))


}



</div>







</div>


</div>


);


}


export default Dashboard;