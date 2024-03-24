import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utils/helpers'

export default function Footer() {

  const {cart} = useSelector(state => state.cart)

  const totalPizzas = cart.reduce((acc , curr) => acc + curr.quantity , 0);
  const totalPrice = cart.reduce((acc , curr) => {
    return acc + curr.totalPrice
  } , 0)

  if(cart.length === 0) return null

  return (
    <footer className='min-w-full border h-24 bg-gradient-to-tr from-zinc-800 to-slate-300
    px-5 lg:px-10 border-t border-white/15 rounded-bl-xl rounded-br-xl
    '>
        <div className='h-full w-full flex justify-between items-center'>
            <div className='flex gap-x-5 text-2xl font-pizza-semibold'>   
            <p className="tracking-wide text-slate-100 text-shadow-xl">{totalPizzas} Pizzas</p>
            <p className='tracking-widest text-slate-50 text-shadow-xl'>{formatCurrency(totalPrice)} </p>
            </div>


            <Link to="/cart">
            <button
            className='block text-2xl text-zinc-950 font-pizza-semibold text-shadow-xl
            hover:underline
            '
            >
                open cart
            </button>
            </Link>
        </div>
    </footer>
  )
}
