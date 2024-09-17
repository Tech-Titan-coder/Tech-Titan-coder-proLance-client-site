import { useState } from 'react'

import './App.css'
import { Button } from 'flowbite-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
     <Button color="success" className='text-red-600'>Light</Button>
     </div>
    </>
  )
}

export default App
