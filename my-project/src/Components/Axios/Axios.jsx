import React, { useEffect, useState,PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
const url=`https://openapi.programming-hero.com/api/phones?search=iphone`
import axios from "axios";
const Axios = () => {
    const[phones,setPhones]=useState([]);
    useEffect(()=>{
        LoadedData();
    })

    function LoadedData(){
        axios.get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
        .then((data)=>{
            let loadedData=data.data.data
            const  phoneData=loadedData.map((phone)=>{
                const parts=phone.slug.split('-');
                const price=parseInt(parts[1]);
                const phone_info={
                    name:phone.phone_name,
                    price:price
                }
                return phone_info
            })
            console.log(phoneData)
            setPhones(phoneData)
        })
     
    }

    
    
  return (
    <div>
      <h1 className='text-5xl font-extrabold text-center'>Axios</h1>
      <BarChart width={1000} height={500} data={phones}>
      <Bar dataKey="price" fill='#8884d8'></Bar>
      <XAxis dataKey='name'></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
      </BarChart>
    </div>
  )
}

export default Axios
