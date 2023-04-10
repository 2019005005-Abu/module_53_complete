import React, { useState } from 'react'
import "../../Components/Navbar/NavStyle.css";
import Link from '../../Components/Link/Link'
import { Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'
const Nav = () => {
    const [Open,SetOpen]=useState(false)
    const items = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About",
          path: "/about"
        },
        {
          id: 3,
          name: "Contact",
          path: "/contact"
        },
        {
            id: 4,
            name: "Product",
            path: "/product"
        },
        {
            id: 5,
            name: "Service",
            path: "/service"
        }
        // add more items as needed
      ];
      
  return (
    <nav className='bg-purple-400'>
    <div  onClick={()=> SetOpen(!Open)} className='md:hidden'>
    <span>
    {
        Open===true ?
        <XMarkIcon className="w-6 h-6 text-blue-500" />
        :    
       <Bars3Icon className="w-6 h-6 text-blue-500" />
       }
    </span>
    
    
    </div>
      <ul className={
        `md:flex 
         absolute
        duration-500
         md:static 
        bg-gray-600
        text-white
        pl-8
        pb-4
        ${Open ?'top-6':'-top-48'}`}>
      {
        items.map((item)=>{
            return(
               <Link link={item} key={item.id}></Link>
            )
        })
      }
      </ul>
    </nav>
  )
}

export default Nav
