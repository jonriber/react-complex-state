/* eslint-disable react/prop-types */
import { useState } from "react"

const AddDiscount = ({createCoupon}) =>{
    const [coupon, setCoupon] = useState("")

    return(
        <>
            <h3>Register for a free coupon:</h3>
            <form onSubmit={(e) => createCoupon(e,coupon)}>
                <fieldset>
                    <label>Your name:</label>
                    <input placeholder="Name" type="text" value={coupon} onChange={(e) =>setCoupon(e.target.value)}/>
                </fieldset>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default AddDiscount