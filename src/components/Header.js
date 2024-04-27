import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
       .then(() => {
       })
       .catch((error) => {
        navigate("/error");
       });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, []);
  const user = useSelector((store) => store.user);
  // console.log(user);
  return (
    <div className='absolute flex justify-between w-full px-8 bg-gradient-to-b from-black z-10'>
      <img className='w-52' src={LOGO} alt='logo'></img>
      {user && <button onClick={handleSignOut} className='bg-red-600 rounded-xl h-10 mt-10 text-white p-2 hover:bg-red-900 cursor-pointer'>Sign Out</button>}
    </div>
  )
}

export default Header
