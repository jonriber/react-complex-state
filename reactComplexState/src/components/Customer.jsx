/* eslint-disable react/prop-types */
const Customer = (props) =>{
    console.log("data:",props.data)
    return(
        <>
            <li id={props.data.id} key={props.data.id}>
                <h4>Customer: {props.data.customer}</h4>

            </li>
        </>
    )
}

export default Customer