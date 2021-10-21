import React, { useEffect } from 'react'
import { Slider } from './../Slider/Slider';

import { useDispatch, useSelector } from 'react-redux'
import { fetchBasketData } from './../../Store/fetchDataReducer';
import { addToCart } from './../../Store/shoppingReducer';

import './Home.css';

export const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBasketData());
    }, [])

    const basketData = useSelector(state => state.fetchDataReducer);
    const { loading, basket, error } = basketData;

    const openImage = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null
    }

    return (
        <div>
            <Slider />
            {/* Show Fetched Data */}
            <div className="itemsContainer">
                {
                    loading ? (<h1 className="loading">Loading</h1>) :
                        error ? (<h1 className="error">Error While fetching Data</h1>) : (
                            <div className="itemCardContainer">
                                {
                                    basket && basket.map(bas => {
                                        return (
                                            <div className="itemCard" key={bas.id}>
                                                <h3 className="title">{bas.title}</h3>
                                                <img onClick={() => openImage(bas.image)} className="image" src={bas.image} alt={bas.title} />
                                                <p className="description">{bas.description}</p>
                                                <div className="priceAndCategory">
                                                    <span className="category">{bas.category.charAt(0).toUpperCase() + bas.category.slice(1)}</span>
                                                    <p className="price">$ {bas.price}</p>
                                                </div>
                                                {/* <div className="btnGroup"> */}
                                                <button onClick={() => dispatch(addToCart(bas))} className="btnAdd">Add to Cart</button>
                                                {/* <button className="btnRemove">Remove from Cart</button> */}
                                                {/* </div> */}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                }
            </div>
        </div>
    )
}
