import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
     
     <Card user='Rahul Negi' age={21} img='https://images.unsplash.com/photo-1782077919177-31a8fbcbf438?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user='Saket Jha' age={21} img='https://images.unsplash.com/photo-1747229521023-5f89d2749fa3?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user='Hemant Negi' age={19}img='https://plus.unsplash.com/premium_photo-1709399200520-89f2f5d46dbd?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user='Lucky Goswami' age={20} img='https://images.unsplash.com/photo-1698758004450-1f9da080f9b4?q=80&w=598&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user="Sachin Kargeti" age={21} img='https://images.unsplash.com/photo-1742717817785-54249562494c?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user='Hayat Negi' age={41} img='https://images.unsplash.com/photo-1771924310799-930349452c76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5OXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/>
    </div>
  )
}

export default App
