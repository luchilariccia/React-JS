import {Link} from "react-router-dom";
import "../Item/Item.css"
export const Item = ({info})=>{
        return(
        <div className="d-flex flex-wrap text-center justify-content-center">
            <div className="card-producto p-2 m-4">
                <div className="col-12 pb-3">
                    <h3 className="">{info.marca} {info.modelo}</h3>
                </div>
                <img className="col-10 img-auto m-2" src={info.img} alt="" />
                <h5 className="m-3 price">{info.price} U$D</h5>
                <div className="col-12 my-3">
                    <Link to={`/detalles/${info.id}`}>
                        <button className='boton-ver px-4 py-1'>Ver Detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}