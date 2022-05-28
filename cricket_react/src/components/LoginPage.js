import React from 'react';
import {signInWithGoogle} from "../Firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {signup} from "../Firebase";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    let navigate = useNavigate();
    const runThis = async () => {
        await delay(7000);
        window.location.href="http://localhost:3000/homePage";
      };
     
  
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <button onClick ={ ()=>{
               signInWithGoogle();
               runThis()
            }  } type="button" className="login-with-google-btn" >
                  Sign in with Google
                 </button>
                 <h6 style={{textAlign: "center",margin: '20px' }}>Or</h6>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button  className="btn btn-success" active onClick ={ ()=>{
                 
                 navigate("/homePage");

            }  }>
              Submit
            </button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default LoginPage