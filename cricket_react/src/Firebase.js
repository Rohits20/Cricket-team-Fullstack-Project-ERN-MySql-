import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyC9wbn-0TdFfkYzUA8FkiBuUDtavUjBJ9s",
  authDomain: "cricketer-web-app-g-auth.firebaseapp.com",
  projectId: "cricketer-web-app-g-auth",
  storageBucket: "cricketer-web-app-g-auth.appspot.com",
  messagingSenderId: "321261460022",
  appId: "1:321261460022:web:4c2f7177f3e2b6651f9697"
};

const app = initializeApp(firebaseConfig);
 const auth =getAuth(app);

const provider=new GoogleAuthProvider()

export const signInWithGoogle=()=>{
  signInWithPopup(auth,provider)
  .then((result)=>{
     const name =result.user.displayName;
     const email =result.user.email;
     const profilePic =result.user.photoURL;
    
          localStorage.setItem("name",name);
          localStorage.setItem("email",email);
          localStorage.setItem("profilePic",profilePic);


  })
  .catch((error)=> {
      console.log(error);
  })
}





