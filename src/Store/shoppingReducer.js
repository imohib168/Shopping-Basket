import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart } from './utils';

const shoppingReducer = createSlice({
    name: 'ShoppingBasket',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            return {
                cart: addItemToCart(state.cart, action.payload)
            }
        },
        deleteFromCart: (state, action) => {
            return {
                cart: removeItemFromCart(state.cart, action.payload)
            }
        },
        clearItemFromCart: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
            }
        }
    }
})

export const { addToCart, deleteFromCart, clearItemFromCart } = shoppingReducer.actions;
export default shoppingReducer.reducer;