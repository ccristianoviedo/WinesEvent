import React, {useState} from 'react';
import '../ItemDetail/ItemDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from '../ItemCount/ItemCount';
import { NavLink } from 'react-router-dom';

const ItemDetails=({item})=>{
    const initial=1
    const [counter, setCounter]= useState(initial);
    const [visible, setVisible] = useState(true);

    const onAdd=()=> {
        setVisible(false)
    }   
    if (item.stock<1){
        return (
            <div className='item'>
                <div className='imgItem'>
                    <img src={item.img} alt={item.name} className='imgUrl'/>
                </div>
                <div className='itemText'>     
                    <p>BODEGA: {item.name}</p>
                    <p>DESCRIPCION:  {item.description}</p>
                    <p>COSECHA: {item.harvest}</p>
                    <p>VARIEDAD: {item.variety}</p>
                    <p>CRIANZA: {item.breeding}</p>
                    <p>SUGERENCIA: {item.suggest}</p>
                    <p>STOCK: {item.stock}</p>
                    <h3>NO HAY STOCK!!</h3>
                </div>   
            </div>
        )
    }else if (item.stock>=1){
        const sumar=()=>{
            const newValue = counter+1;
            if(newValue <= item.stock){
                setCounter(newValue)
            }
        }    
        const subtract=()=>{
            const newValue = counter-1;
            if(newValue >= initial){
                setCounter(newValue)
            }
        }               
        return (
            <div className='item'>
                <div className='imgItem'>
                    <img src={item.img} alt={item.name} className='imgUrl'/>
                </div>
                <div className='itemText'>     
                    <p>BODEGA: {item.name}</p>
                    <p>DESCRIPCION:  {item.description}</p>
                    <p>COSECHA: {item.harvest}</p>
                    <p>VARIEDAD: {item.variety}</p>
                    <p>CRIANZA: {item.breeding}</p>
                    <p>SUGERENCIA: {item.suggest}</p>
                    <p>STOCK: {item.stock}</p>
                    {visible && <ItemCount stock={item.stock} onAdd={onAdd}sumar={sumar} subtract={subtract} counter={counter}/>}
                    {!visible && 
                    <div className='endCart'>
                        <p>Agrego {counter} productos al carrito</p>                        
                            <NavLink activeClassName="navL" to="/Cart">
                                Terminar Compra
                            </NavLink>                   
                    </div>
                    }
                </div>   
            </div>
        ) 
    }
}
export default ItemDetails;