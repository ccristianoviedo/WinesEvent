import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import '../Item/Item.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Item=({products})=>{
    const navigate = useNavigate()
    const initial=1
    const [counter, setCounter]= useState(initial);
    
    if (products.stock<1){
        return (
            <div className='itemPr'>
                <img src={products.img} alt={products.name} className='imgPr'/>        
                <p>BODEGA:{products.name}</p>
                <p>PRECIO: $ {products.price}</p>
                <p>STOCK: {products.stock}</p>
                <button type="button" class="btnD btn-info" onClick={()=> navigate(`/item/${products.id}`)}>Detalles</button>
                <h3>NO HAY STOCK!!</h3>
            </div>
        ) 
    }else if (products.stock>=1){
        const sumar=()=>{
            const newValue = counter+1;
            if(newValue <= products.stock){
                setCounter(newValue)
            }
        }    
        const subtract=()=>{
            const newValue = counter-1;
            if(newValue >= initial){
                setCounter(newValue)
            }
        }
        const onAdd =()=>{
            alert(`Agrego ${counter} articulos al carrito de compras.`)
        }             
        return (
            <div className='itemPr'>
                <img src={products.img} alt={products.name} className='imgPr'/>        
                <p>BODEGA:{products.name}</p>
                <p>PRECIO: $ {products.price}</p>
                <p>STOCK: {products.stock}</p>
                <button type="button" class="btnD btn-info" onClick={()=> navigate(`/item/${products.id}`)}>Detalles</button>
                <ItemCount initial={1} onAdd={onAdd} stock={products.stock} sumar={sumar} subtract={subtract} counter={counter}/>
            </div>
        ) 
    }
}
export default Item;