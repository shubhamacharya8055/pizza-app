import { useDispatch, useSelector } from "react-redux"
import { formatCurrency } from "../../utils/helpers"
import { AddItem, AddQuantity } from "../cart/cartSlice";
import CartButtons from "../cart/CartButtons";

export default function MenuItem({item}) {

    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cart);
  
    function AddItemToCart (e) {
        e.preventDefault()
        const newItem = {
            pizzaId : item.id , 
            name : item.name , 
            unitPrice : item.unitPrice , 
            quantity : 1 , 
            totalPrice : item.unitPrice * 1 , 
            ingredients : item.ingredients
        }
          
        dispatch(AddItem(newItem))
    }



    const itemInCart = cart.find((pizza) => pizza.pizzaId === item.id)
    const isInCart = Boolean(itemInCart)


  return (
    <div key={item.id} className={`py-5 flex gap-3 w-full ${item.soldOut === true && "opacity-50 grayscale"}`}>
    <img src={item.imageUrl} alt={item.name} className="rounded-md w-24 object-cover" />
    <div className="flex flex-col w-full">
    <div className="flex flex-col">
        <p className="text-base font-pizza-semibold leading-none">{item.name}</p>
        <p className="text-gray-600 text-sm italic">{item.ingredients.join(", ")}</p>
    </div>
    <div className="mt-auto flex justify-between">
        <p className="text-base mt-1 font-pizza-extraBold">{formatCurrency( item.unitPrice )}</p>
       
        { item.soldOut === false && !isInCart && <button className="bg-yellow-300 px-5 py-2 text-xs font-pizza-semibold rounded-full"
        onClick={AddItemToCart}
        >Add to cart</button>}

        {isInCart && <CartButtons pizza={itemInCart} key={itemInCart.pizzaId} />}

    </div>
    </div>
</div>
  )
}
