import {useEffect, useState} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import { arregloProductos } from '../../baseDatos/baseDatos';
import {useParams} from "react-router-dom";
import { ItemList } from '../ItemList/ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'




export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();

    useEffect(()=>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products')
        if(categoriaId){
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
            .then (res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
         } else{
            getDocs(queryCollection)
            .then (res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
        
    }, [categoriaId])
    

    return(
        <div className=''>
            <div className='text-center m-3'>
                <h1>Vehículos en alquiler</h1>
                <h4>Alquiler en base a una semana</h4>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
                <ItemList data={data}/>
            </div>
        </div>
    )
}