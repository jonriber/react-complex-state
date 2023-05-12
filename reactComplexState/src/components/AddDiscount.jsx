/* eslint-disable react/prop-types */
import { useState } from "react"

const AddDiscount = ({setDiscount}) =>{
    const [coupon, setCoupon] = useState("")

    return(
        <>
            <form onSubmit={() => setDiscount(coupon)}>
                <fieldset>
                    <label>Insert your coupon:</label>
                    <input type="text" value={coupon} onChange={(e) =>setCoupon(e.target.value)}/>
                </fieldset>
                <button type="submit">Use</button>
            </form>
        </>
    )
}

export default AddDiscount