import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl underline bg-red-500'>Hello world</h1>
      <div>
         <Button >Click Me</Button>
      </div>
    </>
  )
}

export default App
