import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import CartItem from "../components/CartItem";
import {NavLink} from "react-router-dom"
 const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
 setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div>
{
  cart.length>0?(<div className='flex w-11/12 mx-auto justify-center space-x-7  mt-5'>
    
    <div>
      {
        cart.map((item,index)=>{
          return <CartItem key={item.id} item={item} itemIndex={index} className='' />
        })
      }
    </div>
        <div className='flex flex-col '>
          <div className='mt-5'>
            <div className='uppercase'>Your Cart</div>
            <div className='text-3xl bold uppercase text-green-500 '>Summary</div>
            <p className='mt-2'>
              <span>Total Items : {cart.length}</span>
            </p>
          </div>

          <div className='flex flex-col mt-[400px] space-y-2 '>
            <p className='ml-2'> Total Amount:${totalAmount}</p>
            <button className='bg-green-600 w-[250px]  text-white  px-4 right-9 py-3  rounded-lg'>CheckOut Now</button>

          </div>
        </div>
  </div>):
  (
    <div className='flex  flex-col   my-[150px] mx-auto space-y-5   items-center justify-center'>
      <h1 className='font-mullish text-xl'>Cart Empty</h1>
      <NavLink to="/">
        <button className='bg-green-600 rounded-md border-black bold hover:bg-blue-500 px-3 py-3'>Shop Now</button>
      </NavLink>
    </div>
  )
}
    </div>
  )
}

export default Cart;