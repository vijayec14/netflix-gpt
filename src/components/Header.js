import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector( store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-screen px-8 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-52 z-50' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt='Logo' />
      {user && (
      <div className="flex items-center">
        <img className="w-16 h-16 mr-1 rounded-full" alt='User Icon' src={user.photoURL}/>
        <button onClick={handleSignOut} className='text-white font-bold'>(Sign Out)</button>
      </div>
      )}
    </div>
  )
}

export default Header