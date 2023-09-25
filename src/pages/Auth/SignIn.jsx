import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header';
import  style from './style.module.css'
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/userAction';
import { toast } from "react-toastify";
import { validateEmail } from '../../reducers/userReducer';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
const SignIn = () => {
     const dispatch = useDispatch();
   
     const[email ,setemail] = useState("")
     const[password ,setpassword] = useState(" ")
    const loginstate = useSelector(state => state.loginUserReducer)
    const{loading, error} = loginstate
     const login =  () => {

          if (!email || !password) {
               return toast.error("All fields are required");
             }
         
             if (!validateEmail(email)) {
               return toast.error("Please enter a valid email");
             }
         
             const userData = { email,password};
            dispatch(loginUser(userData))

     };  useEffect(() => {
          if (localStorage.getItem('currentUser'))
          {
               window.location.href = "/Boitque";

          }
     
     }, [])
    
          const[showPassword,setShowPassword] = useState(false)
       
          const togglePassword = () => {
                 setShowPassword(!showPassword)
          }
          
       
          
            
       
       
  return (
    

         <div className={style.main__container}>
            <Header />

             <div className={style.Glass__effect}>
                <div className={style.Initial__Text}>
                    Log into your account
                </div>
                         {loading && (<Loading/>)}
                         {error && (<Error error='Invalid Credentials' />)}
                        <div className={style.Input__Container}  >
                      

                             <input
                             className={style.Styled__Input} 
                              type={"email"}
                              placeholder='Email' 
                              required 
                              name ="email"
                              value={email}
                              onChange={(e) => {setemail(e.target.value)} }
                              />
                             <input
                                className={style.Styled__Input} 
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
                          </div>

                            <div className={style.Button__Container}  >        
                             <button type='submit' onClick={login} className={style.Styled__Button} > Sign in </button>
                                
                                 </div>
                              <Link to="/forgot" className={style.forget__password}>Forgot Password</Link>
                              <p className={style.account}> Don't have an account? &nbsp; </p>
                              <Link to="/signUp"className={style.register}>Register</Link>
                        </div>
                   </div>
         

  )
}

export default SignIn