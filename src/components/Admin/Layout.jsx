import { useState } from "react"
import { Link,useLocation }  from 'react-router-dom'

const Layout = ({children})=>{
    const [size, setSize] = useState(280)
    const [accountMenu, setAccountMenu] = useState(false)
    const location = useLocation();

    const menu = [
        {
            url :"/admin/dashboard",
            icon :<i className="ri-dashboard-line"></i> ,
            label :"Dashboard"
        },

        {
            url :"/admin/products",
            icon : <i className="ri-shopping-cart-line"></i> ,
            label :"Product"
        },
        {
            url :"/admin/orders",
            icon :<i className="ri-shape-line"></i> ,
             label :"Orders"
        },

        {
            url :"/admin/payment",
            icon :<i className="ri-bank-card-line"></i> ,
             label :"Payment"
        },
        {
            url :"/admin/setting",
            icon :<i className="ri-equalizer-line"></i> ,
             label :"Setting"
        },
        {
            url :"/admin/logout",
            icon :<i class="ri-logout-circle-r-line"></i> ,
             label :"Logout"
        }
    ]

    return (
        <div>
            <aside 
                className="bg-cyan-600 fixed top-0 left-0 h-full  overflow-hidden"
                style={{
                    width: size,
                    transition: '0.3s'
                }}
            >       
         
         <div  className="flex flex-col">
            <h3 className="text-center text-2xl 8 text-[#fff]">Main Menu</h3><hr></hr>

       {   
       menu.map((item,index)=>(       
       
         <Link to={item.url} 
         className="px-4 py-3 text-gray-50 text-[17px] hover:bg-rose-600  hover:text-white" 
         key={index}         
        style={{ 
           background:(location.pathname === item.url) ? 'red': '',
         }}
        >
         {item.icon}  {item.label}        
         </Link>
       
        ))
       
       }
         </div>

            </aside>
            <section 
                className="bg-gray-100 h-screen"
                style={{
                    marginLeft: size,
                    transition: '0.3s'
                }}
            >
                <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
                    <div className="flex gap-4 items-center">
                        <button 
                            className="bg-gray-50 hover:bg-cyan-600 hover:text-white w-8 h-8"
                            onClick={()=>setSize(size === 280 ? 0 : 280)}
                        >
                            <i className="ri-menu-2-line text-xl"></i>
                        </button>
                        <h1 className="text-md font-semibold">Shopcode</h1>
                    </div>

                    <div>
                        <button className="relative">
                            <img 
                                src="/images/avt.avif" 
                                className="w-10 h-10 rounded-full" 
                                onClick={()=>setAccountMenu(!accountMenu)} 
                            />
                            {
                                accountMenu && 
                                <div className="absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg">
                                    <div>
                                        <h1 className="text-lg font-semibold">Er Akash Maurya</h1>
                                        <p className="text-gray-500">akash@gmail.com</p>
                                        <div className="h-px bg-gray-200 my-4" />
                                        <button>
                                            <i className="ri-logout-circle-r-line mr-2"></i>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            }          
                        </button>
                    </div>
                </nav>
                <div className="p-6">
                    {children}
                </div>
            </section>
        </div>
    )
}

export default Layout