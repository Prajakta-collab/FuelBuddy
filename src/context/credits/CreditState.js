import React,{useState} from 'react';
import creditContext from "./creditContext"

const CreditState = (props) => {
    const host = "https://fuelbuddybackend.onrender.com";
    // const host="http://localhost:5001"

       
    const [custcredit,setcustCredit]=useState({"vehicle_owner":"","available_credit":"","allowed_credit":""})
   const [credit, setCredit] = useState({"available_credit":"","utilized_credit":"","allowed_credit":""})
   const [request,setReq]=useState([])
   const [cust,setCust]=useState({"_id":"","name":""})

   const [custdetails, setCustdetails] = useState({});

   const [toggle, setToggle] = useState(true);


  const [alltr,setAlltr]=useState({})

   const [card,setCard]=useState({})
   const [cardpump,setCardpump]=useState({})
   const[allatt,setAllatt]=useState({})
   const[custtr,setCusttr]=useState({"transaction_no":"","tr_date":"","vehicle_no":"","debit":""})
   const[pay,setPay]= useState({})
   const[upcust,setUpdatecust]=useState({})
  // const[delcust,setDeletecust]=useState({})

   //delete vehicle owner
   const deletecust = async (id) => {
    let response = await fetch(`${host}/api/auth/deletevo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'auth-token':localStorage.getItem('auth-token')
      },
    });
    const json=await response.json()
    //setDeletecust(json)
    return json;
  };

   //update vehicle owner : pump owner login required
   const updatecust = async (id,name,email,phone1,phone2,Credit) => {
    let response = await fetch(`${host}/api/auth/updatevo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'auth-token':localStorage.getItem('auth-token')
      },
      body: JSON.stringify({name,email,phone1,phone2,Credit}) 
    });
   const json=await response.json()
   console.log(json);
   setUpdatecust(json);
   return json;

   

  };

   //payment for particular customer -> update credit: pump owner login required
   const postpay= async(id,credit,particulars,reference)=>{
  //  let credit=Number(newCredit)
  console.log("credit in credit state",typeof(credit))
    
    let response = await fetch(`${host}/api/credit/payment/${id}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem('auth-token')        
      },
      body: JSON.stringify({credit,particulars,reference})
      
    });
    const json=await response.json()
    console.log("json doc",json)
    setPay(json);
    return json;

   }
 
   //get all trans for one cust: pump owner
   const getcusttr= async(id) =>{
    console.log("api params",id)
    const response = await fetch(`${host}/api/fuel/getalltr/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem('auth-token')        
      }
    });
    const json=await response.json()
    console.log("api call",json)
    setCusttr(json)
    console.log("after setting custtrans",custtr)
  }


   const handleToggle = () => {
  
    console.log(toggle);
    setToggle(!toggle);
    
  };


  const updateAtt = async(id,name,email,password,phone1,phone2,shift) => {

    //add request api call
    console.log("id",id);
    let response = await fetch(`${host}/api/auth/updateatt/${id}`,{
      method: "PUT",
  
      headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem('auth-token')
  
      },
      body: JSON.stringify({name,email,password,phone1,phone2,shift}),
  
    });
    
    const json = await response.json();
    return json;
    
  }
  
  
  //end updateattendant
 //addAttendant start
 const addAtt = async(name,email,password,phone1,phone2,shift) => {

  //add request api call
  let response = await fetch(`${host}/api/auth/createatt`,{
    method: "POST",

    headers:{
      "Content-Type":"application/json",
      'auth-token':localStorage.getItem('auth-token')

    },
    body: JSON.stringify({name,email,password,phone1,phone2,shift}),

  });
  
  const json = await response.json()
  return json;
  
}


//end addAttendant

  //delete Attendant
  const deleteAtt = async (id) => {
    //edit request here
   
    let response = await fetch(`${host}/api/auth/deleteatt/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        'auth-token':localStorage.getItem('auth-token')

      }
     
    });
   const json=await response.json();
   return json;
 
  };
//end of delete dcustomer

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

  //get own all transaction :vehicle_owner transaction page
  const getownalltr= async() =>{
    const response = await fetch(`${host}/api/fuel/getalltr`,{
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
    console.log("json",json)
    setCust(json.credits)

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
    console.log("json",json)
    setCredit(json.credits)
  }



   //get 1 customer detail
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
    
    const json = await response.json();
    return json;
    
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
   const json=await response.json();
   return json;
   
 
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
    return json;

  }

//search fuel req by vehilce no : Homeatt page search bar
  const searchByvno = async(vehicle_no) => {

    //add request api call
    let response = await fetch(`${host}/api/fuel/searchreq`,{
      method: "POST",

      headers:{
        "Content-Type":"application/json",
        'auth-token':localStorage.getItem('auth-token')
      },
      body: JSON.stringify({ vehicle_no}),

    });
    
    const json = await response.json()
    console.log("json after call marlya nantr",json.request)
    setReq(json.request);
  }

//search transaction by vehicle owner name : Transaction.js search bar
const searchByName = async(name) => {

  //add request api call
  let response = await fetch(`${host}/api/fuel/searchbyname`,{
    method: "POST",

    headers:{
      "Content-Type":"application/json",
      'auth-token':localStorage.getItem('auth-token')
    },
    body: JSON.stringify({ name}),

  });
  
  const json = await response.json()
  console.log("json after call marlya nantr",json.request)
  setAlltr(json);
}
  
//filter all transactions by duration: daily,last7 days,last month, YTD (pumpo->Transactions.js filter)
const filterByDuration = async(duration) => {

  console.log("here")
  let response = await fetch(`${host}/api/fuel/filteralltr`,{
    method: "POST",

    headers:{
      "Content-Type":"application/json",
      'auth-token':localStorage.getItem('auth-token')
    },
    body: JSON.stringify({duration}),

  });
  
  const json = await response.json()
  console.log("filterbyduration",json)
  setAlltr(json);
}
  return (


    <creditContext.Provider value={{pay,upcust,deletecust,updatecust,postpay,getownalltr,filterByDuration,searchByName,searchByvno,request,custdetails,deleteAtt,addAtt,updateAtt,cardpump,alltr,allatt,custtr,getcusttr,getcustdetails,getallatt,getalltr,getcardpumpat,credit,cust,custcredit,card,getcardsdetail,getcustomer,getrequest,completerequest,addRequest,addCustomer,getcredit,handleToggle,toggle}}>


    {props.children}
  </creditContext.Provider>
  )
}

export default CreditState