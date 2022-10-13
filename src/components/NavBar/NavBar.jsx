import '../NavBar/NavBar.css';
import logo from '../../assets/logo.png'
import {CartWidget} from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    
    return(
        <>
        <div className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark d-flex">
            <div className="container-fluid justify-content-beewtwen">
                <div>
                <Link to="/"> <img className="nav-logo" src={logo} alt="logo"/> </Link>
                </div>
                <div>
                    <Link className='m-2' to="/">Inicio</Link>
                    <NavLink className='m-2' to="/item/auto">Automóviles</NavLink>
                    <NavLink className='m-2' to="/item/camioneta">Camionetas</NavLink>
                    
                </div>
                <div className=''>
                   <CartWidget/>
                </div>
            </div>
        </div>
    </>
    )
}

