import "../ItemCart/ItemCart.css"
import React from "react"
import { useCartContext } from "../../context/CartContext";

export const ItemCart = ({product}) => {
    const { removeProduct } = useCartContext();

    return (
        <div className="d-flex justify-content-center my-3 ">
            <div className="itemCart col-6 p-2">
                <img className="img-cart m-3" src={product.img} alt={product.marca}/>
                <div className="d-flex align-items-center contenedor-itemcart">
                    <div className="col-3">
                        <h2>{product.marca}</h2>
                        <h2 className="modelo">{product.modelo}</h2>
                        <p> {product.año}</p>
                    </div>
                    <div className="">
                        <p>Precio por semana: {product.price} U$D</p>
                        <p>Cantidad de semanas contratadas: {product.quantity} </p>
                    </div>
                    <div>
                        
                    </div>
                    <p>SubTotal: {product.quantity * product.price} U$D</p>
                    <button className="btn-remove p-3" onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}