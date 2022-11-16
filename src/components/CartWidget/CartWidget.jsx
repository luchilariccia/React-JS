import '../CartWidget/CartWidget.css';
import carritoImg from '../../assets/107831.png'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';


export const CartWidget = () => {
const { cart } = useCartContext();

    return(
        <div className='d-flex align-items-center m-2'>
            <Link to='/Cart'><img className='col-1 carrito' src={carritoImg} alt="" /></Link>
            <span className='p-2' > {cart.length} </span>    
        </div>
    )
}