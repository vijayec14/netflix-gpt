import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'


const Login = () => {
  const navigate=  useNavigate()
  const dispatch = useDispatch()
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const name = useRef(null)
  const email= useRef(null)
  const password= useRef(null)

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;
    if(!isSignInForm){
      //Sign Up Login Here
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/16914732?v=4"
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}))
            navigate("/browse")
          })
           
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+" - "+errorMessage)
        });
    }else{
      //Sign In Login Here
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode)
        });
    }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Background" />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className="absolute w-3/12 p-12 my-36 m-auto right-0 left-0 bg-black text-white rounded-lg opacity-80">
         <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In':'Sign Up'}</h1>
         {!isSignInForm && (        
           <input ref={name} type="text" className="p-4 my-2 w-full bg-gray-800" placeholder="Full Name" />
         )}
         <input ref={email} type="text" className="p-4 my-2 w-full bg-gray-800" placeholder="Email Address" />
         <input ref={password} type='password' className="p-4 my-2 w-full bg-gray-800" placeholder="Password" />
         <p className='text-red-500 py-2 font-bold'>{errorMessage}</p>
         <button className="p-4 my-4 w-full bg-red-700 rounded-lg" onClick={handleButtonClick}>{isSignInForm ? 'Sign In':'Sign Up'}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now':'Already Registered Sign In Now'}</p>
      </form>
      
    </div>
  )
}

export default Login