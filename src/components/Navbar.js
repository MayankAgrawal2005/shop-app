import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
 const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div >

     <div className='flex items-center h-20 max-w-6xl justify-between bg-slate-900 mx-auto'>
<NavLink to="/">
  <div className='ml-5'>
  <img  src={"https://tse3.mm.bing.net/th?id=OIP.IKODuRSlFPBtU1--xYosdAHaCa&pid=Api&P=0&h=180"}
  className=' text-white  h-14'></img>
  </div>
</NavLink>


{/* <img src='https://tse3.mm.bing.net/th?id=OIP.IKODuRSlFPBtU1--xYosdAHaCa&pid=Api&P=0&h=180'> </img> */}
<div className='flex  font-medium items-center space-x-6 text-slate-100 mr-5'>

<NavLink to="/">
<p className=''>Home</p>
</NavLink>
  
  <NavLink to="/cart">
  
  
  <div className=' relative bold  '>

  <FiShoppingCart className='text-2xl'/>
   
    {
      cart.length>0&&
      <span className='absolute -top-1 -right-2 bg-green-600 text-xs
       w-5 h-5 flex items-center justify-center animate-bounce rounded-full text-white'> {cart.length}</span>
  
    }
  </div>
  {/* <div  className='bg-green-800  w-3 rounded-lg  '>{cart.length}</div> */}
  
  
  </NavLink>
  
</div>
   
     </div>
    </div>
  )
}

export default Navbar;
