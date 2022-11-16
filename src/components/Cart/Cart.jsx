import { addDoc,collection , getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import {ItemCart} from "../ItemCart/ItemCart"
import "../Cart/Cart.css"
import carrito from '../../assets/productos/carrito.png'


export const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: "Luciano",
            email: "luchilari21@gmail.com",
            phone: "098726374",
            address: "ok"
        },
        items:cart.map(product => ({id: product.id, marca: product.marca, modelo: product.modelo, price: product.price})) ,
        total:totalPrice() ,
    }
    
    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => alert("¡Tu compra ha sido realizada con éxito!" + "\n" + "La ID de la misma es: " + "\n"  + id))
        
    }


    if (cart.length === 0) {
        return (
            <div className="text-center p-5">
                <h1 className="">No hay elementos en el carrito</h1>
                <div className="my-5">
                    <img src={carrito} alt="" />
                </div>
                <Link className="btn-ver" to='/'>Ver Catálogo</Link>
            </div>
        )
    }

    return (
        <div>
            <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <div className="d-flex flex-wrap justify-content-center text-center my-5">
                <h1>Precio total:</h1>
                <h2 className="col-12 price">{totalPrice()} U$D</h2>
                <button className="btn-ver" onClick={handleClick} >Realizar orden</button>
            </div>
            </>
        </div>
        
    )
}

export default Cart 