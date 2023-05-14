/* eslint-disable react/prop-types */
const Customer = (props) =>{
    console.log("data:",props.data)
    if(!props.data.customer) return null
    return(
        <>
            <li id={props.data.id} key={props.key} style={{border:"thick solid",padding:"2px",marginBottom:"22px"}}>
                <h4>Customer: {props.data.customer} </h4>
                <p>Cupons Left: {props.data.left}</p>

            </li>
        </>
    )
}

export default Customer