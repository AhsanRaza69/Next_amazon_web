import { resetCart } from '@/store/nextslice'
import React from 'react'
import { useDispatch } from 'react-redux'

const ResetCard = () => {
    const dispatch = useDispatch()

    const handleReset = () =>{
        const confirmReset =  window.confirm(
            "Are you sure to reset your items from the cart?"
        )
        if(confirmReset){
            dispatch(resetCart())
        }
    }
  return (
    <button onClick={handleReset} className=' w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300'>Reset Cart</button>
  )
}

export default ResetCard