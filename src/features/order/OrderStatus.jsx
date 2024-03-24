import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGetOrder from './useGetOrder';
import { calcMinutesLeft, formatCurrency, formatDate } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import useMakePriority from './useMakePriority';

export default function OrderStatus() {

  const {cart} = useSelector(state => state.cart)

  const params = useParams() ;
  const navigate =  useNavigate()
  const {Order , isGetting , error } = useGetOrder(params.id)
  const {MakePriority , isMaking} = useMakePriority()

  if(isGetting) return <div className='text-2xl font-pizza-extraBold flex items-center justify-center w-full h-full'>The order is Loading</div>
  if(error) return <div className='flex justify-center items-center w-full h-full'>
    <div className='flex flex-col gap-y-2'>
    <p className='text-xl text-red-600'>No orders found with this id</p>
    <button
    className='px-5 py-3 bg-yellow-300 rounded-lg'
    onClick={() => {
        navigate(-1)
    }}
    > Back to home </button>
    </div>
  </div>

  return (
    <section
    className='w-2/3 mx-auto'
    >
        <div className='w-full h-full flex flex-col gap-y-5 py-10'>
            <div className='flex justify-between items-center'>
                <p className='font-pizza-semibold flex gap-x-3 text-xl'> <span>Order</span> <span> #{Order?.id} </span> <span>  status </span></p>
                <div className='flex gap-x-2'>
                {Order?.priority && <button className='uppercase bg-red-400 px-5 py-2 text-sm tracking-wider rounded-full font-pizza-semibold text-white'>Priority</button>}
                <button className='uppercase bg-green-500 px-5 py-2 text-sm tracking-wider rounded-full font-pizza-semibold text-white'>{Order?.status} order</button>
                </div>
            </div>

            <div className='flex justify-between items-center bg-gray-200 py-5 px-5'>
                <p className='tracking-widest'>Only {calcMinutesLeft(Order?.estimatedDelivery)} minutes left 😊</p>
                <p className='tracking-widest text-xs'>(Estimated delivery: {formatDate(Order?.estimatedDelivery)})</p>
            </div>

            <div className='w-full divide-y flex flex-col border-b'>
                {Order?.cart?.map((item) => (
                    <div key={item?.pizzaId} className='flex items-center justify-between py-5'>
                            <div className='flex flex-col'>
                            <p className='tracking-widest font-pizza-semibold'>{item?.quantity}x <span>{item?.name}</span></p>
                            <p className='italic text-sm text-gray-500'>{
                            cart.find((ing) => ing.pizzaId === item?.pizzaId)?.ingredients?.join(", ")
                            }</p>
                            </div>
                            <p className='font-pizza-extraBold'>{formatCurrency(item?.totalPrice)}</p>
                    </div>
                ))}
            </div>

            <div className='px-5 py-5 bg-gray-100 flex flex-col gap-y-2'>
                <p className='capitalize text-sm tracking-widest'>pizza price : {formatCurrency(Order?.orderPrice)}</p>
                {Order?.priority && <p className='tracking-widest text-base'>Priority price {formatCurrency(Order?.priorityPrice)}</p>}
                <p className='text-lg tracking-wider font-pizza-extraBold'>To pay on Delivery {formatCurrency(Order?.priorityPrice ? (Order?.orderPrice + Order?.priorityPrice) : Order?.orderPrice)}</p>
            </div>

            <div>
                {Order?.priority === false && 
                <button
                className='bg-yellow-400
                text-base uppercase block px-5 py-4 font-pizza-semibold tracking-wider rounded-full
                '
                onClick={() => MakePriority({id : Order?.id , updateObj : {priority : true}})}
                disabled = {isMaking}
                >
                    Make Priority
                </button>
                }
            </div>
        </div>
    </section>
  )
}
