import { useState } from 'react'
import Layout from './Layout'

const Category = ()=>{
    const [category, setCategory] = useState([
        {
            title: 'Electronics'
        },
        {
            title: 'Fashion'
        },
        {
            title: 'Smartphones'
        },
        {
            title: 'Furnitures'
        },
        {
            title: 'Men`s'
        },
        {
            title: 'Women`s'
        },
        {
            title: 'Electronics'
        },
        {
            title: 'Electronics'
        }
    ])
    return (
        <Layout>
            <div className='md:p-16 p-8'>
            <h1 className="text-3xl font-bold text-center">Our Category</h1>
            <p className="text-center mx-auto text-gray-600 md:w-7/12 mt-2 mb-16">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusantium iusto, consequatur, officiis sapiente iure nisi aspernatur est corporis dolor ratione adipisci</p>
                <div className='md:w-10/12 mx-auto grid md:grid-cols-4 md:gap-16 gap-8'>
                    {
                        category.map((item, index)=>(
                            <div key={index} className='hover:bg-blue-600 hover:text-white border rounded-lg bg-white shadow-lg flex flex-col p-8 justify-center items-center'>
                                <i className="ri-menu-search-line text-6xl"></i>
                                <h1 className='text-2xl font-bold'>{item.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Category