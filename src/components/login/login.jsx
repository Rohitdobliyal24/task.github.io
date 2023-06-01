import React from "react";
import '../login/login.css'
// import image from "../../assets/black.jpg"
const signup = () => {
  return (
    <div className="login_page">
      <div className="img">
        
          <h1 id="head">100% uptime 😎</h1>
          <h2 id="head1">Zero Infrastructure Management</h2>
      </div>
      <div className="content">
        <h1>Welcome <span id="back">Back!</span> </h1>

        <div className="login_box">
          <h2>Glad to see you, Again!</h2>
           
          <input type="email" name="number" id="number" className="input_fields" placeholder="Enter your email" required />
          <input type="password" name="password" id="pass" className="input_fields" placeholder="Enter your Password" required />
          <input type="button" className="input_fields" id="submit" value="Login" />
          <br />
          <a href="#" id="to_signup">Don't have an account yet? <a href="#">Signup</a> </a>
        </div>
        </div>
    </div>
  );
};

export default signup;
