import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Register.css";

function Register() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    eventType: "",
    branch: ""

  });


  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const res = await fetch(
        "http://localhost:8080/api/registrations",
        {

          method: "POST",

          headers: {

            "Content-Type": "application/json"

          },

          body: JSON.stringify({

  name: formData.name,

  email: formData.email,

  phoneNumber: formData.phone,

  eventName: formData.eventType,

  branch: formData.branch

})
        });


      if(res.ok){

        alert("✅ Registration Successful!");

        navigate("/");

      }
      else{

        alert("❌ Registration Failed");

      }


    } catch(error){

      console.log(error);

      alert("Server error");

    }

  };



  return (

    <div className="form-page">


      <div className="form-card">


        <h2>Event Registration</h2>

        <h1 className="subtitle">
          Fill the form to confirm your spot
        </h1>



        <form onSubmit={handleSubmit}>


          <label>Name *</label>

          <input

            type="text"

            name="name"

            placeholder="Enter your full name"

            required

            onChange={handleChange}

          />



          <label>Email *</label>

          <input

            type="email"

            name="email"

            placeholder="Enter your email"

            required

            onChange={handleChange}

          />



          <label>Phone Number *</label>

          <input

            type="tel"

            name="phone"

            placeholder="Enter phone number"

            required

            onChange={handleChange}

          />



          <label>Branch *</label>

          <select

            name="branch"

            required

            onChange={handleChange}

          >

            <option value="">
              Select Branch
            </option>

            <option value="CSE">
              CSE
            </option>

            <option value="AIML">
              CSE AIML
            </option>

            <option value="ECE">
              ECE
            </option>

            <option value="EEE">
              EEE
            </option>

            <option value="MECH">
              Mechanical
            </option>

          </select>




          <label>Select Event *</label>

          <select

            name="eventType"

            required

            onChange={handleChange}

          >

            <option value="">
              -- Choose Event --
            </option>

            <option value="Dance">
              Dance
            </option>

            <option value="Singing">
              Singing
            </option>

            <option value="Ramp Walk">
              Ramp Walk
            </option>

            <option value="Music">
              Music
            </option>

          </select>



          <button type="submit">

            Submit Registration

          </button>



        </form>


      </div>


    </div>

  );

}


export default Register;