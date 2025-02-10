import React, { useState } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

     let [lemail,setLemail]=useState();
     let [lpassword,setLpassword]=useState();
     let Navigate=useNavigate()

  let HandleSignin=(e)=>
  {
        e.preventDefault();
        axios.post('http://localhost:5010/signin',{email:lemail,password:lpassword})
        .then(res=>{
          
          console.log(res)
          if(res.data==='success')
          {
            Navigate('/home');
          }
         
        })
        .catch(err=>console.log(err))
  }
  return (
    <div className='signin-container'>

      <div className="signin-top">
        <h2>Login</h2>
      </div>
      <div className="signin-middle">
        <form action="" method='post' className='signin-form' onSubmit={HandleSignin}>
          <div className="form-element">
            <label>Email</label>
            <input type="email" placeholder='enter email' name='lemail' onChange={(e)=>{setLemail(e.target.value)}} />
          </div>
          <div className="form-element">
            <label> password</label>
            <input type="password" name='lpassword' placeholder='Enter password'  onChange={(e)=>{setLpassword(e.target.value)}}/>
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
      <div className="signin-bottom">
        Dont You have an Account? <Link to={'/'}>Signup</Link>
      </div>

      
    </div>
  )
}

export default Login