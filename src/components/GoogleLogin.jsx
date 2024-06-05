import GoogleButton from "react-google-button";
import {signInWithPopup} from "firebase/auth";
import { auth,provider } from "../utils/firebase";

const GoogleLogin = () => {
  const handleSignInGoogle = async () => {
    const googlePopResult = await signInWithPopup(auth, provider)
    
    googlePopResult.then((result) => {
    console.log(result);
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    // const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
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
