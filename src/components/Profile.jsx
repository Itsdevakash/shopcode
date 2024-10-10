import Layout from './Layout'

const Profile = ()=>{
    return (
        <Layout>
            <div className='mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12 border'>
                <div className='flex gap-3'>
                    <i className="ri-user-line text-4xl"></i>
                    <h1 className="text-3xl font-semibold">Profile</h1>
                </div>

                <hr className='my-6' />

                <div className='w-24 h-24 mx-auto relative mb-6'>
                    <img src="/images/avt.avif" className='rounded-full w-24 h-24'/>
                    <input type="file" accept="image/*" className='opacity-0 absolute top-0 left-0 w-full h-full'/>
                </div>

                <form className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>Fullname</label>
                        <input 
                            required
                            name="fullname"
                            className='p-2 rounded border border-gray-300'
                            value="Er AKASH"
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>Email</label>
                        <input 
                            required
                            name="email"
                            type="email"
                            className='p-2 rounded border border-gray-300'
                            value="example@mail.com"
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>Mobile</label>
                        <input 
                            required
                            name="mobile"
                            type="number"
                            className='p-2 rounded border border-gray-300'
                            value="7084454081"
                        />
                    </div>

                    <div />

                    <div className='flex flex-col gap-2 col-span-2'>
                        <label className='text-lg font-semibold'>Area/Street/Vill</label>
                        <input 
                            required
                            name="address"
                            type="text"
                            className='p-2 rounded border border-gray-300'
                            value="varanasi"
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>City</label>
                        <input 
                            required
                            name="city"
                            type="text"
                            className='p-2 rounded border border-gray-300'
                            value="varanasi"
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>State</label>
                        <input 
                            required
                            name="state"
                            type="text"
                            className='p-2 rounded border border-gray-300'
                            value="varanasi"
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>Country</label>
                        <input 
                            required
                            name="country"
                            type="text"
                            className='p-2 rounded border border-gray-300'
                            value="India"
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold'>Pincode</label>
                        <input 
                            required
                            name="pincode"
                            type="number"
                            className='p-2 rounded border border-gray-300'
                            value="5252252"
                        />
                    </div>
                    <button className='px-4 py-2 bg-rose-600 text-white rounded w-fit hover:bg-green-600'>
                        <i className="ri-save-line mr-2"></i>
                        Save
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default Profile