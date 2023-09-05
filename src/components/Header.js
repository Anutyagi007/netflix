import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  console.log(user)
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className='flex justify-between absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-40'>
        <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' className='w-52' alt='logo'/>
      {user && <div className='flex'>
        <img src={user?.photoURL} className='h-10 my-6' alt="user-icon"/>
        <button onClick={handleSignout}>Signout</button>
      </div>}
    </div>
  )
}

export default Header