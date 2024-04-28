import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleShowGptSearch } from "../utils/gptSlice";
import { Supported_Languages } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleShowGptSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="absolute flex justify-between w-full px-8 bg-gradient-to-b from-black z-10">
      <img className="w-52" src={LOGO} alt="logo"></img>
      {user && (
        <div>
          { showGpt && 
          <select onClick={handleLanguageChange} className="p-2 m-2 bg-gray-800 text-white rounded-lg">
            {Supported_Languages.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          }
          <button
            onClick={handleGptSearch}
            className="bg-blue-600 rounded-lg h-10 mt-10 mr-4 text-white p-2 hover:bg-blue-900 cursor-pointer"
          >
            {showGpt ? "Home" : "GPT Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-600 rounded-lg h-10 mt-10 text-white p-2 hover:bg-red-900 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
