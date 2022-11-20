import React,{useState} from 'react';
import creditContext from "./creditContext"

const CreditState = (props) => {
    const host = "http://localhost:5001";
       
   const [credit, setCredit] = useState()
   const [request,setReq]=useState([])




  //get all  request
  const getrequest = async () => {
    //todo Api call here
   
    const response = await fetch(`${host}/api/fuel/getallreq`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
       
      }

     
    });
   const json=await response.json()
  //  console.log("get request krtana ch json",json);
  setReq(json)
  };
  return (
    <creditContext.Provider value={{request,credit,getrequest}}>
    {props.children}
  </creditContext.Provider>
  )
}

export default CreditState