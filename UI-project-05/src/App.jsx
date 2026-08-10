import React, { useState } from 'react'
import Section1 from './Components/Section1/Section1'
import DigitalBankingForm from './Components/Pages/DigitalBankingForm'

const App = () => {

  const [showForm, setShowForm] = useState(false)

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Satisfied' ,
      color:'royalblue'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Underserved',
      color:'lightseagreen' 
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Underbanked',
      color:'orange'
    },
    {
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      intro: '',
      tag: 'Satisfied',
      color:'black'
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      tag: 'Satisfied',
      color:'purple'
    },
    {
      img: 'https://images.unsplash.com/photo-1762341104634-998bbee0ccba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjcxfHxwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: '',
      tag: 'Underserved',
      color:'violet'
    }

  ]

  if (showForm) {
    return <DigitalBankingForm onBack={() => setShowForm(false)} />
  }

  return (
    <div>
      <Section1 users={users} onOpenForm={() => setShowForm(true)} />
    </div>
  )
}

export default App
