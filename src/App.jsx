import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Engine from "./components/Engine"

function App(){
  return(
    <>
      <h1 className='bg-gradient-to-r from-blue-950 to-blue-100 bg-clip-text text-5xl font-extrabold text-transparent '>MarkDown Previewer</h1>
      <Engine />
    </>
  )
}

export default App
