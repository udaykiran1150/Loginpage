import React, { useState } from 'react'
import './SignUp.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
   let [name,setName]=useState();
   let [email,setEmail]=useState();
   let [password,setPassword]=useState();
   let Navigate=useNavigate()

let HandleSubmit=(e)=>
{
  e.preventDefault();
  axios.post('http://localhost:5010/login',{name,email,password})
  .then(res=>{console.log(res.data)
        Navigate('/signin');
  })
  .catch(err=>console.log(err));
  
  
}

  return (
    <div className='sign-up-container'>
        <div className="sign-up-top">
               <h2>Register</h2>
        </div>
        <div className="sign-up-middle">
            <form action="" method ='post' className='form-elements' onSubmit={HandleSubmit}>
                <div className="form-element">
                <label>Name</label>
                <input type="text" name='name' placeholder='Enter name' onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="form-element">
                <label>Email</label>
                <input type="email" placeholder='Enter email'  name='email' onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="form-element">
                <label >Password</label>
                <input type="password" name='password' placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
              
              
                <button type='submit' > Register</button>
               
              

            </form>
        </div>
        <div className="signup-bottom">
                 <p>Already a have an account?
                 <Link to='/signin'>login  </Link>
                  </p>


        </div>
        
    </div>
  )
}

export default Signup