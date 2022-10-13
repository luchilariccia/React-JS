import React, {useState} from 'react';
import {Item} from '../Item/Item'

export const ItemList = ({data=[]})=>{ 
    return(
        data.map(elemento => <Item key={elemento.id} marca={elemento.marca} modelo={elemento.modelo}
            price={elemento.price} img={elemento.img} categoryName={elemento.categoria} info={elemento} />)
)
    }
