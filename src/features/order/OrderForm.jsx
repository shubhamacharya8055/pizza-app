import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCreateOrder from "./useCreateOrder";
import { clearCart } from "../cart/cartSlice";
import { fetchAddress } from "../user/userSlice";

export default function OrderForm() {

    const [customer, setcustomer] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [withPriority, setWithPriority] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {createOrderApi, isCreating} = useCreateOrder()

    const {cart} = useSelector(state => state.cart)
    const {username , status , position , address:fullAddress , error , addressObj} =  useSelector(state => state.user)
    const totalPrice = cart.reduce((sum, curr) => sum + curr.totalPrice , 0)
    const priorityPrice = withPriority ? (totalPrice* 0.2 ) : 0 ; 
    const totalCartPrice = totalPrice + priorityPrice

    const addressLoading = status === "loading"

    useEffect(() => {
        if(!username) navigate("/")
        if(username) setcustomer(username)
        if(fullAddress) setAddress(fullAddress)
    } , [username , fullAddress])


    function handleSubmit (e) {
        e.preventDefault()
        const orderData = {
            cart : cart , 
            priority : withPriority  , 
            customer , 
            address , 
            phone , 

        }

        createOrderApi(orderData, {
            onSuccess : (data) => {
                navigate(`/order/${data?.id}`)
                dispatch(clearCart())
            }
        })
    }



  return (
    <form className="flex flex-col gap-y-5 w-full "
    onSubmit={handleSubmit}
    >
    <div className="flex gap-x-3 items-center justify-between w-full">
        <label htmlFor="customer" className=" tracking-widest font-pizza-semibold text-lg">First Name</label>
        <input type="text" name="customer" id="customer"
        // defaultValue={username || ""}
        className=" border py-2 px-5 focus:outline-none focus:ring focus:ring-black/20 rounded-full w-2/3"
        value={customer}
        onChange={(e) => setcustomer(e.target.value)}
        required
        />
    </div>
    <div className="flex gap-x-3 items-center justify-between w-full">
        <label htmlFor="phone" className=" tracking-widest font-pizza-semibold text-lg">Phone number</label>
        <input type="tel" name="phone" id="phone" 
        className=" border py-2 px-5 focus:outline-none focus:ring focus:ring-black/20 rounded-full w-2/3"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        />
    </div>
    <div className="flex gap-x-3 items-center justify-between w-full relative">
        <label htmlFor="address" className=" tracking-widest font-pizza-semibold text-lg">Address</label>
        <input type="text" name="address" id="address" 
        className=" border py-2 px-5 focus:outline-none focus:ring focus:ring-black/20 rounded-full w-2/3"
        value={address}
        placeholder={addressLoading ? "Fetching the address" : fullAddress}
        onChange={(e) => setAddress(e.target.value)}
        required
        />
        {(!position.latitude && !position.longitude) && (
             <button
             className="border py-2 px-5 bg-yellow-300 rounded-full text-sm block absolute right-1"
             disabled = {addressLoading}
             onClick={(e) => {
                 e.preventDefault()
                 dispatch(fetchAddress())
             }}
     
             >Get Location</button>
        )}
       
    </div>

    <div className="flex items-center gap-x-4 ">
        <input type="checkbox" className="h-6 w-6" 
        value={withPriority}
        onChange={(e) => setWithPriority(e.target.checked)}
        />
        <label htmlFor="check" className="text-base font-pizza-semibold tracking-widest ">Want to give your order priority ?</label>
    </div>

    <div>
    <button type="submit" className="text-left block bg-yellow-300 px-5 py-3 rounded-full"
    disabled = {isCreating}
    >
        Order now for <span className="font-pizza-extraBold"> {formatCurrency( totalCartPrice )} </span>
    </button>
    </div>
</form>
  )
}
