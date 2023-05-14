/* eslint-disable react/prop-types */
import Customer from "./Customer"

function ListCustomers(props){

    const customers = props.customerList.map((customer,key) => <Customer data={customer} key={key}/>)

       
    return(
        <>
            <ul>
                {customers}
            </ul>
        </>
    )
}

export default ListCustomers