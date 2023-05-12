import { useState } from 'react'
import './App.css'
import AddDiscount from './components/AddDiscount'

const initialState={
  customer:"",
  code: "promo",
  used: false,
  left: 4 
}

function App() {
  const [discount, setDiscount] = useState(initialState)

  function applyCoupon(){
    
  }

  console.log("discount:",discount)
  return (
    <>
      <h1>React Complex State</h1>
      <div className="card">
       <AddDiscount setDiscount={setDiscount}/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
