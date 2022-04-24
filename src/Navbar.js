import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" state={"Test"}>The Curious Plate</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <span className="navbar-text">
                        <Link to="/" className="nav-link active" >Home</Link>
                    </span>
                    <span className="navbar-text">
                        <Link to="/about" className="nav-link" >About</Link>
                    </span>
                    <span className="navbar-text">
                        <Link to="/ingredients" className="nav-link" >Ingredients</Link>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;