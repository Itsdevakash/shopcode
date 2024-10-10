import { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import firebaseAppConfig from '../util/firebase-config'
import { getAuth,onAuthStateChanged, signOut } from 'firebase/auth'
const auth = getAuth(firebaseAppConfig);


const Layout = ({children})=>{
    const [open, setOpen] = useState(false)
    const [accountMenu, setAccountMenu] = useState(false)
    const [session,setSession] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>(
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setSession(user)
            }else{
                setSession(false)
            }
          
            
        })
    ),[])
   
    const menus =[
      {
        label:"Home",
          url:'/',
          icone: <i className="ri-home-line"></i>
      },
      {
        label:"Products",
          url:'/products',
          icone:<i className="ri-product-hunt-fill"></i>,
      },
      {
        label:"Category",
          url:'/category',
          icone:<i className="ri-menu-search-line"></i>,
      },
      {
        label:"Contact-us",
          url:'/contact-us',
          icone:<i className="ri-contacts-book-line"></i>,
      }  
      ]

    const mobileLink = (href)=>{
        navigate(href)
        setOpen(false)
    }
  if(session === null)
    return(

        <div className="bg-gray-600 h-full fixed top-0 left-0 w-full flex justify-center items-center">
            <div className="text-center top-50">
    <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
</div>
        </div>
    )

    return (
        <div>
            <nav className="sticky top-0 left-0 shadow-lg bg-white z-40">
                <div className="w-10/12 mx-auto flex items-center justify-between">
                    <img 
                        src="/logo.png"
                        className="w-[100px]"
                    />
                    
                    <button className="md:hidden" onClick={()=>setOpen(!open)}>
                        <i className="ri-menu-3-fill text-3xl"></i>
                    </button>

                    <ul className="md:flex gap-6 items-center hidden">
                        {
                            menus.map((item, index)=>(
                                <li key={index}>
                                    <Link 
                                        to={item.url}
                                         className="block py-4 text-center hover:text-white hover:bg-blue-600 w-[100px]"
                                    >{item.label}</Link>
                                </li>
                            ))
                        }

                        {
                            !session && 
                         <>
                         
                         <Link 
                            className="block py-4 text-center hover:text-white hover:bg-blue-600 w-[100px]"
                            to="/login"
                        >Login</Link>

                        <Link 
                            className="bg-blue-600 py-3 px-10 text-md font-semibold text-white block text-center hover:bg-rose-600 hover:text-white"
                            to="/signup"
                        >Register</Link>
                         
                         </>


                        }

                        {
                         session &&
                        <button className="relative"  onClick={()=>setAccountMenu(!accountMenu)}>
                            <img src="/images/avt.avif"    className="w-10 h-10 rounded-full" />
                           {
                            accountMenu &&
                            <>
                             <div className=" flex flex-col items-start w-[150px]   animate__animated animate__pulse bg-white absolute top-18 right-0 shadow-lg z-50"> 
                             <Link  to="/profile" className=" w-full text-left p-2 hover:bg-gray-200">
                             <i className="ri-user-line"></i> &nbsp;  My Profile
                            </Link>

                            <Link  to="/cart" className=" w-full text-left p-1 hover:bg-gray-200">
                            <i className="ri-shopping-cart-line"></i> &nbsp;  Cart
                            </Link>

                          <button  onClick={()=>signOut(auth)}  className=" w-full text-left p-1 hover:bg-gray-200">
                          <i className="ri-logout-box-line"></i>&nbsp;    Logout
                          </button>
                           
                            </div>
                            </>
                           }
                           
                        </button>
                            
                        }
                      
                    </ul>
                </div>
            </nav>
            <div>
                {children}
            </div>
            <footer className="bg-black text-white py-16 ">
                <div className="w-10/12 mx-auto grid md:grid-cols-4 md:gap-0 gap-8">
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Website Links</h1>
                        <ul className="space-y-2 text-slate-50">
                            {
                                menus.map((item, index)=>(
                                    <li key={index}>
                                        <Link to={item.href}>{item.icone} {item.label}</Link>
                                    </li>
                                ))
                            }
                            <li><Link to="/login"> <i className="ri-login-box-line"></i> Login</Link></li>
                            <li><Link to="/signup"> <i className="ri-registered-line"></i> Register</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Follow us</h1>
                        <ul className="space-y-2 text-slate-50">
                        <li> <Link to="/"> <i className="ri-facebook-circle-line"></i> Facebook</Link></li>  
                        <li> <Link to="/"> <i className="ri-youtube-line"></i> Youtube</Link></li>  
                        <li> <Link to="/"><i className="ri-twitter-x-line"></i>  Twitter</Link></li>  
                        <li> <Link to="/"> <i className="ri-linkedin-box-line"></i> Linkedin</Link></li>  
                        <li> <Link to="/"> <i className="ri-instagram-line"></i> Instagram</Link></li>  
                        </ul>
                    </div>
                    <div className="pr-8">
                        <h1 className="text-white font-semibold text-2xl mb-3">Brand Details</h1>
                        <p className="text-slate-50 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe cupidium est velit excepturi sit corrupti tempora officia recusandae!</p>
                        <img 
                            src="/logo.png"
                            className="w-[100px]"
                        />
                    </div>
                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-3">Contact us</h1>
                        <form className="space-y-4">
                            <input 
                                required
                                name="fullname"
                                className="bg-white w-full rounded p-3"
                                placeholder="Your name"
                            />

                            <input 
                                required
                                type="email"
                                name="email"
                                className="bg-white w-full rounded p-3"
                                placeholder="Enter email id"
                            />

                            <textarea 
                                required
                                name="message"
                                className="bg-white w-full rounded p-3"
                                placeholder="Message"
                                rows={3}
                            />

                  <button type="Submit"  className="bg-blue-500 text-white py-3 px-6 rounded">Submit</button>
                        </form>
                    </div>
                </div>
            </footer>

           
            <aside 
                className="overflow-hidden md:hidden bg-slate-900 shadow-lg fixed top-0 left-0 h-full z-50"
                style={{
                    width: open ? 250 : 0,
                    transition: '0.3s'
                }}
            >
                <div className="flex flex-col gap-6">
                    {
                        menus.map((item, index)=>(
                            <button onClick={()=>mobileLink(item.url)} key={index} className="text-white">
                              {item.icone}  {item.label}
                            </button>
                        ))
                    }
                      {
                         !session && 
                         <>
                         <Link 
                         className="bg-blue-600 ml-12 w-40 text-center py-3 px-10 text-md font-semibold text-white block text-center hover:bg-rose-600 hover:text-white"
                         to="/login"
                     >Login</Link>



                     <Link 
                         className="bg-blue-600 ml-12 w-40 py-3 px-10 text-md font-semibold text-white block text-center hover:bg-rose-600 hover:text-white"
                         to="/signup"
                     >Register</Link>
                         </>

                      }

                      {
                        session &&
                        <>
                          <p className="bg-blue-600 ml-12 w-40 py-3 px-10 text-md font-semibold text-white block text-center hover:bg-rose-600 hover:text-white"> hi user </p>
                        
                        </>
                      }
                          
                </div>
            </aside>
        </div>
    )
}

export default Layout