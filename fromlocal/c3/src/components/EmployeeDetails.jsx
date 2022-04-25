import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"


export const EmployeeDetails = () => {


  const [emp, setEmployee] = useState([])
  const [sts, setsts] = useState(false)
   const {id} = useParams()
useEffect(()=>{
  getdata() 
},[sts])

const getdata =()=>{
  axios.get(`http://localhost:8080/employee/${id}`).then((res)=>{
   // console.log(res.data.length)

   if(sts==true){
    res.data.status= "terminated"
   }
     setEmployee([...emp,res.data]);
  })
}

// const handleFire = () =>{
//   axios.get(`http://localhost:8080/employee/${id}`).then((res)=>{
//     // console.log(res.data.length)
//     res.data.status= "terminated"
      
//       setEmployee([...emp,res.data]);
//    })

// }

  return (

    <div className="user_details">

{emp.map((el)=>{
   return  <div>
     {console.log(el)}
    <img className="user_image" />
  <h4 className="user_name"> {el.employee_name}</h4><br />
  <span className="user_salary">${el.salary}</span><br />
  <span className="tasks"> tasks
 
    <li className="task">{el.tasks.join(",")}</li>
 
   
  </span><br />
  Status: <b className="status">  {el.status}</b> <br />
  Title: <b className="title">{el.title}</b><br />
  {/* Show this button only if user is not already terminated (users status is working) */}
  <button className="fire" onClick={()=>{
    setsts(true)
  }}>Fire Employee</button> <br />
  {/* Show this button only if user is not already team lead or terminated */}
  <button className="promote" onClick={()=>{
     //handlePromote()
  }}>promote</button><br />
  </div>
})}
    
    </div>
  );
};
