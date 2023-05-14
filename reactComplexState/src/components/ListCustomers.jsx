/* eslint-disable react/prop-types */
import Customer from "./Customer"

function ListCustomers(props){

    const customers = props.customerList.map((customer) => <Customer data={customer}/>)

       
    return(
        <>
            <ul>
                {customers}
            </ul>
        </>
    )
}

export default ListCustomers