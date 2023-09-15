import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Background" />
      </div>
      <form className="absolute w-3/12 p-12 my-36 m-auto right-0 left-0 bg-black text-white rounded-lg opacity-80">
         <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In':'Sign Up'}</h1>
         {!isSignInForm && (        
           <input type="text" className="p-4 my-2 w-full bg-gray-800" placeholder="Full Name" />
         )}
         <input type="text" className="p-4 my-2 w-full bg-gray-800" placeholder="Email Address" />
         <input type='password' className="p-4 my-2 w-full bg-gray-800" placeholder="Password" />
         <button className="p-4 my-4 w-full bg-red-700 rounded-lg">{isSignInForm ? 'Sign In':'Sign Up'}</button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now':'Already Registered Sign In Now'}</p>
      </form>
      
    </div>
  )
}

export default Login