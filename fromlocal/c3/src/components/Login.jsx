import {Link} from "react-router-dom"
import { useState } from "react";

export const Login = () => {
  //  use reqres to log user in.
 const [user, setuser] = useState({
  username:"",
  password:""
}
 
)

  const handleSubmit = (e)=>{
    e.preventDefault()
     localStorage.setItem("usr",JSON.stringify(user))
    console.log(user)
  }

  const handleChange = (e)=>{
  const {name, value}= e.target;

  setuser({...user,[name]:value}) 
  }
  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <input
        name="username"
       
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={handleChange}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={handleChange}
      />
      <Link to="../employees"> <input type="submit" value="SIGN IN" className="login_submit" /></Link>
     
    </form>
  );
};
