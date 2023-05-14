/* eslint-disable react/prop-types */
import { useState } from "react"

const AddDiscount = ({createCoupon}) =>{
    const [coupon, setCoupon] = useState("")

    return(
        <>
            <h3>Register for a free coupon:</h3>
            <form onSubmit={(e) => createCoupon(e,coupon)}>
                <fieldset style={{borderRadius:"6px"}}>
                    <label>Your name:</label>
                    <input placeholder="Name" type="text" value={coupon} style={{marginLeft:"5px"}} onChange={(e) =>setCoupon(e.target.value)}/>
                    <button type="submit" style={{marginLeft:"5px"}}>Register</button>

                </fieldset>
            </form>
        </>
    )
}

export default AddDiscount