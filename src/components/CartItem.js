import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify';
import {remove} from "../reduc/slices/cartSlice"

 const CartItem = ({item,itemIndex}) => {
const dispatch=useDispatch();
  const removeFromCart  = () =>{
dispatch(remove(item.id));
 toast.error("Item Removed");

  }
  return (
    <div className='space-y-14 flex space-x-8 w-8/9 mb-6  bottom-2 border-[#bfbfbf] '>
     <div>
      <img   src={item.image} className='w-[200px] '/>
     </div>

     <div className='  space-y-5' >
      <h1 className='font-semibold  max-w-[225px] '>{item.title}</h1>
      <h1 className='max-w-[250px]'>{item.description.split(" ").slice(0,10).join(" ")+"..."}</h1>
      <div className='flex justify-between'>
        <p className='text-green-700 font-bold'>${item.price}</p>
        <div className='w-[30px] h-[30px] rounded-full bg-red-400'>
        <div className=' w-[5px] mt-1 ' onClick={removeFromCart} ><FcDeleteDatabase className='w-[30px] h-[20px]' /></div>
        </div>
        
      </div>

     </div>

    </div>
  )
}

export default CartItem;
