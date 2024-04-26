import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const toggleForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message !== null) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="main"
        ></img>
      </div>
      <form className="absolute w-1/3 bg-black p-10 mx-auto right-0 left-0 text-white my-24 rounded-xl bg-opacity-80">
        <h1 className="py-2 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="w-full p-4 mt-4 bg-gray-900 rounded-md "
            placeholder="Name"
          ></input>
        )}
        <input
          className="w-full p-4 mb-2 mt-4 bg-gray-900 rounded-md "
          placeholder="Email or phone number"
          ref={email}
        ></input>
        <input
          className="w-full p-4 my-2 bg-gray-900 rounded-md"
          placeholder="Password"
          type="password"
          ref={password}
        ></input>
        <p className="text-red-500 my-2">{errorMessage}</p>
        <button
          className="w-full p-4 my-2 bg-red-600 rounded-md hover:bg-red-950 transition-colors duration-300 ease-in-out"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <h1 className="text-xl text-center my-4 text-gray-300">OR</h1>
        )}
        {isSignInForm && (
          <h2 className="text-center hover:underline cursor-pointer">
            Forgot Password?
          </h2>
        )}
        {isSignInForm && (
          <h2 className="my-6 text-gray-200">
            New to Netflix?{" "}
            <span
              className=" text-white font-bold hover:underline cursor-pointer"
              onClick={toggleForm}
            >
              Sign up now.
            </span>
          </h2>
        )}
        {!isSignInForm && (
          <h2 className="my-6 text-gray-200">
            Already a user?{" "}
            <span
              className=" text-white font-bold hover:underline cursor-pointer"
              onClick={toggleForm}
            >
              Sign In now.
            </span>
          </h2>
        )}
        <h2 className="text-sm">
          <span className="text-gray-400 ">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
          </span>
          <span className="text-blue-400 hover:underline cursor-pointer">
            Learn more.
          </span>
        </h2>
      </form>
    </div>
  );
};

export default Login;
