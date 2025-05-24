import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home (){
    return (
        <div>
            {/*Banner*/}
            <section className="text-black text-center mt-5 fade-in"><br></br>
                <h1 className="disply-4"> Welcome to Pro-Smile Dental Clinic </h1>
                <b><p className="lead"> Creating Dazzling Smiles... </p></b>
                <div className="container my-4 text-center">
                    <img src="/images/image1.png"
                        alt="Dental Clinic Hero"
                        className="img-fluid rounded shadow"
                        style={{maxHeight : '380px', maxWidth : '1500%'}}
                    />
                </div>
                <Link to='contact'>
                    <button className="btn btn-primary mt-3"> Book Appointment</button>
                </Link>

                {/*Introduction*/}
                <section className="container mt-5">
                    <center> <h2> <u>About Our Clinic </u></h2> </center> <br></br>
                        <p> <i>To be a leading Pro-Smile Dental Clinic<br></br> 
                                        committed to providing exceptional
                                           oral healthcare services,  
                                         creating beautiful smiles,  
                                          and improving the overall  
                                         well-being of our patients.<br></br> 
                                         Come experience dental care 
                                         that puts your smile first — 
                                         because every smile deserves to shine.</i> </p>
                </section>

                {/*Overview of Services*/}
                <section className="container mt-5">
                <u><h2> Our Services </h2></u><br></br>
                    <div className="row g-4">
                        {[
                            {title : "Teeth Whiting"},
                            {title : "Dental Implants"},
                            {title : "Root Canal Therapy"},
                            {title : "Braces & Aligners"},
                            {title : "Cosmetic Dentistry"},
                            {title : "Pediatric Dentistry"}
                        ].map((service,index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card h-100  shadow-sm">
                                    <div className="card-body text-center">
                                        <h5 className="card title"> {service.title} </h5>
                                        <p className="card-text"> </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action*/}
                <section className="text-center my-5 slide-in">
                <h3>Ready to Transform Your Smile..?</h3>
                <Link to="/contact">
                    <button className="btn btn-primary mt-3">Schedule An Appointment</button>
                </Link>
                </section>
                <img src="/images/smile.png" alt="smile" className="img-fluid rounded shadow"></img>
            </section>
        </div>
    );
}
export default Home;