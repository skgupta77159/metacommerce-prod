import { useState } from "react";
import ClockIcon from "../../../static/svg/ClockIcon"
import { set_order_status } from "../../../service/adminApi";
import axios from "../../../axios"
import "../dashboardstyle.css"

export default function OrdersCard(props) {

    const [isLoading, setIsLoading] = useState(false)

    const setOrderStatus = async (status) => {
        try {
            const config = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Bearer ${localStorage.getItem("adminAuthToken")}`
                }
            }
            return await axios.post("/api/auth/updatestatus", { "status": status, "orderId": props.value._id }, config).then(response => {
                props.getAdminOrders()
                alert("Order status updated successfully")
            }).catch((error) => {
                alert("Failed to update status, Please try again later")
            })
        } catch (e) {
            console.log(e)
        }
        setIsLoading(false)
    }
    const handleChange = (e) => {
        setIsLoading(true)
        e.preventDefault();
        setOrderStatus(e.target.value);
    };

    return (
        <div className="orderWrapper">
            <div className="orderCardLeft">
                <h3 className='productName'>{props.value.productName}</h3>
                <p className='productCateg'>Product Id: {props.value.productId}</p>
                <p className='productCateg'>Price: ${props.value.productPrice}/-</p>
                <p className='productCateg'>Quantity: {props.value.productQuantity}</p>
                <hr />
                <p className='productCateg'>Total Price: ${props.value.totalPrice}</p>
            </div>
            <div className="customerDetail">
                <h3 className='productName'>{props.value.userName}</h3>
                <p className='productCateg'>Delivery Address: {props.value.deliveryAddress}</p>
                <p className='productCateg'>Payment Mode: COD</p>
                <p className='productCateg'><ClockIcon /> Ordered on: {props.value.createdAt.slice(0, props.value.createdAt.length - 13)}</p>

                <div className="orderStatus">
                    <select disabled={isLoading} name="orderStatus" id="orderStatus" value={props.value.status} onChange={handleChange}>
                        <option value="Processing">Processing</option>
                        <option value="Shipping">Shipping</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                </div>
            </div>

            <div className="orderCardRight">
                <img src={props.value.productImg} alt="product image" />
            </div>
        </div>
    )
}