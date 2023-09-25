import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct } from "../../type";

interface NextState {
    productData:StoreProduct[],
    FavoriteData:StoreProduct[],
    AllProduct:StoreProduct[],
    userInfo:null | string ,
    
}

const initialState:NextState = {
         productData:[],
         FavoriteData:[],
         AllProduct:[],
         userInfo:null
}

export const nextSlice = createSlice({
    name:'cart',
    initialState,
      reducers:{
        addToCart: (state,action)=>{
            const ExistingItem = state.productData.find((item:StoreProduct)=>item._id===action.payload._id)

            if(ExistingItem){
                ExistingItem.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload)
               
            }
        },
        addToFavorite: (state,action)=>{
            const ExistingItem = state.FavoriteData.find((item:StoreProduct)=>item._id===action.payload._id)

            if(ExistingItem){
                ExistingItem.quantity += action.payload.quantity
            }else{
                state.FavoriteData.push(action.payload)
            }
        },
        increaseQuantity: (state,action)=>{
            const ExistingItem = state.productData.find((item:StoreProduct)=>item._id===action.payload._id)
            
            ExistingItem && ExistingItem.quantity++
        },
        decreseQuantity: (state,action)=>{
            const ExistingItem = state.productData.find((item:StoreProduct)=>item._id===action.payload._id)
            if(ExistingItem?.quantity===1){
                ExistingItem.quantity = 1
            }else{
                ExistingItem!.quantity--
            }
        },
        delectProduct: (state,action)=>{
            state.productData = state.productData.filter((item)=>item._id !== action.payload)
        },
        delectfavorite: (state,action)=>{
            state.FavoriteData = state.FavoriteData.filter((item)=>item._id !== action.payload)
        },
        resetCart: (state)=>{
            state.productData = []
        },
        resetFavoriteData: (state)=>{
            state.FavoriteData = []
        },
        addUser: (state,action) =>{
            state.userInfo = action.payload
        },
        removeUser: (state ) =>{
            state.userInfo = null
        },
        setAllProducts: (state,action) =>{
            state.AllProduct = action.payload
        },
        

      }
})

export const {
    addToCart,
    addToFavorite,
    resetFavoriteData,
    increaseQuantity,
    decreseQuantity,
    delectProduct,
    delectfavorite,
    addUser,
    removeUser,
    resetCart,
    setAllProducts
} =  nextSlice.actions;
export default  nextSlice.reducer