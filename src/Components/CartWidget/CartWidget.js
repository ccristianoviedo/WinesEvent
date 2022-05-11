import React from 'react';
import './CartWidget.css'
import cartImg from'../Assets/img/cart.jpg'

const CartWidget=()=>{  
    return(
        <>
            <img src={cartImg} alt='imagen' className='cartImg'/>
            <label className='CartCounter'>1</label>
        </>
    )
}
export default CartWidget;