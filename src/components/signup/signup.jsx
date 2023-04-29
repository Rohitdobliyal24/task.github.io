import React from "react";
import '../signup/signup.css'
const signup = () => {
  return (
    <div className="signup_page">
      <div className="img">
        hey
        {/* <img className="image" src={signupimage} alt="signup_img" /> */}
      </div>
      <div className="content">
        <h1>EazyGhar Broker</h1>

        <div className="signup_box">
          <h2>Create you account!</h2>
           
          <input type="text" name="number" id="number" className="input_fields" placeholder="Phone Number" required />
          <input type="password" name="password" id="pass" className="input_fields" placeholder="Password" required />
          <input type="password" name="confirm_password" id="cpass" className="input_fields" placeholder="Confirm Password" required/>
          <input type="text" name="name" id="name" className="input_fields" placeholder="Name (Optional)" />
          <input type="button" className="input_fields" id="submit" value="Create Account" />
          <br />
          <a href="#" id="to_login">Back to login</a>
        </div>
        </div>
    </div>
  );
};

export default signup;
