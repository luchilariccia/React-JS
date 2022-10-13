import '../CartWidget/CartWidget.css';
import carritoImg from '../../assets/107831.png'


export const CartWidget = () => {
    return(
        <div className='contenedor-icono'>
            <img className='col-1' src={carritoImg} alt="" />
            <span className="contadorCart">5</span>
        </div>
    )
}