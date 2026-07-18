import { useEffect, useState } from "react";
import axios from "axios";
import "./Registrations.css";


function Registrations(){

const [students,setStudents] = useState([]);


useEffect(()=>{

axios.get("http://localhost:8080/api/registrations")

.then(res=>{

setStudents(res.data);

})

.catch(err=>{

console.log(err);

});


},[]);



return(

<div className="registration-page">


<h1>
🎓 Registered Students
</h1>



<table>


<thead>

<tr>

<th>Name</th>

<th>Email</th>

<th>Phone</th>

<th>Event</th>

</tr>

</thead>



<tbody>


{

students.map((student)=>(

<tr key={student.id}>

<td>{student.name}</td>

<td>{student.email}</td>

<td>{student.phoneNumber}</td>

<td>{student.eventName}</td>


</tr>


))

}


</tbody>


</table>



</div>

);


}


export default Registrations;