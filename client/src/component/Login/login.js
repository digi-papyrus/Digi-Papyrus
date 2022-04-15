import "./loginstyle.sass";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password2, setpassword2] = useState("");
  const [floatingClass, setFloatingClass] = useState(
    "FloatingComponentActive FloatingComponent"
  );
  let history = useNavigate();

  const addtolist = async (e) => {
    e.preventDefault();
    // url wehre the data should be post
    axios
      .post("/api/register/", {
        name: name,
        email: email,
        password: password,
        password2: password2,
      })
      .then((res) => {
        console.log(res.data);
      
        if (res.status=== 221) {
          history("/login");
          setMessage(res.data);
        } else {
          history("/");
        }
      });
  };

  const loginPostdata = async (e) => {
    e.preventDefault();
    const url = "/api/login/";
    axios
      .post(url, {
        username: username,
        password: password,
      })
      .then((res) => {
        const token =res.data.token;
        console.log(token);
        
        console.log(res.data);
        if (res.status===221 ) {
          setMessage(res.data);
        } else {
          history("/");
          localStorage.setItem("jwt", token);
          
        }
      });
  };
  const responsesuccessGoogle = async (res) => {
    const api = await fetch("/Dashboard", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        tokenId: res.tokenId,
      }),
    });
    history("/");

    axios({
      method: "POST",
      url: "http://localhost:5000/googlelogin",
      data: { tokenId: res.tokenId },
    }).then((res) => {
      const token = res.data;
      console.log(res.data);

      localStorage.setItem("jwt", token);

      history("/");
    });
  };
  const responsefailureGoogle = (res) => {
    console.log(res);
  };


  return (

    <div className="LoginPage">
      <div className="Components">
        <div className="Login">
          <h1>Login</h1>
          <input
            type="textbox"
            placeholder="Username"
            onChange={(event) => {
              setusername(event.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
          />
          <p className="forgot">
            If you have forgotten your password,
            <Link className="link" to="/forget">
              click here!
            </Link>{" "}
          </p>
          <p style={{ color: "red" }}> {message} </p>
          {/* <Link to="/"> */}
          <button className="sumbit" onClick={loginPostdata}>
            Login
          </button>
          <br />
          <div>
            {" "}
            <GoogleLogin
              clientId="602782645460-9d9ognvavgj0vi6ivk92na43ch14mjof.apps.googleusercontent.com"
              buttonText="Login With Google"
              onSuccess={responsesuccessGoogle}
              onFailure={responsefailureGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
         
          
        </div>
        <div className="Register">
          <h1>Signup</h1>
          <input
            type="textbox"
            placeholder="Name"
            onChange={(event) => {
              setname(event.target.value);
            }}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            onChange={(event) => {
              setemail(event.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(event) => {
              setpassword2(event.target.value);
            }}
          />
          <p style={{ color: "red" }}> {message} </p>

          <button onClick={addtolist} className="sumbit">
            Continue
          </button>
        </div>
        <div
          className={floatingClass}
          onClick={() => {
            if (floatingClass === "FloatingComponent") {
              setFloatingClass("FloatingComponentActive FloatingComponent");
            } else {
              setFloatingClass("FloatingComponent");
            }
          }}
        >
          {floatingClass === "FloatingComponent" ? (
            <div>
              <h1>LOGIN </h1>
              <h1>Into</h1>
              <h1>Digi-Papyrus</h1>
              <p>Think Opening Imagination as you turn the pages of book !</p>
              <button>Login now</button>
            </div>
          ) : (
            <div>
              <h1>Signup </h1>
              <h1>into</h1>
              <h1>Digi-Papyrus</h1>
              <p>Think Opening Imagination as you turn the pages of book !</p>
              <button>Register now</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Login;
