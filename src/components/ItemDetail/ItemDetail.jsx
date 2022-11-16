import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import "../ItemDetail/ItemDetail.css"
import {Swal, withReactContent, sweet} from 'sweetalert2'


export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext();

    
    const onAdd = (quantity) => {
        setGoToCart (true);
        addProduct(data, quantity)
    }
    return(
        <div className="contenedor-detail"> 
            <div className="d-flex">
                <div className="text-center col-5 my-3">
                    <img src={data.img} alt="" />
                    <h1 className="tlt-detail my-3">{data.marca} {data.modelo}</h1>
                    
                    
                </div>
                <div className="col-7">
                    <div className="my-3 ">
                        <div className="d-flex align-items-center">
                            <h4 className="precio">{data.price} U$D</h4>
                            <h4 className="aclaracion ">Por semana</h4>
                        </div>
                        <h5 className="precio-anterior">{data.price + (data.price / 100 * 25)} U$D</h5>
                        
                    </div>
                    <div className="col-8">
                        <p>{data.descripcion1}</p>
                        <p>{data.descripcion2}</p>
                        <p>{data.descripcion3}</p>
                        <p>{data.descripcion4}</p>
                        <p>{data.descripcion5}</p>
                    </div>
                    <div className="d-flex col-12 justify-content-center">
                        {
                        goToCart
                        ? <Link className="btn-terminar" onClick={sweet} to='/cart'>Terminar compra</Link>
                        : <ItemCount initial ={1} stock = {15} onAdd = {onAdd}/>
                        }
                    </div>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center ">
                <Link className="btn-ver" to="/">Volver al catálogo</Link>
            </div>
        </div>
    )
}