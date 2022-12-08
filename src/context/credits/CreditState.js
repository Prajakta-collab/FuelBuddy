import React,{useState} from 'react';
import creditContext from "./creditContext"

const CreditState = (props) => {
    const host = "http://localhost:5001";
       
    const [custcredit,setcustCredit]=useState({"vehicle_owner":"","available_credit":"","allowed_credit":""})
   const [credit, setCredit] = useState({"available_credit":"","utilized_credit":"","allowed_credit":""})
   const [request,setReq]=useState([])
   const [cust,setCust]=useState({"_id":"","name":""})

   const [custdetails, setCustdetails] = useState({});
  const [alltr,setAlltr]=useState({})
   const [card,setCard]=useState({})
   const [cardpump,setCardpump]=useState({})
   const[allatt,setAllatt]=useState([])
   const[custtr,setCusttr]=useState([])

   //get all trans for one cust: pump owner
   const getcusttr= async(id) =>{
    const response = await fetch(`${host}/api/fuel/getalltr/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem('auth-token')
      }
    });
    const json=await response.json()
    setCusttr(json)
  }

   //get all pump attendants: pump owner
   const getallatt= async() =>{
    const response = await fetch(`${host}/api/auth/getallatt`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem('auth-token')
      }
    });
    const json=await response.json()
    setAllatt(json)
  }
   //all transaction:pump owner
   const getalltr= async() =>{
    const response = await fetch(`${host}/api/fuel/getalltransactions`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem('auth-token')
      }
    });
    const json=await response.json()
    setAlltr(json)
  }
    //pump att card
    const getcardpumpat= async() => {
      const response = await fetch(`${host}/api/fuel/getreqdata`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          'auth-token':localStorage.getItem('auth-token')

        }
      });
      console.log("api call pump att card")
      const json=await response.json()
      console.log(json)
      setCardpump(json)
     }
   //card detail pump owner
   const getcardsdetail= async() => {
    const response = await fetch(`${host}/api/fuel/getcarddetails`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem('auth-token')

      }
    });
    console.log("api call card")
    const json=await response.json()
    console.log(json)
    setCard(json)
   }


   const getcustomer= async() =>{
    const response = await fetch(`${host}/api/credit/fetchallcredits`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem('auth-token')

      }
    });
    console.log("api call cust")
    const json=await response.json()
    setCust(json)

  }
  
  //get credit
  const getcredit= async() =>{
    const response = await fetch(`${host}/api/credit/fetchcredit`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem('auth-token')
      }
    });
    const json=await response.json()
    setCredit(json)
  }



   //get credit
   const getcustdetails= async(id) =>{
    const response = await fetch(`${host}/api/auth/getcust/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem('auth-token')

        
      }
    });
    const json=await response.json()
    setCustdetails(json)
    console.log("after setting custdetails",custdetails)
  }

  //get all  request
  const getrequest = async () => {
    //todo Api call here
   
    const response = await fetch(`${host}/api/fuel/getallreq`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        'auth-token':localStorage.getItem('auth-token')

       
      }
  
     
    });
   const json=await response.json()
  //  console.log("get request krtana ch json",json);
  setReq(json)
  };

 //addcustomer getall request
  const addCustomer = async(name,email,password,phone1,credit) => {

    //add request api call
    let response = await fetch(`${host}/api/auth/createuser`,{
      method: "POST",

      headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem('auth-token')

      },
      body: JSON.stringify({name,email,password,phone1,credit}),

    });
    
    const json = await response.json()
    
  }


//end addcust







  const completerequest = async (id) => {
    //edit request here
   
    let response = await fetch(`${host}/api/fuel/completereq/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        'auth-token':localStorage.getItem('auth-token')

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
        'auth-token':localStorage.getItem('auth-token')
      },
      body: JSON.stringify({ debit,vehicle_no,status}),

    });
    setReq(request.concat(request));
    const json = await response.json()
    console.log("after concat request",request)
  }



  
  return (

    <creditContext.Provider value={{request,custdetails,cardpump,alltr,allatt,custtr,getcusttr,getcustdetails,getallatt,getalltr,getcardpumpat,credit,cust,custcredit,card,getcardsdetail,getcustomer,getrequest,completerequest,addRequest,addCustomer,getcredit}}>


    {props.children}
  </creditContext.Provider>
  )
}

export default CreditState