import { useState } from 'react'
import './App.css'
import AddDiscount from './components/AddDiscount'
import ListCustomers from './components/ListCustomers';

const initialState=[{
  id:0,
  customer:"",
  code: "promo",
  used: false,
  left: 4 
},]

function App() {
  const 
    [discountData, setDiscountData] = useState(initialState),
    [idCounter,setIdCounter] = useState(1);

  function createCoupon(e,name){
    let newValue = idCounter +1
    setIdCounter(newValue)
    e.preventDefault()
    setDiscountData(prevState => {
      return  [...prevState,{ customer:name, id: newValue, left:4, used:false}]
    })
  }

  function useCoupon(e,id){
    console.log("e:",e,id)
    setDiscountData(prevState => {
      return [...prevState,]
    })
  }

  console.log("discount:",discountData,useCoupon)
  return (
    <>
      <h1>React Complex State Usage Example</h1>

      <h2>Following scenario</h2>
      <p>You want to register for a dinner coupon.</p>
      <p>Insert your name and register as an eligible customer.</p>

      <div className="card">
       <AddDiscount createCoupon={createCoupon}/>
       <ListCustomers customerList={discountData}/>
      </div>
      <p className="read-the-docs">
        Results: {idCounter} and     
      </p>
    </>
  )
}

export default App
