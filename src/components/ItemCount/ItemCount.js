import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../ItemCount/ItemCount.css"


export const ItemCount = ({stock, initial, onAdd, showText}) =>{
    

    const [count, setCount] = useState(initial);

    const decrementar = ()=>{
        if (count>1){
            setCount(count-1)
        }
    }
    
    const incrementar = ()=>{
        if (count<stock){
            setCount(count+1)
        }
    }


    return (
        <div className="col-12 d-flex justify-content-center flex-wrap my-4">
            <div className="col-12">
                <p className="">Plazo disponible: {stock} semanas</p>
            </div>
            <div className="d-flex col-12">
                <button  disabled={count <= 1} onClick={decrementar} className='btn-itemCount '>-</button>
                <p className="mx-4">{count}</p>
                <button  disabled={count >= stock} onClick={incrementar} className='btn-itemCount'>+</button>
            </div>
            <div className="d-flex col-12">
                <button disabled={stock===0} className='btn-Agregar ' onClick={() => onAdd(count)}>Agregar al carrito</button> 
            </div>
        </div>
        )
}