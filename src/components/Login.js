import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignForm,setIsSignForm]=useState(true)
    const toggleSignInForm=()=>{
        setIsSignForm(!isSignForm);
    }
  return (
    <div className='relative'>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background'/>
        </div>
        <form className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignForm? "Sign In" : "Sign Up"}</h1>
            {!isSignForm && <input type='text' placeholder='Username' className='p-4 my-4 w-full bg-gray-900'/>}
            <input type='email' placeholder='Email' className='p-4 my-4 w-full bg-gray-900'/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-900'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignForm? "Sign In" : "Register"}</button>
            <p className='py-6' onClick={toggleSignInForm}>{isSignForm?" New to Netflix? Sign Up Now" : "Already Registered? Sign In Now!"}</p>
        </form>
    </div>
  )
}

export default Login