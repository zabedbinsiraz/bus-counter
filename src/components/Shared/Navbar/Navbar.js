import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const logoStyle = {
    height: '30px',
    width: '30%'
}

const Navbar = () => {

   
    const loggedInData = useSelector((state) => state.busReducers.userInfo);
    const logedInUserMail = loggedInData[0];

    
    return (


        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><h1>Bus-Counter</h1></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-2">
                            <Link to="/home" className="nav-link active " aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link to="/about" className="nav-link active " aria-current="page">About</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link to="/service" className="nav-link active " aria-current="page">Service</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link to="/blog" className="nav-link active " aria-current="page">Blog</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link to="/order" className="nav-link active " aria-current="page">Order</Link>
                        </li>
                        <li className="nav-item me-2">
                            {
                                logedInUserMail ?
                                    <a href="/home" classNameName="nav-button text-light d-block">Logout</a>
                                    : <Link to="/login"><button classNameName="nav-button">Login</button></Link>

                            }

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;