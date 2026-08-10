import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Navbar = ({onOpenForm}) => {
  return (
    <div className='flex items-center justify-between py-8 px-14'>
        <h4 className='bg-black text-white uppercase px-7 py-1
         rounded-full text-sm'>Target Audience</h4>
        <button onClick={onOpenForm} className=' bg-gray-400 px-6 py-2 uppercase  
        rounded-full tracking-widest text-xs text-black '> <i className="ri-phone-fill"></i> Digital Banking Platform</button>
    </div>
  )
}

export default Navbar