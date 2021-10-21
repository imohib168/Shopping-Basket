import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, addToCart, clearItemFromCart } from './../../Store/shoppingReducer';
import './Cart.css';

export const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.shoppingReducer.cart);

    return (
        <div className="cart">
            {
                cart.length === 0 ? (
                    <h2 className="emptyCart">Cart is Empty</h2>
                ) : (
                    cart && cart.map(item => {
                        return (
                            <div className="cartCard" key={item.id}>
                                <div className="cartCar__img">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="cartCard__details">
                                    <h3 className="_title">{item.title}</h3>
                                    <h3 className="_category">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h3>
                                    <h2 className="_price">$ {item.price}</h2>
                                    <div className="priceContainer">
                                        <h2 className="_quantity">Quantity: {item.quantity}</h2>
                                        <span onClick={() => dispatch(addToCart(item))} className="plus">+</span>
                                        <span onClick={() => dispatch(deleteFromCart(item))} className="minus">-</span>
                                    </div>
                                    <button className="btnRemove" onClick={() => dispatch(clearItemFromCart(item))}>Remove Item</button>
                                </div>
                            </div>
                        )
                    })
                )
            }
        </div >
    )
}
