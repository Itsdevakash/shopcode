import { Link } from "react-router-dom"
const Layout=({childen})=>{
    const menus =[
    {
        lable:"Home",
        url:'/',
        icone: <i className="ri-home-line"></i>
    },
    {
        lable:"Products",
        url:'/products',
        icone:<i className="ri-product-hunt-fill"></i>,
    },
    {
        lable:"Category",
        url:'/category',
        icone:<i className="ri-menu-search-line"></i>,
    },
    {
        lable:"Contact-us",
        url:'/contact-us',
        icone:<i className="ri-contacts-book-line"></i>,
    }  
    ]
    return(

  <div>
<nav className="shadow-lg bg-[#f6f6f6] sticky top-0 left-0">
    <div className="w-10/12 mx-auto flex items-center justify-between">
    <img src="./logo.png"
     className="w-[90px] py-2"   
    />
    <ul className="flex gap-3 items-center">
        {
    menus.map((item,index)=>(
 
    <li key={index}>
        <Link 
        className="block py-4 text-center hover:text-white hover:bg-blue-600 w-[100px]"
        to={item.url}>
        {item.lable}
        </Link>
    </li>

    ))
        }

      <li> <Link to="/login"  className=" py-4 text-center hover:text-white hover:bg-blue-600 w-[100px]"> Login</Link></li>  
      <li>  <Link to="/register"  className="bg-blue-600 py-3 px-10 text-md font-semiblod rounded  text-white block text-center hover:text-white hover:bg-rose-600 "> Register</Link></li>  

    </ul>
    </div>

</nav>
  
 <div>
    {childen}
 </div>

  <footer className="bg-black text-white py-16 ">
  <div className="w-10/12 mx-auto items-center justify-between grid grid-cols-4 gap-2">
  <div> 
    <h1 className=" font-semibold text-2xl mb-4">Brand Details</h1>
  <p className="text-gray-100 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint natus dolorem soluta voluptatum temporibus quis maiores provident id explicabo, vitae eos, facilis nulla a unde odit ex illum perferendis facere!</p>
    <img src="./logo.png"
     className="w-[90px] py-2"   
    />
   
    </div>
    <div className="mt-[-18%] ml-10"> 
    <h1 className=" font-semibold text-2xl">Website Link</h1>
    <ul className="space-y-2 ">
        {
        menus.map((item,index)=>(
       <li key={index}  >
        <Link to={item.url}> {item.icone} {item.lable}</Link>
       </li>  
            
        ))
        }
             <li> <Link to="/login"> <i className="ri-login-box-line"></i> Login</Link></li>  
             <li>  <Link to="/register"><i className="ri-registered-line"></i>  Register</Link></li>  
    </ul>
 
   
    </div>


    <div className="mt-[-30%] ml-10"> 
    <h1 className=" font-semibold text-2xl  ">Follow Us</h1>
    <ul className="space-y-2 ">
       
             <li> <Link to="/"> <i className="ri-facebook-circle-line"></i> Facebook</Link></li>  
             <li> <Link to="/"> <i className="ri-youtube-line"></i> Youtube</Link></li>  
             <li> <Link to="/"><i className="ri-twitter-x-line"></i>  Twitter</Link></li>  
             <li> <Link to="/"> <i className="ri-linkedin-box-line"></i> Linkedin</Link></li>  
             <li> <Link to="/"> <i className="ri-instagram-line"></i> Instagram</Link></li>  
    </ul>
 
   
    </div>



    <div className="gap-5"> 
   <h1 className="font-semibold text-2xl mb-3">Contact US </h1>
   <form className="space-y-2">

    <input 
     name="fullname"
     className="bg-ehite w-full rounded p-3"
     placeholder="Your Name"
     required
     />

<input 
     name="email"
     className="bg-ehite w-full rounded p-3"
     placeholder="Your Email Id"
     required
     />

     <textarea 
     required
      name="message"  
      className="bg-ehite w-full rounded p-3"
        placeholder="Your Message .... "
      rows={3}
      />
      <button type="Submit"  className="bg-blue-500 text-white py-3 px-6 rounded">Submit</button>
   </form>
    </div>


  </div>


  </footer>
  
  </div>

    )
}
export default Layout