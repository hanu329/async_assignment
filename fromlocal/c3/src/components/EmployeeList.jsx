import {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"


export const EmployeeList = () => {
const [emp, setEmployee] = useState([])

useEffect(()=>{
  getdata() 
},[])

const getdata =()=>{
  axios.get("http://localhost:8080/employee").then((res)=>{
   // console.log(res.data.length)
   console.log(res)
     setEmployee([...emp,res.data]);
  })
}
{
 // console.log(emp)
}
  return (
    <div className="list_container">
      hello from employees
    
      {/* On clicking this card anywhere, user goes to user details */}
      <div>
      { emp.map((el)=>{
    
    return  <Link to={`./employee/${el.id}`} className="employee_card">
    { console.log(el[0].employee_name)}
      <img className="employee_image" src="#" alt="image file"/>
      <span className="employee_name">{el.employee_name}</span>
      <span className="employee_title">{el.title}</span>
    </Link>
   })}
        
      </div>
     
     
     
    </div>
  );
};
