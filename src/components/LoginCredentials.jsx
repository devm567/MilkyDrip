import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

let name;
let pwd;
let cnfpwd;



function SwitchLoginSignUp() {
  const [mode, setMode] = useState(""); 

  return (
    <>
        <div className='d-flex align-items-center justify-content-center vh-100 vw-100 '>
            <div className='border border-4 p-3 border-dark rounded-3 bg-danger-subtle'>
                <div>
                    <button className="btn btn-primary me-4" onClick={() => setMode("login")}>
                    Login
                    </button>
                    <button className="btn btn-success" onClick={() => setMode("signup")}>
                    Sign Up
                    </button>
                </div>

                <div className="mt-3">
                    {mode === "login" && <LoginCredentials />}
                    {mode === "signup" && <SignUpCredential />}
                </div>
            </div>
        </div>
    </>
  );
}

function LoginCredentials() {
  return (
    <>
      <dl>
        <dt>UserName</dt>
        <dd> <input type="text" id="txtUserName" /> </dd>
        <dt>Password</dt>
        <dd> <input type="password" id="txtPassword" /> </dd>

        <button className="btn btn-primary" onClick={() => validateUser()}>Submit</button>
      </dl>
    </>
  );
}

function validateUser(){
  name = document.getElementById("txtUserName").value;
  pwd = document.getElementById("txtPassword").value;
  console.log(name);
  console.log(pwd);
  if (window.opener) {
    window.opener.postMessage({ type: "login", name, pwd }, "*");
  }
  window.close();

}

function SignUpCredential() {
  return (
    <>
      <dl>
        <dt>UserName</dt>
        <dd> <input type="text" id="txtUserName" /> </dd>
        <dt>Password</dt>
        <dd> <input type="password" id="txtPassword" /> </dd>
        <dt>Confirm Password</dt>
        <dd> <input type="password" id="txtConfirmPassword" /> </dd>

        <button className="btn btn-primary" onClick={() => registerUser()}>Submit</button>
      </dl>
    </>
  );
}

function registerUser(){
  name = document.getElementById("txtUserName").value;
  pwd = document.getElementById("txtPassword").value;
  cnfpwd = document.getElementById("txtConfirmPassword").value;
  
  console.log(name);
  console.log(pwd);
  console.log(cnfpwd);
  if (window.opener) {
    window.opener.postMessage({ type: "signup", name, pwd, cnfpwd }, "*");
  }
  
  window.close();

    
}

createRoot(document.getElementById('LoginSection')).render(
  <StrictMode>
    <SwitchLoginSignUp />
  </StrictMode>
)

export default SwitchLoginSignUp;
