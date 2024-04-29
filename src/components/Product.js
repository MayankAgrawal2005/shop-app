
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import {toast} from 'react-toastify';
// import {add,remove} from "../reduc/slices/cartSlice"
// const Product = ({post}) => {

//   const {cart} = useSelector((state)=> state);
//   const dispatch =useDispatch();

//   const addToCart =()=>{
//   dispatch(add(post));
//   toast.success("ITem added to Cart");
//   }
 
//   const removeFromCart =()=>{
//     dispatch(remove(post.id));
//     toast.success("ITem Removed from Cart");
//     }
  
   
//   // function removeFromCart(){

//   // }
//   return (
//     <div>
//  <div>
//   <p>{post.title}</p>
//  </div>
//  <div>
//   <p>{post.description}</p>
//  </div>
//  <div>
//   <img src={post.image}/>
//  </div>
//  <div>
//   <p>{post.price}</p>
//  </div>
 
// {
//   cart.some((p)=>p.id==post.id)?
//   (<button onClick={removeFromCart}>
//   Remove Item
//   </button>)

//   :(<button onClick={addToCart}>
//   Add to cart
//   </button>)
// }


//     </div>
//   )
// }

// export default Product;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { add, remove } from "../reduc/slices/cartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector(state => state); // Make sure state structure matches
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  };

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 
    transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline '>
      <div>
        <p className='text-gray-700 font-semibold text-lg lext-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 font-normal text-[10px] '>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='h-[180px]'>
        <img className='h-full w-full' src={post.image} alt={post.title} />
      </div>

      <div className='flex gap-12'>
      <div>
        <p className='text-green-600 font-semibold items-center w-full '>${post.price}</p>
      </div>

      {cart && cart.some(p => p.id === post.id) ? (
        <button className="text-gray-700 border-2 border-gray-700 
        rounded-full font-semibold text-[12px] p-1 px-3 transition duration-300 ease-in hover:bg-gray-700 hover:text-white " 
        onClick={removeFromCart}>REMOVE ITEM</button>
      ) : (
        <button className="text-gray-700 border-2 border-gray-700 
        rounded-full font-semibold text-[12px] p-1 px-3 transition duration-300 ease-in hover:bg-gray-700 hover:text-white " onClick={addToCart}>ADD TO CART</button>
      )}
      </div>
      
    </div>
  );
};

export default Product;
