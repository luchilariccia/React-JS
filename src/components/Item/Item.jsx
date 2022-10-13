import {Link} from "react-router-dom";
import "../Item/Item.css"
export const Item = ({info})=>{
        return(
        <div className="d-flex flex-wrap text-center justify-content-center">
            <div className="card-producto p-2 m-3">
                <div className="col-12">
                    <h3 className="">{info.marca} {info.modelo}</h3>
                </div>
                <img className="col-10 img-auto" src={info.img} alt="" />
                <h5>{info.price}</h5>
                <div className="col-12">
                    <Link to={`/detalles/${info.id}`}>
                        <button className='boton-ver '>Ver Detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}