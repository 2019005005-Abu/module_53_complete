import React from 'react'
import Features from './Features'
const PriceCard = ({priceCart}) => {
    const{
     features,
     membershipType,
     price
    }=priceCart
  return (
    <div className='mt-4 text-center bg-indigo-800'>
      <h5 className='text-2xl font-extrabold text-purple-500'>{price} <span>/month</span></h5>
      <h5 className='mt-2 text-4xl font-bold'>{membershipType}</h5>
      <div className='p-3'>
      {features.map(function(f){
        return(
            <div><Features features={f} key={f.idx}></Features></div>
        )
      })}
      </div>
      <button className='w-full p-5 text-center text-white bg-green-500 font-extralight'>Buy Now</button>
    </div>
  )
}

export default PriceCard
