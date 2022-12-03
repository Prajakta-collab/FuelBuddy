import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
 


const Login = (props) => {

  const [credentials, setcredentials] = useState({phone1:"",password:""})
  let navigate=useNavigate()
  const handleChange=(e)=>{
    console.log(e.target.name)
      setcredentials({...credentials,[e.target.name]:e.target.value})
      console.log(credentials.phone1);
      console.log(credentials.password);

      }


     const handleSubmit=async(e)=>{
      console.log("clicked login")
        e.preventDefault();
        const response=await fetch("http://localhost:5001/api/auth/login", {
            method: "POST",
      
            headers: {
              "Content-Type": "application/json",
            },
      
            body: JSON.stringify({phone1:credentials.phone1 ,password :credentials.password}),
          });
          let json= await response.json();
          console.log("json when login",json)


          if(json.success){
            //save the token 
            localStorage.setItem('auth-token',json.authToken);
            console.log("auth-token",localStorage.getItem('auth-token'))
            console.log("zal save")
            navigate(`/home/trucko/${json.data.id}`);
            alert("Login Succesfully!")
            // props.showAlert("Logged in Successfully !","success");
            setcredentials({phone1:"",password:""})
            

        }
        else{
          //  props.showAlert("Invaid Credentials","error")
           setcredentials({phone1:"",password:""})
        }
       
      };

  const [value, setValue] = useState("Pump Owner");

  const handleSelect = (e) => {
    console.log("jdj")
console.log(e);
setValue(e);
console.log(value);
  }

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
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div class="dropdown form-outline  mb-4">
                      
                      <Dropdown onSelect={(e)=>{console.log(e)}}>
                        <Dropdown.Toggle variant="primary" >
                          Select User Type
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item value="pumpo">Pump Owner</Dropdown.Item>
                          <Dropdown.Item value="trucko">Truck Owner</Dropdown.Item>
                          <Dropdown.Item value="attendent">Attendant</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

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

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="/" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="/" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="/" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}
export default Login;
