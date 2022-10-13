import { Link } from "react-router-dom"

export const ItemDetail = ({data}) => {
    return(
        <div>
            <div className="text-center">
                <h1 >{data.marca} {data.modelo}</h1>
                <img src={data.img} alt="" />
                <h4>{data.price} </h4>
                <p>{data.descripcion}</p>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <Link to="/"> <button>Volver al catálogo</button> </Link>
            </div>
        </div>
    )
}