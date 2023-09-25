import React, { useState } from 'react'
import style from'./SignUp.module.css'
import Header from '../../../components/header/Header'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { registerUser } from '../../../actions/userAction'
import { validateEmail } from '../../../reducers/userReducer'
import Loading from '../../../components/Loading'
import Error from '../../../components/Error'
import Success from '../../../components/Success'


const initialState = 
     {
           name:"",
           email:"",
           password:"",
           password2:"",
     }
const SignUp = () => {
    
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const[name,setname] = useState("")
     const[email,setemail] = useState("")
     const[password,setpassword] = useState("")
     const[password2,setpassword2] = useState("")

     const[showPassword,setShowPassword] = useState(false)
       
     const togglePassword = () => {
            setShowPassword(!showPassword)
     }
    const registerstate = useSelector(state => state.getAllOrdersReducer)
    const {error,loading,success} = registerstate
        function register () {
      
          if (!name || !email || !password) {
            return toast.error("All fields are required");
          }
          if (password.length < 6) {
            return toast.error("Passwords must be up to 6 characters");
          }
          if (!validateEmail(email)) {
            return toast.error("Please enter a valid email");
          }
          if (password !== password2) {
            return toast.error("Passwords do not match");
          }
      
          const userData = {
            name,
            email,
            password,
          };
          console.log(userData);
           dispatch(registerUser(userData));
        
        };
      
  return (
         <div className={style.main__container}  >
          <Header />
             <div className={style.Glass__effect}>
              {loading && (<Loading/>)}
              {success && (<Success success='User Registered Successfully' />)}
              {error && (<Error error='Email already registered' />)}

                <div className={style.Initial__Text}>
                  Create your account                
                  </div>
                        <div className={style.Input__Container}  >
                         <input 
                             className={style.Styled__Input}  
                             type="text" 
                             placeholder="Name"  
                             required
                             name="name"
                             value={name}
                             onChange={(e) => {setname(e.target.value)} }
                             />
                          <input 
                             className={style.Styled__Input}  
                             type={"email"} 
                             required
                             name="email"
                             placeholder='Email'  
                             value={email}
                             onChange={(e) => {setemail(e.target.value)} }
                          
                             />
                            
                             <input className={style.Styled__Input} 
                              type={showPassword ? "text" : "password" }
                              required
                               placeholder="Password"
                               name="password"
                               value={password}
                               onChange={(e) => {setpassword(e.target.value)} }
                               onPaste={(e) => e.preventDefault()} 
                               
                               
                               />
                               <div className={style.icon} onClick={togglePassword} >
                                  {showPassword ? (
                                      <AiOutlineEyeInvisible size = {20} />
                                  ) : (
                                      <AiOutlineEye size= {20} />
                                  )}
                               </div>

                               <input className={style.Styled__Input} 
                              type={showPassword ? "text" : "password" }
                              required
                               placeholder="Confirm Password"
                               name="password2"
                               value={password2}
                               onChange={(e) => {setpassword2(e.target.value)} }
                               onPaste={(e) => {
                                   e.preventDefault();
                                   toast.error("Cannot paste into input field.");
                                   return false;
                                 }}
                               
                               
                               />
                               <div className={style.icon_2} onClick={togglePassword} >
                                  {showPassword ? (
                                      <AiOutlineEyeInvisible size = {20} />
                                  ) : (
                                      <AiOutlineEye size= {20} />
                                  )}
                               </div>
                             {/* Password Strength */}

                             
                        </div>
                            <div className={style.Button__Container}  >           
                                 <button className={style.Styled__Button} onClick={register }>  Sign up </button>
                            </div>
                              <p className={style.account}> Already Have an account &nbsp; </p>
                              <Link to="/signIn"className={style.register}>Log In</Link>
                        </div>
                   </div>
    
         

  )
}

export default SignUp