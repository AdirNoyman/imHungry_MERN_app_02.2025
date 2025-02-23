import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Button onClick={() => setCount((count) => count + 1)}>Increment</Button>
      <h1>The count is {count}</h1>
      </div>
     
    </>
  )
}

export default App
