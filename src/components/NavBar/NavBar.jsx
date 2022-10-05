import '../NavBar/NavBar.css';
import logo from '../../assets/logo.png'
import {CartWidget} from '../CartWidget/CartWidget';

export const NavBar = () => {
    
    return(
        <>
        <div className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid justify-content-between">
                <div>
                <img className="nav-logo" src={logo} alt="logo" />
                </div>
                <div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#top">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Replicas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Alquileres</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                   <CartWidget/>
                </div>
            </div>
        </div>
    </>
    )
}

