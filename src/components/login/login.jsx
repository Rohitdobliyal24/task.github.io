import React from "react";
import '../login/login.css'
const signup = () => {
  return (
    <div className="login_page">
      <div className="img">
        hey
        {/* <img className="image" src={signupimage} alt="signup_img" /> */}
      </div>
      <div className="content">
        <h1>EazyGhar Broker</h1>

        <div className="login_box">
          <h2>Login</h2>
           
          <input type="text" name="number" id="number" className="input_fields" placeholder="Phone Number" required />
          <input type="password" name="password" id="pass" className="input_fields" placeholder="Password" required />
        
          <input type="button" className="input_fields" id="submit" value="Create Account" />
          <br />
          <a href="#" id="to_signup">Create Account</a>
        </div>
        </div>
    </div>
  );
};

export default signup;
