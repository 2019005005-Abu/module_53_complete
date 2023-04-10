import React, { useEffect, useState } from 'react'
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
   const [price,setPrice]=useState([]);
    useEffect(()=>{
      LoadingData();
    },[])
    const LoadingData=()=>{
        fetch('rifat.json').then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        setPrice(data);
    })
        }
  return (
    <div>
      <h1 
      className='p-4 text-6xl text-center text-purple-900 bg-purple-500 font-b'>Affordable Price</h1>
       <div className='grid gap-3 p-3 md:grid-cols-3'>
        {
        price.map((price_item)=>{
            return(
                <div>
                 <PriceCard key={price_item.id} 
                 priceCart={price_item}></PriceCard>
                </div>
            )
        })
        }
       </div>
    </div>
  )
}

export default PriceList
