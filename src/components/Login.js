import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "./Alert";

const Login = (props) => {
  const [credentials, setcredentials] = useState({
    phone1: "",
    password: "",
    userType: "",
  });
  const [userType, setUserType] = useState("");

  let navigate = useNavigate();

  const handleSelect = (e) => {
    setUserType(e);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials.phone1);
    console.log(credentials.password);
    console.log(credentials.userType);
  };

  const handleSubmit = async (e) => {
    console.log("clicked login");
    e.preventDefault();
    const response = await fetch("http://localhost:5001/api/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        phone1: credentials.phone1,
        password: credentials.password,
        userType: userType,
      }),
    });
    let json = await response.json();
    console.log("json when login", json);

    if (json.success && json.data.userType === "v_owner") {
      //save the token
      localStorage.setItem("auth-token", json.authToken);
      console.log("auth-token", localStorage.getItem("auth-token"));
      console.log("zal save");
      // props.showAlert("Logged in Successfully !","success");

      navigate(`/home/trucko/${json.data.id}`);
      alert("Login Succesfully!");
      setcredentials({ phone1: "", password: "", userType: "" });
      setUserType("");
    } else if (json.success && json.data.userType === "p_owner") {
      //save the token
      localStorage.setItem("auth-token", json.authToken);
      console.log("auth-token", localStorage.getItem("auth-token"));
      console.log("zal save");
      navigate(`/home/pumpo/${json.data.id}`);
      alert("Login Succesfully!");
      // props.showAlert("Logged in Successfully !","success");
      setcredentials({ phone1: "", password: "", userType: "" });
      setUserType("");
    } else if (json.success && json.data.userType === "attendant") {
      //save the token
      localStorage.setItem("auth-token", json.authToken);
      console.log("auth-token", localStorage.getItem("auth-token"));
      console.log("zal save");
      navigate(`/home/pumpattendant/${json.data.id}`);
      alert("Login Succesfully!");
      // props.showAlert("Logged in Successfully !","success");
      setcredentials({ phone1: "", password: "", userType: "" });
      setUserType("");
    } else {
      // props.showAlert("Invaid Credentials","error")
      alert("Phone or password is Incorrect !")
      setcredentials({ phone1: "", password: "", userType: "" });
      setUserType("");
    }
  };

  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>

                    

                    <div className="form-outline form-white mb-4">
                      <input
                        type="phone1"
                        id="phone1"
                        name="phone1"
                        placeholder="Phone number"
                        onChange={handleChange}
                        value={credentials.phone1}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={credentials.password}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <p className="small mb-3 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <div class="dropdown form-outline  mb-4">
                      <DropdownButton
                        alignRight
                        title={userType === "" ? "Select UserType" : userType}
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                      >
                        <Dropdown.Item eventKey="p_owner">
                          Pump Owner
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="attendant">
                          Attendant
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="v_owner">
                          Vehicle Owner
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                    <button
                      className="btn btn-outline-light btn-lg px-5 mb-4"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>

                    
                  </div>

                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
