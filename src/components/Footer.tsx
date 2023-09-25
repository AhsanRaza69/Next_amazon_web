import Image from 'next/image'
import logo from '../images/logo.png'
import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className=' w-full bg-amazon_light  h-20 text-gray-300 flex items-center justify-center  '>
        <Image className=' w-24' src={logo} alt='logo'/>
        <p className=' text-sm -mt-4'>All right reversed <Link className=' hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300 ' href='https://reactbd.com' target='_black'>@Reactbd.com</Link></p>
    </div>
  )
}

export default Footer