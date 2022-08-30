import { useState } from 'preact/hooks'
import './app.css'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <><button onClick={()=>setCount(count=>count+1)}>{count}</button><img src={"/logo.svg"} height="24" width="86" /></>
  )
}
