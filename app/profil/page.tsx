import Link from '@/node_modules/next/link'
import React from 'react'

export default function profil() {
  return (
    
    <div className='card bg-base-300 w-auto shadow-xl p-5'>
        <div className='w-auto h-auto font-sans'>
            <h2 className='text-center mb-5 text-xl font-semibold'>PROFILE</h2>
            <div >
                <div className="flex w-full flex-col lg:flex-row">

                    <div className="bg-base-100 w-auto h-auto card">
                        <div className=' card flex items-center'>
                            <div className="avatar py-5 px-10 object-center">
                                <div className="mask mask-squircle w-24">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>

                        <div className='text-center '>
                            <Link className='link link-info text-blue-500' href={'/profil'}>Ganti Profile</Link>
                        </div>
                        
                        <div className='text-center m-4'>
                            <Link className='btn btn-info bg-blue-500' href={'/profil'}>Ubah Data</Link>
                        </div>

                    </div>
                    
                    <div className="divider lg:divider-horizontal"></div>

                    <div className="card bg-base-100 w-full shadow-xl">
                        <div className='py-4 px-12'>

                        <div>  
                            <label className='mb-4 '>Username:</label>
                            <div className='bg-blue-500 p-4 mt-2 text-wrap text-justify font-semibold text-black'>
                                Uzumaki Asep Hyuga
                            </div>
                        </div> 
                        <div >
                            <label>Email:</label>
                            <div className='bg-blue-500 p-4 mt-2 text-wrap text-justify font-semibold text-black'>
                                uzumakiasephyuga@gmail.com
                            </div>
                        </div>
                        <div >
                            <label>No. Telp:</label>
                            <div className='bg-blue-500 p-4 mt-2 text-wrap text-justify font-semibold text-black'>
                                0821-5566-8888
                            </div>
                        </div>
                        <div >
                            <label>Location:</label>
                            <div className='bg-blue-500 p-4 mt-2 text-wrap text-justify font-semibold text-black'>
                                Indonesia
                            </div>
                        </div>
                        <div >
                            <label>Address:</label>
                            <div className='bg-blue-500 p-4 mt-2 text-wrap text-justify font-semibold text-black'>
                            Jl. ZA. Pagar Alam No.9 -11, Labuhan Ratu, Kec. Kedaton, Kota Bandar Lampung, Lampung 35132 J795+24 Labuhan Ratu, Bandar Lampung City, Lampung
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    </div>
  )
}
