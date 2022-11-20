import React,{useState} from 'react';
import creditContext from "./creditContext"

const CreditState = (props) => {
    const host = "http://localhost:5001";
       
   const [credit, setCredit] = useState()

  return (
    <creditContext.Provider value={{}}>
    {props.children}
  </creditContext.Provider>
  )
}

export default CreditState