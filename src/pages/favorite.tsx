import React from 'react'
import { useSelector } from 'react-redux'
import { StoreProduct, stateProps } from '../../type'
import FavoriteProduct from '@/components/FavoriteProduct'
import Link from 'next/link'
import ResetfavItem from '@/components/ResetfavItem'

const favorite = () => {
  const { FavoriteData} = useSelector((state:stateProps)=>state.cart)
  console.log(FavoriteData)
  return (
    <div className=' max-w-screen-xl mx-auto px-6 gap-10 py-4'>
      {
        FavoriteData.length > 0 ? <div>
          <div className=' bg-white p-4 rounded-lg'>
           <div className=' flex items-center justify-between border-b-[1px] border-gray-100 pb-1'>
           <p className=' text-2xl font-semibold text-amazon_blue'>Favorite Items</p>
            <p className=' text-lg font-semibold text-amazon_blue'>Action</p>
           </div>
           <div>
            {
              FavoriteData.map((item:StoreProduct)=>(
               <div className='mt-2' key={item._id}>
                <FavoriteProduct  item={item}/>
               </div>
              ))
            }
           </div>
           <ResetfavItem/>
          </div>
        </div> : <div className=' bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg'>
               <h1 className=' text-lg font-medium'>Nothing is availble in favrite list </h1>
              <Link href="/"><button className='w-52 h-10 text-white bg-amazon_blue hover:text-amazon_blue rounded-lg text-sm font-semibold hover:bg-amazon_yellow'>GO To Shoping</button></Link>
         </div>
      }
    </div>
  )
}

export default favorite