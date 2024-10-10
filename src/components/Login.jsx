
import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import firebaseAppConfig from '../util/firebase-config'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(firebaseAppConfig);


const Login=()=>{
  const navigate = useNavigate();
  const [error,SetError] = useState(null)
  const [loader,SetLoader] = useState(false);
  const [passwordType,SetPassword] = useState('password')
  const [formValue,setFormvalue] =useState({
    email:"",
    password:""
  })

  const logins = async( e)=>{
    try{
    e.preventDefault()
    SetLoader(true)
   const user = await signInWithEmailAndPassword(auth,formValue.email,formValue.password)
   navigate('/')
    }
    catch(err){
      SetError("Invalid credentials provided")
    }
    finally{
      SetLoader(false)
  
    }
  }

  const handlychange=(e)=>{
    SetError(null)
  const input =e.target
  const name = input.name
  const email = input.email
  setFormvalue({
   ...formValue,[name]:value
  })


  }
    return(
  
  <div>


    <div className="grid md:grid-cols-2 h-screen md:overflow-hidden   animate__animated animate__fadeIn">
<img
 src="./images/registration.png"
 className="w-full md:h-full hidden md:block"
  />
   <div className="flex flex-col py-8 px-8">
    <h1 className="text-4xl font-bold">Signin</h1>
    <p className="text-lg text-gray-600">Enter profile details to login</p>
    <form className="mt-7 space-y-6" onSubmit={logins}>


  <div className="flex flex-col">
    <label className="font-semibold text-lg mb-1">Email</label>
    <input 
    type="email"
     name="email"
     placeholder="Enter The Email"
     className="p-3 border border-gray-300 rounded"
     required
     onChange={handlychange}
/>
  </div>


  <div className="flex flex-col relative">
    <label className="font-semibold text-lg mb-1">Password</label>
    <input 
    type={passwordType}
    name="password"
     placeholder="Enter The Password"
     className="p-3 border border-gray-300 rounded"
     required
     onChange={handlychange}
/>
<button type="button"  onClick={()=>SetPassword(passwordType === "password"?'text':'password' )} className="absolute top-10 right-2 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-600">
    {passwordType === "password"? <i className="ri-eye-line"></i> :  <i class="ri-eye-off-line"></i> } 
</button>
  </div>
 

 

 {
  loader ?
  <h1 className="text-lg text-gray-600 font-semibold">Loading...</h1>
  :
<button type="submit" className="py-3 px-4 bg-blue-600 text-white font-semibold rounded">Login</button>
 }



    </form>
    <div>

    { error && 
    <div className=" flex justify-between items-center mt[-15px] bg-rose-500 p-2 mb-5 text-white font-semibold rounded animate__animated animate__pulse"> 
     <p  className=""> {error} </p>
      <button onClick={()=>SetError(null)}><i className="ri-close-circle-line"></i></button>
    </div>
    }
    <center> Don't have an account? <Link to="/signup" className="text-blue">Register Now</Link></center><br></br>
    <center><Link to="/" className="py-3 px-4 bg-gray-600 text-white font-semibold rounde"> <i className="ri-arrow-left-line"></i> Back</Link></center>
    </div>
   </div>
    </div>

  </div>
    )
}
export default Login