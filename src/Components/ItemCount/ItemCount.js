import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemCount.css'

const ItemCount=({sumar,subtract, counter, onAdd})=>{
    return(
        <>
            <div className='counters'>
                <div className='counter'>
                    <button onClick={subtract} className="btn btn-danger">RESTAR</button>
                    <button onClick={sumar} className="btn btn-danger">COMPRAR</button>
                </div>
                <div className='counter'>
                    <h3>{counter}</h3>
                    <button className="btn btn-danger btnCount" onClick={onAdd}>Carrito</button>
                </div>
            </div>
        </>
    )
}   
export default ItemCount;