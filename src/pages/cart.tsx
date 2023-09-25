import React from 'react'
import { useSelector } from 'react-redux'
import { StoreProduct, stateProps } from '../../type'
import CartProduct from '@/components/CartProduct'
import ResetCard from '@/components/ResetCard'
import Link from 'next/link'
import Payment from '@/components/Payment'

const Cart = () => {
  const {productData} = useSelector((state:stateProps)=>state.cart)

  return (
    <div className=' max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4'>
      {
        productData.length > 0 ? (
         <>
          <div className='bg-white  col-span-4 p-4 rounded-lg'>
            <div className=' flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1'>
              <p className=' text-2xl font-semibold  text-amazon_blue'>Shoping Cart</p>
              <p className='text-lg  font-semibold text-amazon_blue'>SubTitle</p>
            </div>
            <div className='pt-2 flex flex-col gap-2'>
            
              {
                productData.map((item:StoreProduct)=>{
                  return(
                    <div key={item._id} className='pt-2 flex flex-col gap-2'>
                    <CartProduct item={item}/>
                  </div>
                  )
                })
              }
              <ResetCard/>
            </div>
          </div>
          <div className=' bg-white h-64 col-span-1 p-4 rounded-lg flex items-center justify-center'>
            <Payment/>
          </div>
         </>
        ) :
         (<div className=' bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg'>
               <h1 className=' text-lg font-medium'>your Cart Empty</h1>
              <Link href="/"><button className='w-52 h-10 text-white bg-amazon_blue hover:text-amazon_blue rounded-lg text-sm font-semibold hover:bg-amazon_yellow'>GO To Shoping</button></Link>
         </div>)

        
      } 
    </div>
  )
} 

export default Cart