import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const Layout = ({children})=>{
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

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

    return (
        <div>
            <nav className="sticky top-0 left-0 shadow-lg bg-white">
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
                        <Link 
                            className="block py-4 text-center hover:text-white hover:bg-blue-600 w-[100px]"
                            to="/login"
                        >Login</Link>

                        <Link 
                            className="bg-blue-600 py-3 px-10 text-md font-semibold text-white block text-center hover:bg-rose-600 hover:text-white"
                            to="/signup"
                        >Register</Link>
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
                      
                            <Link 
                            className="bg-blue-600 ml-12 w-40 text-center py-3 px-10 text-md font-semibold text-white block text-center hover:bg-rose-600 hover:text-white"
                            to="/login"
                        >Login</Link>



                        <Link 
                            className="bg-blue-600 ml-12 w-40 py-3 px-10 text-md font-semibold text-white block text-center hover:bg-rose-600 hover:text-white"
                            to="/signup"
                        >Register</Link>
                </div>
            </aside>
        </div>
    )
}

export default Layout