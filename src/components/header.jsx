import React from "react";
import { Link } from "react-router-dom";

function Header () {
    return(
        <header className='bg-primary text-white p-3'>
            <div className='container d-flex justify-content-between'>
                <h1>Dental Clinic</h1>
                <nav>
                    <Link to="/" className='text-white mx-2'>Home</Link>
                    <Link to="/about" className='text-white mx-2'>About</Link>
                    <Link to="/services" className='text-white mx-2'>Services</Link>
                    <Link to="/contact" className='text-white mx-2'>Contact</Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;