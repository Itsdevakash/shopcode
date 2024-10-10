import { useState} from "react"
import { Link ,useNavigate} from "react-router-dom"
import firebaseAppConfig from '../util/firebase-config'
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(firebaseAppConfig);
const Signup=()=>{
  const navigate = useNavigate();
  
  const [passwordType,SetPassword] = useState('password')
  const [error,SetError] = useState(null)
  const [loader,SetLoader] = useState(false);
  const [formValue,SetFormValue] = useState({
    fullname:'',
    email:'',
    password:''
})

const signupform= async(e)=>{
 
  try{
    e.preventDefault()
    SetLoader(true)
  await createUserWithEmailAndPassword(auth,formValue.email,formValue.password)
  navigate('/')
  }
  catch(err){
    SetError(err.message)
  }
  finally{
    SetLoader(false)

  }
  }

  const handleOnChnge=(e)=>{
    SetError(null)
 const input = e.target
 const name = input.name
 const value = input.value

SetFormValue({
  ...formValue,
  [name] : value 
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
    <h1 className="text-4xl font-bold">New User</h1>
    <p className="text-lg text-gray-600">Create your account to start shopping</p>
    <form className="mt-7 space-y-6"  onSubmit={signupform}>

  <div className="flex flex-col">
    <label className="font-semibold text-lg mb-1">FullName</label>
    <input 
    onChange={handleOnChnge}
    type="text"
      name="fullname"
     placeholder="Enter The Full Name"
     className="p-3 border border-gray-300 rounded"
     required
/>
  </div>


  <div className="flex flex-col">
    <label className="font-semibold text-lg mb-1">Email</label>
    <input 
    type="email"
    onChange={handleOnChnge}
     name="email"
     placeholder="Enter The Email"
     className="p-3 border border-gray-300 rounded"
     required
/>
  </div>


  <div className="flex flex-col relative">
    <label className="font-semibold text-lg mb-1">Password</label>
    <input 
    type={passwordType}
    onChange={handleOnChnge}
    name="password"
     placeholder="Enter The Password"
     className="p-3 border border-gray-300 rounded"
     required
/>
<button type="button"  onClick={()=>SetPassword(passwordType === 'password'?'text':'password' )} className="absolute top-10 right-2 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-600">
    {passwordType === "password"? <i className="ri-eye-line"></i> :  <i className="ri-eye-off-line"></i> } 
</button>
  </div>
 {
  loader ?
  <h1 className="text-lg text-gray-600 font-semibold">Loading...</h1>
  :
<button type="submit" className="py-3 px-4 bg-blue-600 text-white font-semibold rounded"> Signup</button>
 }

 

    </form>
    <div>
   Already have an account? <Link to="/login" className="text-blue">Log In</Link><br></br>
   
   { error && 
    <div className=" flex justify-between items-center mt[-15px] bg-rose-500 p-2 mb-5 text-white font-semibold rounded animate__animated animate__pulse"> 
     <p  className=""> {error} </p>
      <button onClick={()=>SetError(null)}><i className="ri-close-circle-line"></i></button>
    </div>
    }
    <center><Link to="/" className="py-3 px-4 bg-gray-600 text-white font-semibold rounde"> <i className="ri-arrow-left-line"></i> Back</Link></center>
    </div>
   </div>


    </div>

  



  </div>
    )
}
export default Signup