import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';
const API_URL = "https://fakestoreapi.com/products";


const Home = () => {

  const [loading,setLoading]= useState(false);
const [posts,setPosts]= useState([]);
async function fetchProductData(){



  setLoading(true);

  try{
   const res = await fetch(API_URL);
   const data = await res.json();
   setPosts(data);
  }

  catch(error){
    console.log("Error generated");
    setPosts([]);
  }

setLoading(false);
}

useEffect(() =>{
 fetchProductData();
},[]);

 return (
<div>
  {
    loading?<Spinner/>:
    posts.length>0?(
      <div className='grid lg:grid-cols-4 md:grid-cols-3  max-w-6xl mx-auto p-2 
       min-h-[80vh] space-y-10 space-x-5 '>
      {posts.map((post)=>(
        <Product key={post.id} post={post}/>
      ))}
    </div>):<div className='flex items-center justify-center'>
      <p> No data found</p>
    </div>
  }
</div>
);
};
 
  


export default Home;