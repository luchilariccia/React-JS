import '../CartWidget/CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
    return(
        <div className='contenedor-icono'>
            <FontAwesomeIcon icon={faCoffee} className="iconoCart"/>
            <span className="contadorCart">5</span>
        </div>
    )
}