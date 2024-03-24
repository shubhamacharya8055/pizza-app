import React from 'react'
import { useDispatch } from 'react-redux'
import { AddQuantity, DeleteItem, RemoveQuantity } from './cartSlice';

export default function CartButtons({pizza}) {

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
    <>
    <div className='flex items-center gap-x-2'>
    <div className='flex items-center justify-center gap-x-2'>
        <button className='block bg-yellow-300 rounded-full w-8 h-8 font-pizza-extraBold '
        onClick={(e) => Minus(pizza.pizzaId)}
        >-</button>
        <p className='font-pizza-semibold'>{pizza.quantity}</p>
        <button className='block bg-yellow-300 rounded-full w-8 h-8 font-pizza-extraBold'
        onClick={(e) =>Add(pizza.pizzaId)}
        >+</button>
    </div>
    <button className="capitalize bg-yellow-300 tracking-wide text-xs font-pizza-semibold px-4 py-2 rounded-full"
    onClick={() => Delete(pizza.pizzaId)}
    >
        delete
    </button>
</div>
</>
  )
}
