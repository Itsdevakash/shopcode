import { useState} from "react"
import { Link } from "react-router-dom"
const Signup=()=>{

  const [passwordType,SetPassword] = useState('password')
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
    <form className="mt-7 space-y-6">

  <div className="flex flex-col">
    <label className="font-semibold text-lg mb-1">FullName</label>
    <input 
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
    name="password"
     placeholder="Enter The Password"
     className="p-3 border border-gray-300 rounded"
     required
/>
<button type="button"  onClick={()=>SetPassword(passwordType === "password"?'text':'password' )} className="absolute top-10 right-2 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-600">
    {passwordType === "password"? <i className="ri-eye-line"></i> :  <i class="ri-eye-off-line"></i> } 
</button>
  </div>
 

 <button type="submit" className="py-3 px-4 bg-blue-600 text-white font-semibold rounded"> Signup</button>

    </form>
    <div>
    <center>Already have an account? <Link to="/login" className="text-blue">Log In</Link></center><br></br>
    <center><Link to="/" className="py-3 px-4 bg-gray-600 text-white font-semibold rounde"> <i className="ri-arrow-left-line"></i> Back</Link></center>
    </div>
   </div>
  
    </div>
   



  </div>
    )
}
export default Signup