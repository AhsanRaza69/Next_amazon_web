import {  resetFavoriteData } from '@/store/nextslice'
import { useDispatch } from 'react-redux'

const ResetfavItem = () => {
    const dispatch = useDispatch()

    const handleReset = () =>{
        const confirmReset =  window.confirm(
            "Are you sure to reset your items from the cart?"
        )
        if(confirmReset){
            dispatch(resetFavoriteData())
        }
    }
  return (
    <button onClick={handleReset} className=' w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300'>Reset Favorite List</button>
  )
}

export default ResetfavItem