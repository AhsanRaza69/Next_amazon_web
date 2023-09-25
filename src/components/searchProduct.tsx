import React from 'react'
import FormatedPrice from './FormatedPrice';


interface Props{
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number;
}

type Item = {
    item:Props
}

const SearchProduct = ({item}:Item) => {
  return (
    <div className=' flex  items-center gap-4'>
     <img className=' w-24' src={item.image} alt="" />
        <div>
                               
                                  <p className=' text-xs -mb-1'>{item.brand}_{item.category}</p>
                                  <p className=' text-lg font-medium'>{item.title}</p>
                                  <p className=' text-xs '>
                                    {item.description.substring(0,100)}
                                  </p>
                                  <p className=' flex items-center gap-2'> 

            <span className=' line-through text-sm'>
            <FormatedPrice amount={item.oldPrice}/>
            </span>
            <span className=' text-amazon_blue font-semibold'>
            <FormatedPrice amount={item.price}/>
            </span>
             </p>
                                 
               </div>     
               <div className=' flex-1 px-4 text-right'>
               <p className=' text-green-600  font-semibold text-base animate-bounce'>save <FormatedPrice amount={item.oldPrice-item.price}/> </p></div>  
    </div>
  )
}

export default SearchProduct