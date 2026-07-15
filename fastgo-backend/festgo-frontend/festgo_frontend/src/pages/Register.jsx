import { useParams } from "react-router-dom";
import "./Register.css";

function Register() {

  const { id } = useParams();

  return (
    <div className="register-container">

  <div className="overlay"></div>   {/* 👈 ADD THIS */}

  <div className="form-box">
    <h1>REGISTER🎉</h1>
        <p>Event ID: {id}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Registered Successfully 🚀");
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />

          <button type="submit">
            Register Now 🚀
          </button>
        </form>
      </div>

    </div>
  );
}

export default Register;