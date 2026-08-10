import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = ({ users, onOpenForm }) => {
    
  return (
    <div className='h-screen w-auto bg-white '>
        <Navbar onOpenForm={onOpenForm} />
        <Page1Content users={users} />
    </div>
  )
}

export default Section1