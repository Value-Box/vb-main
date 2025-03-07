import React, { useEffect, useState } from 'react'
import DetailProductCard2 from './Cards/DetailProductCard2'

function MoreToLove() {
    const products = [
        { id: 1, name: "Men'S Other Running Shoes Korean Style", price: 5000, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080' },
        { id: 2, name: "Men'S Other Running Shoes Korean Style", price: 4500, image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 3, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 4, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 5, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
        { id: 6, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D' },
        { id: 7, name: "Men'S Other Running Shoes Korean Style", price: 4000, image: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
        { id: 8, name: "Men'S Other Running Shoes Korean Style", price: 6000, image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D" },
        { id: 9, name: "Men'S Other Running Shoes Korean Style", price: 5500, image: "https://media.istockphoto.com/id/1472421626/photo/3d-rendering-of-wireless-headphones-on-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=OQwzpKJLs-82MoYwYViaHPFGh9jOSGbPlgFM77uJ5Fs=" }
      ];

      const [shuffleProduct,setShuffleProduct]=useState([])
      
      useEffect(()=>{
        setShuffleProduct([...products].sort(()=>Math.random()-0.5))
      },[])
  return (
    <>
    
    
      <div className='flex flex-wrap justify-center sm:justify-start gap-3 px-3 sm:px-8 mb-3 max-w-[1920px] mx-auto'>
      <DetailProductCard2 products={shuffleProduct} style={`flex-1`} />
      </div>
     
    {/* <DetailProductCard2 products={products} style={`flex-wrap`} /> */}
    </>
    
  )
}

export default MoreToLove