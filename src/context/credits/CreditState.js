import React,{useState} from 'react';
import creditContext from "./creditContext"

const CreditState = (props) => {
    const host = "http://localhost:5001";
       
   const [credit, setCredit] = useState({"available_credit":"","utilized_credit":"","allowed_credit":""})
   const [request,setReq]=useState([])


  //get credit
  const getcredit= async() =>{
    const response = await fetch(`${host}/api/credit/fetchcredit`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });
    const json=await response.json()
    setCredit(json)
  }

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

  const completerequest = async (id) => {
    //edit request here
   
    let response = await fetch(`${host}/api/fuel/completereq/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      }
     
    });
   const json=await response.json()
 
  };


  const addRequest = async(debit,vehicle_no,status) => {

    //add request api call
    let response = await fetch(`${host}/api/fuel/addreq`,{
      method: "POST",

      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({ debit,vehicle_no,status}),

    });
    setReq(request.concat(request));
    const json = await response.json()
    console.log("after concat request",request)
  }



  
  return (
    <creditContext.Provider value={{request,credit,getrequest,completerequest,addRequest,getcredit}}>
    {props.children}
  </creditContext.Provider>
  )
}

export default CreditState