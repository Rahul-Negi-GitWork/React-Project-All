import React from 'react'

const RightCardContent = (props) => {
  return (
    <div><div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-medium rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='leading-normal text-base text-white font-medium mb-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptates eius ipsam magnam temporibus iusto.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-7 py-1 rounded-full shadow-md transition-all duration-300 ease-out
               hover:-translate-y-1 hover:shadow-xl 
               active:translate-y-0 active:shadow-md'>{props.tag}</button>
                    <button className='text-white font-semibold px-3 py-1 rounded-full shadow-md transition-all duration-300 ease-out
               hover:-translate-y-1 hover:shadow-xl 
               active:translate-y-0 active:shadow-md'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div></div>
  )
}

export default RightCardContent