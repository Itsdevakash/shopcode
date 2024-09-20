import { useState } from "react"
import Layout from "./Layout"

const Customers = ()=>{
    const [customers, setCustomers] = useState([
        {
            img: '/images/avt.avif',
            customerName: 'er akash',
            email: 'erakash@gmail.com',
            mobile: '+91 9472395194',        
            address: 'Varanjasi',        
            date: '12-10-2024 10:15:14 Am'           
        },
        {
            img: '/images/avt.avif',
            customerName: 'er akash',
            email: 'erakash@gmail.com',
            mobile: '+91 9472395194',        
            address: 'Varanjasi',        
            date: '12-10-2024 10:15:14 Am'           
        } ,
        {
            img: '/images/avt.avif',
            customerName: 'er akash',
            email: 'erakash@gmail.com',
            mobile: '+91 9472395194',        
            address: 'Varanjasi',        
            date: '12-10-2024 10:15:14 Am'           
        } ,
        {
            img: '/images/avt.avif',
            customerName: 'er akash',
            email: 'erakash@gmail.com',
            mobile: '+91 9472395194',        
            address: 'Varanjasi',        
            date: '12-10-2024 10:15:14 Am'           
        } ,   
    ])

    return (
        <Layout>
            <div>
                <h1 className="text-xl font-semibold">Customers</h1>
                <div className="mt-6">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-rose-600 text-white text-left">
                                <th className="p-4">Customer`s Name</th>
                                <th>Email</th>
                                <th>Mobile</th>    
                                <th>Address</th>                              
                                                         
                            </tr>
                        </thead>

                        <tbody>
                            {
                                customers.map((item, index)=>(
                                    <tr key={index} style={{
                                        background: (index+1)%2 === 0 ? '#f1f5f9' : 'white'
                                    }}>
                                       
                                        <td className="capitalize px-4 py-2">
                                            <div className="flex gap-3 items.center">
                                                <img   src={item.img} 
                                                 className="w-10 h-10 rounded-full" />
                                           <div className="flex flex-col justifly-center ">
                                            <span className="font-semibold"> {item.customerName}</span> 
                                            <small className="text-gray">{item.date}</small>
                                            </div>

                                            </div>
                                            </td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>                                     
                                        <td>{item.address}</td>                                  
                                      
                                      
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Customers