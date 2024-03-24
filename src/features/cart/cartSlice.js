import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
}


const cartSlice = createSlice({
    name : "cart" , 
    initialState , 
    reducers : {
        AddItem: (state , action) => {
            state.cart.push(action.payload)
        },
        AddQuantity : (state , action) => {
            const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);
            item.quantity++
            item.totalPrice = item.quantity *   item.unitPrice
        } , 
        RemoveQuantity: (state , action) => {
            const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);
            item.quantity--
            item.totalPrice = item.quantity * item.unitPrice
            if(item.quantity === 0) cartSlice.caseReducers.DeleteItem(state , action)
        },
        DeleteItem: (state , action) => {
            state.cart = state.cart.filter((pizza) => pizza.pizzaId !== action.payload);
        },
        clearCart: (state) => {
            state.cart = []
        }

    }
})


export default cartSlice.reducer
export const {AddItem , AddQuantity , DeleteItem , RemoveQuantity , clearCart} = cartSlice.actions