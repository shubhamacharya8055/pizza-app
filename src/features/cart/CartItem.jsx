import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { AddQuantity, DeleteItem, RemoveQuantity } from "./cartSlice";

export default function CartItem({item}) {

    const dispatch = useDispatch();

    function Add (id) {
        dispatch(AddQuantity(id))
    }

    function Minus (id) {
        dispatch(RemoveQuantity(id))
    }

    function Delete (id) {
        dispatch(DeleteItem(id))
    }



  return (
    <div
      key={item.pizzaId}
      className="flex lg:flex-row lg:justify-between lg:items-center gap-x-5 w-full py-3 flex-col items-start gap-y-3 lg:gap-y-0"
    >
      <div className="flex gap-x-3 items-center">
        <p className="font-pizza-semibold">{item.quantity}x</p>
        <p className="font-pizza-extraBold tracking-widest">{item.name}</p>
      </div>
      <div className="flex items-center justify-center gap-x-5">
        <div className="flex items-center justify-center gap-x-2">
          <button className="block bg-yellow-300 rounded-full w-10 h-10 font-pizza-extraBold "
          onClick={() => Minus(item.pizzaId)}
          >
            -
          </button>
          <p className="font-pizza-semibold">{item.quantity}</p>
          <button className="block bg-yellow-300 rounded-full w-10 h-10 font-pizza-extraBold"
          onClick={() => Add(item.pizzaId)}
          >
            +
          </button>
        </div>
        <p className="font-pizza-extraBold tracking-widest">{formatCurrency(item.totalPrice)}</p>
        <button className="bg-yellow-300 px-5 py-2 tracking-widest text-sm font-pizza-semibold rounded-full"
        onClick={() => Delete(item.pizzaId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
