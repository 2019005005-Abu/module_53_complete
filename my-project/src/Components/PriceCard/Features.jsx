import React from 'react'
import {CheckCircleIcon} from  "@heroicons/react/24/solid"
const Features = ({features}) => {
  return (
    <ol className='text-white'>
      <li className='flex items-center gap-4 m-2 justify-ntercenter'> 
      <CheckCircleIcon className='w-6 text-blue-500'/>{features}
      </li>
    </ol>
  )
}

export default Features
