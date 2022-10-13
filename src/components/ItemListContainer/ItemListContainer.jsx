import {useEffect, useState} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import { arregloProductos } from '../../baseDatos/baseDatos';
import {useParams} from "react-router-dom";
import { ItemList } from '../ItemList/ItemList';




export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();

    useEffect(()=>{
        const getData = new Promise(resolve=>{
            setTimeout(()=>{
                resolve(arregloProductos)
            },1000)
        });
        if(categoriaId){
            getData.then(res => setData(res.filter(vehiculo => vehiculo.categoria === categoriaId )));
        } else{
            getData.then(res => setData(res));
        }
        
    }, [categoriaId])
    

    return(
        <div className=''>
            <div className='text-center m-3'>
                <h1>Vehículos en venta</h1>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
                <ItemList data={data}/>
            </div>
        </div>
    )
}