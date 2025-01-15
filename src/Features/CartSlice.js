import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState: []
    ,
    reducers:{
        addToCart:(state,action)=>{
    
            const foundItem = state.find((item) => {
                return item.name == action.payload.name
            })

            if(!foundItem)
            {
                state.push({imageid : action.payload.imageid ,name : action.payload.name, price : action.payload.price, quantity : 1, isVeg : action.payload.isVeg})
            }
            else
            {
                let nArr = state.filter((item) => {
                    return item.name != action.payload.name
                })

                nArr.push({name : foundItem.name, price : foundItem.price, quantity : foundItem.quantity + 1, isVeg : foundItem.isVeg, imageid : foundItem.imageid})
            
                while(state.length)
                {
                    state.pop()
                }

                while(nArr.length)
                {
                    state.push(nArr.pop())
                }
            }
        },
    }
})
export const {addToCart}=cartSlice.actions

export default cartSlice.reducer;
