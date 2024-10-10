
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDKYkbZWkETC-b-5lBCI3vzDEWN67uRdo8",
  authDomain: "onlineshop-19cec.firebaseapp.com",
  projectId: "onlineshop-19cec",
  storageBucket: "onlineshop-19cec.appspot.com",
  messagingSenderId: "803090332004",
  appId: "1:803090332004:web:ded4b0c2e03967d470e271",
  measurementId: "G-JEJ038M28V"
};


const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig
