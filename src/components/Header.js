import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
       .then(() => {
        navigate("/");
       })
       .catch((error) => {
        navigate("/error");
       });
  };
  const user = useSelector((store) => store.user);
  // console.log(user);
  return (
    <div className='absolute flex justify-between w-screen px-8 bg-gradient-to-b from-black z-10'>
      <img className='w-52' src='https://imgs.search.brave.com/iMK0bpQOHFE9qAS6J2UI9mfJ97x8nhrepANtIF_PSds/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n' alt='logo'></img>
      {user && <button onClick={handleSignOut} className='bg-red-600 rounded-xl h-10 mt-10 text-white p-2 hover:bg-red-900 cursor-pointer'>Sign Out</button>}
    </div>
  )
}

export default Header
