import React,{useEffect, useState}  from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { arregloProductos } from "../../baseDatos/baseDatos";
import honda from '../../assets/productos/honda.jpg';

const auto = {
    id : 1,
    marca: "Honda",
    modelo: "Civic",
    año: "2015",
    price: "23000 U$D",
    img : honda,
    categoria: "auto",
    descripcion: "Vehículo para 5 pasajeros, con 5 puertas. Posee una potencia de 178CV y acelera de 0-100Km/h en cuestión de 4,5 Seg"
}

export const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(()=>{
        const getData = new Promise(resolve=>{
            setTimeout(()=>{
                resolve(auto)
            },1000)
        });
        getData.then(res => setData(res));
        
    }, [])

    return(
        <ItemDetail data={data} />
    )
}