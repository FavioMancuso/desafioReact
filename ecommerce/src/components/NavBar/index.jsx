import React from 'react';
import {Link} from 'react-router-dom';
import {FaApple} from 'react-icons/fa'
import CartWidget from '../CartWidget';
import './styles.css';

const NavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#ebebeb"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand align-contents-center mx-2" to="#">YourPhone<FaApple className='fs-4 mb-2'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto d-flex align-items-center">
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="/category/iphone">iPhone</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="/category/mcbook">MacBook</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="/category/ipad">iPad</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="/category/apple watch">Apple Watch</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="/category/airpods">Airpods</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="/category/accessories">Accessories</Link>
                        </li>
                    </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </div>
        
    )
}

export default NavBar