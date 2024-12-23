import React from 'react'

export default function profil() {
  return (
    
    <div className='card bg-base-100 w-auto shadow-xl'>
        <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ textAlign: 'center' }}>PROFILE</h2>
            <form >
        
        
                <div className="avatar">
                    <div className="mask mask-squircle w-24">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                    <label>Username:</label>
                    <div className='bg-slate-900 p-4 text-wrap text-justify font-semibold'>
                        Uzumaki Asep Hyuga
                    </div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Email:</label>
                    <div className='bg-slate-900 p-4 text-wrap text-justify font-semibold'>
                        uzumakiasephyuga@gmail.com
                    </div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>No. Telp:</label>
                    <div className='bg-slate-900 p-4 text-wrap text-justify font-semibold'>
                        0821-5566-8888
                    </div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Location:</label>
                    <div className='bg-slate-900 p-4 text-wrap text-justify font-semibold'>
                        Indonesia
                    </div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Address:</label>
                    <div className='bg-slate-900 p-4 text-wrap text-justify font-semibold'>
                    Jl. ZA. Pagar Alam No.9 -11, Labuhan Ratu, Kec. Kedaton, Kota Bandar Lampung, Lampung 35132 J795+24 Labuhan Ratu, Bandar Lampung City, Lampung
                    </div>
                </div>

            </form>
        </div>
    </div>
  )
}
