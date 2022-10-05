import '../ItemListContainer/ItemListContainer.css';

export const ItemListContainer = ({greeting, title}) => {
    return (
        <div className="contenedorProductos d-flex col-12 justify-content-center pt-5">
            {greeting} - {title}
        </div>
    )
}