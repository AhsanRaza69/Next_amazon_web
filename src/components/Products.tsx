import React from 'react'
import { ProductProps } from '../../type'
import Image from 'next/image'
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import FormatedPrice from './FormatedPrice';
import { useDispatch } from 'react-redux';
import { addToCart, addToFavorite } from '@/store/nextslice';

const Products = ({ProductData}:any) => {

  const dispatch =  useDispatch()

  return (
    <div className=' w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
        {
          ProductData.map(({_id,title,brand,category,description,image,isNew,oldPrice,price}:ProductProps)=>{
          return(
           <div key={_id} className=' w-full bg-white  text-black p-4 border-gray-300 rounded-lg group overflow-hidden '>
           <div className=' w-full h-[260px] relative'>
          <Link href={{pathname:`${_id}`,query:{
             _id:_id,
             brand:brand,
             category:category,
             image:image,
             description:description,
             isNew:isNew,
             title:title,
             oldPrice:oldPrice,
             price:price,
             quantity:1
          }} }>
          <Image 
           className=' w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300'
            width={300}
             height={300}
             src={image} 
             alt='ProductImg' />
          </Link >
             <div className='w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 duration-300 transition-transform '>
              <span
              onClick={() => 
                dispatch(addToCart({
                  _id:_id,
                  brand:brand,
                  category:category,
                  image:image,
                  description:description,
                  isNew:isNew,
                  title:title,
                  oldPrice:oldPrice,
                  price:price,
                  quantity:1
                })
                )}
                className=' h-full w-full border-b-[1px]  border-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer  duration-300'>
                <HiShoppingCart/>
              </span>

              <span
              onClick={()=> dispatch(addToFavorite({
                _id:_id,
                brand:brand,
                category:category,
                image:image,
                description:description,
                isNew:isNew,
                title:title,
                oldPrice:oldPrice,
                price:price,
                quantity:1
              }))}
               className=' h-full w-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl bg-transparent  hover:bg-amazon_yellow cursor-pointer  duration-300'>
                <FaHeart/>
              </span>
             </div>
             {
              isNew && (
                <p className=' text-green-600 absolute top-0 right-0 font-medium text-xs tracking-wide animate-bounce'>!save <FormatedPrice amount={oldPrice-price}/> </p>
              )
             }
           </div>
           <hr />
           <div className=' px-4 py-3 flex flex-col  gap-2'>
            <p className=' text-sm text-gray-500 tracking-wide'>{category}</p>
            <p className=' text-base font-medium '>{title}</p>
            <p className=' flex items-center gap-2'> 

            <span className=' line-through text-sm'>
            <FormatedPrice amount={oldPrice}/>
            </span>
            <span className=' text-amazon_blue font-semibold'>
            <FormatedPrice amount={price}/>
            </span>
             </p>
             <p className=' text-sm text-gray-600 text-justify'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, esse. Minus, exercitationem!
             </p>
             <button onClick={() => 
             dispatch(addToCart({
              _id:_id,
                brand:brand,
                category:category,
                image:image,
                description:description,
                isNew:isNew,
                title:title,
                oldPrice:oldPrice,
                price:price,
                quantity:1
             })
             )} className=' h-10 font-medium bg-amazon_blue text-white rounded-md  hover:bg-amazon_yellow hover:text-black duration-300'>Add To Cart</button>

           </div>
           </div>
          )
          })
        }
    </div>
  )
}

export default Products