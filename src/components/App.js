
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [num,setNum] = useState(0)
  const [sum,setSum] = useState(0)
 useEffect(() => {
  setSum(sum + num)
 },[num])
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input 
        type="number" 
        value={num} 
        onChange={(e) => setNum(Number(e.target.value))} />
        <p>{sum}</p>
    </div>
  )
}

export default App
