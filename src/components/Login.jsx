import React from "react";
import LoginImage from "../assets/LoginImage.jpg";
import LoginImage1 from "../assets/LoginImage1.jpg";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { checkAuthenticate } from "../store/authenticateSlice";
import ValidateEmailPass from "../utils/ValidateEmailPass";
import { useRef } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  // const [errorMessage, setErrorMessage] = useState(null);

  const handleSignInGoogle = async () => {
    // const googlePopResult = await signInWithPopup(auth, provider)

    await signInWithPopup(auth, provider)
      .then((result) => {
        if (result.user.accessToken) {
          dispatch(
            checkAuthenticate({ userDetail: result.user, status: "LOGIN" })
          );
          navigate("/");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        console.log("Error while logging in", error);
      });
  };
  const handleLogIn = () => {
    let message = ValidateEmailPass(
      email.current.value,
      password.current.value
    );
    // setErrorMessage(message);
    if (message) return; // Validation is made in FE.Api call is not made if its not validated

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (user.accessToken) {
          dispatch(checkAuthenticate({ userDetail: user, status: "LOGIN" }));
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
      });
  };
  return (
    <div className="bg-gradient-to-r from-teal-400 to-gray-800 h-screen flex justify-center items-center">
      <div className="bg-white w-[47%] h-[37rem] flex  rounded-3xl">
        <div className="w-[50%]  flex justify-center items-center">
          <img
            src={LoginImage1}
            alt="Image Of Food"
            className="rounded-3xl h-[90%]"
          />
        </div>
        <div className="p-10 w-[50%]">
          <form
            className="flex flex-col  mt-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="text-center text-4xl">Welcome Back</h1>
            <input
              type="text"
              ref={email}
              placeholder="Username"
              className="p-2 mt-12 mb-2 bg-slate-100 rounded-xl"
            />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="p-2 mt-2 mb-12 bg-slate-100 rounded-xl"
            />
            <button
              className="w-full bg-[#2CC6B4] rounded-3xl  py-[11px]"
              onClick={handleLogIn}
            >
              Log in
            </button>
          </form>
          {/* <p className="mt-10 mb-10 ">
            -----------------------------Or Log In
            with-----------------------
          </p> */}

          <hr
            className="mt-10 mb-10  hr-text gradient"
            data-content="Or Log In with"
          ></hr>
          <div className="flex justify-center items-center">
            <GoogleButton
              type="dark"
              className="text-center"
              onClick={handleSignInGoogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
