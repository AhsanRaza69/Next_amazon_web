import Banner from '@/components/Banner'
import Products from '@/components/Products'
import { Inter } from 'next/font/google'
import { ProductProps } from '../../type'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAllProducts,resetFavoriteData } from '@/store/nextslice'

interface Props {
  ProductData : ProductProps
}

const inter = Inter({ subsets: ['latin'] })

export default function Home({ProductData}:Props) {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setAllProducts({AllProduct:ProductData}))
    // dispatch(resetFavoriteData())
  },[])
  return (
   <main>

  <div className=' max-w-screen-2xl mx-auto'>
    <Banner/>
    <div className=' relative md:-mt-32 xl:-mt-60 z-20 mb-10'>
    <Products ProductData={ProductData}/>

    </div>
  </div>
   </main>
  )
}``

// SSR for data fetching

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const ProductData = await res.json();
  return { props: { ProductData } };
};
