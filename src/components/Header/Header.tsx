import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../../images/logo.png'
import cartIcon from '../../images/cartIcon.png'
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { StoreProduct, stateProps } from '../../../type';
import { useSession, signIn, signOut } from "next-auth/react"
import { addUser, setAllProducts } from '@/store/nextslice';
import SearchProduct from '../searchProduct';

const Header = () => {
  const {productData,FavoriteData,userInfo,AllProduct}= useSelector((state:stateProps)=>state.cart)
  
  const [searchQuery, setsearchQuery] = useState("")
  const [FilterProducts, setFilterProducts] = useState([])
  const [AllData, setAllData] = useState([])
  const dispatch =  useDispatch()

  const { data: session } = useSession()

  useEffect(()=>{
    setAllData(AllProduct.AllProduct)
  },[AllProduct])
  

  useEffect(()=>{
    if(session){
      dispatch(addUser({
        name:session?.user?.name,
        email:session?.user?.email,
        image:session?.user?.image,
      }))
    }
  },[session])




  //search funtion


  const handleSerach = (e:React.ChangeEvent<HTMLInputElement>) =>{
    
    setsearchQuery(e.target.value)
  }
  
  useEffect(() => {
    const filtered = AllData.filter((item: StoreProduct) =>
      item.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilterProducts(filtered)

  }, [searchQuery]);
  




  return (
    <div className='  w-full h-20  bg-amazon_blue  text-lightText  sticky top-0 z-50 '>
        <div className=' h-full w-full mx-auto inline-flex items-center justify-between gap-1  mdl:gap-3 px-4 '>
           {/* LOgo */}
           <div className=' px-2  border  border-transparent hover:border-white  cursor-pointer duration-300  flex justify-center  items-center h-[70%]'>
          <Link href='/'>
          <Image className='w-28 mt-1 object-cover' src={logo} alt='logoImg' />
          </Link>

           </div>
            {/* delivery */}
            <div className=' px-2  border  border-transparent hover:border-white  cursor-pointer duration-300  justify-center  items-center h-[70%] hidden xl:inline-flex gap-1'>
                <SlLocationPin/>
                <div className=' text-sm'>
                <p>Deliver to </p>
                <p className=' text-white  font-bold  uppercase '>US</p>
                </div>
            </div>
            {/* seachbar */}
            <div className=' flex-1 h-10 hidden md:inline-flex items-center  justify-between relative'>
                <input
                onChange={handleSerach}
                 className=' w-full h-full px-2 placeholder:text-sm text-base text-black border-[3px]  border-transparent outline-none rounded-md  focus-visible:border-x-amazon_yellow'
                 type="text"
                 value={searchQuery}
                  placeholder='Search next_amazon_yt Products' />

                  <span className=' w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0  rounded-tr-md rounded-br-md'>
                    <HiOutlineSearch/>
                  </span>
                  {
                    searchQuery && 
                      <div className='absolute left-0 top-12 w-full mx-auto max-h-96  py-4 bg-gray-200 rounded-lg overflow-y-scroll cursor-pointer text-black'>
                        {
                          FilterProducts.length > 0 ? <>
                            {
                              searchQuery && FilterProducts.map((item:StoreProduct)=>(
                                <Link
                                onClick={()=>setsearchQuery("")}
                                className=" w-full border-b-[1px] border-gray-400 flex items-center"
                                 href={{pathname:`${item._id}`,query:{
                                  _id:item._id,
                                  brand:item.brand,
                                  category:item.category,
                                  image:item.image,
                                  description:item.description,
                                  isNew:item.isNew,
                                  title:item.title,
                                  oldPrice:item.oldPrice,
                                  price:item.price,
                                  quantity:1
                                }}} >
                               <SearchProduct item={item}/>
                                </Link >
                              ))
                            } 
                          </> :
                          <div className=' bg-gray-50  flex items-center justify-center py-10 rounded-lg shadow-lg'>
                            <p className=' animate-bounce text-xl  font-semibold'>Nothing is match your search keyword.Please try  again! </p>
                          </div>
                        }
                      </div>
                    
                  }
            </div>
            {/* signin */}
           {
            userInfo? <div  className=' flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1'>
           <img src={userInfo.image} alt="userImage" className=' w-8 h-8 rounded-full object-cover' />
           <div className=' text-xs  text-gray-100 flex flex-col justify-between'>
            <p className=' text-white font-bold'>{userInfo.name}</p>
            <p >{userInfo.email}</p>
           </div>

        </div>: <div onClick={()=>signIn()} className=' text-sm text-gray-100 flex flex-col justify-center px-2 border  border-transparent hover:border-white cursor-pointer duration-300 h-[70%]'>
                <p>Hello,sign in </p>
                <p className=' text-white font-bold flex items-center'>Acount & List <span><BiCaretDown/></span></p>

            </div>
           }
            {/* favourit */}
            <Link href={"/favorite"} className=" text-sm text-gray-100 flex flex-col justify-center px-2 border  border-transparent relative hover:border-white cursor-pointer duration-300 h-[70%]">
                <p>Mark</p>
                <p className=' text-white font-bold'>& Favorite</p>
               {
                FavoriteData.length > 0 && (
                  <span className=' absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-sm text-amazon_yellow'>{FavoriteData.length}</span>
                )
               }
            </Link>
            {/* cart */}
                
                <Link href='/cart' className=' flex items-center px-2  border  border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative'>

                <Image className=' w-auto object-cover h-8' src={cartIcon} alt='carticon' />

                    <p  className=' text-sm text-white font-bold mt-3'>cart</p>
                   
                   <span className=' absolute  text-amazon_yellow text-sm  top-2 left-[29px] '>{productData ? productData.length : 0}</span>
                </Link>
          
        </div>
    </div>
  )
}

export default Header