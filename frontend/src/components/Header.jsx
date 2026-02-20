import React from "react";

function Header(){
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">RS Technologies</a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                            
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item pe-5">
                                    <a className="nav-link text-uppercase me-5 active" href="#">Home</a>
                                </li>
                                <li className="nav-item pe-5">
                                    <a className="nav-link text-uppercase me-5" href="#">About</a>
                                </li>
                                <li className="nav-item pe-5">
                                    <a className="nav-link text-uppercase me-5" href="#">Courses</a>
                                </li>
                                <li className="nav-item pe-5">
                                    <a className="nav-link text-uppercase me-5" href="#">Services</a>
                                </li>
                                <li className="nav-item pe-5">
                                    <a className="nav-link text-uppercase me-5" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-light rounded-pill text-black" href="#">Login/Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </nav>
            </header>            
        </>
    )
}

export default Header;