import GoogleButton from "react-google-button";
import {signInWithPopup} from "firebase/auth";
import { auth,provider } from "../utils/firebase";
import { useDispatch } from "react-redux";
import {checkAuthenticate} from "../store/authenticateSlice";
import { useNavigate } from "react-router-dom";


const GoogleLogin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignInGoogle = async () => {
    // const googlePopResult = await signInWithPopup(auth, provider)
    
    await signInWithPopup(auth, provider).then((result) => {
    console.log(result);
    if (result.user.accessToken){
      dispatch(checkAuthenticate({"userDetail":result.user,"status":"LOGIN"}))
      navigate("/")
    }

  }).catch((error) => {
    // Handle Errors here.
    console.log("Error while logging in",error)
  });
  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-700 to-black">
      <GoogleButton
        type="dark"
        onClick={handleSignInGoogle}
      />
    </div>
  );
};

export default GoogleLogin;
