import {ItemDetail} from '../ItemDetail/ItemDetail'

export const ItemDetailList = ({data=[]})=>{ 
    return(
        data.map(elemento => <ItemDetail key={elemento.id} marca={elemento.marca} modelo={elemento.modelo}
            price={elemento.price} img={elemento.img} categoryName={elemento.categoria} info={elemento} />)
)
    }