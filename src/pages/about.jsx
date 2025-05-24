import React from 'react';

function About () {
    return (
        <div className='container mt-5'><br></br>
            
            <center><h2><u>About Our Clinic </u></h2></center><br></br>
            <p> <i><strong>Welcome to Pro-Smile Dental Clinic..!</strong> We are a "state-of-the-art" dental
                clinic providing top-quality care to our patients. Our team is
                dedicated to making your visit comfortable, and we offer a range of
                services to meet your needs. At Pro-Smile Dental Clinic, we are committed to delivering exceptional 
                dental care with compassion, precision, and a patient-first approach. Our mission is to help individuals
                 and families achieve and maintain healthy, beautiful smiles in a comfortable and welcoming environment.<br></br>
                 Come experience dental care that puts your smile first — <strong>because every smile deserves to shine.</strong></i></p>
            <div className="row">
                <div className="col-md-4">
                    <img
                        src="/images/intro.png"
                        alt="Clinic1"
                        className="img-fluid rounded shadow slide-in"
                        style={{maxHeight : '300px'}}
                    />
                </div>
                <div className="col-md-4">
                    <img
                        src="/images/intro5.png"
                        alt="Clinic2"
                        className="img-fluid rounded shadow slide-in"
                    />
                </div>
                <div className="col-md-4">
                    <img
                        src="/images/intro3.png"
                        alt="Clinic3"
                        className="img-fluid rounded shadow slide-in"
                    />
                </div>
            </div>
            <br></br><br></br>

            <center><h3><u> Our Teams </u></h3><br></br>
            <p><i>Led by Dr. John Doe, our clinic offers a compassionate team of
                professionals committed to providing the highest level of dental care. 
                With a team of highly skilled dentists and advanced technology, we offer
                 a comprehensive range of services — from preventive care and cosmetic treatments
                  to restorative procedures and pediatric dentistry. Each treatment is tailored to 
                  meet the unique needs of our patients.</i></p></center>
                    Here is a breakdown of the main roles... 
            <ul>      
                <i><li> Dentist </li>
                <li> Dental Hygienist </li>
                <li> Dental Assistant </li>
                <li> Receptionist/Office Manager </li>
                <li> Dental Lab Technician </li>
                <li> Sterilization Technician </li></i>
            </ul>
            
            <center><u><h3> Our Mission </h3></u></center><br></br>
            <p> <i>Our mission at Pro-Smile Dental Clinic is to provide high-quality, affordable dental care
                    that enhances the health, confidence, and well-being of our patients.<br></br>
                    We are dedicated to:<br></br>
                        <ul>
                            <li>Creating a comfortable and caring environment for patients of all ages.</li><br></br>
                            <li>Delivering personalized dental solutions using advanced technology.</li><br></br>
                            <li>Promoting lifelong oral health through education and preventive care.</li><br></br>
                            <li>Building trust through integrity, transparency, and exceptional service.</li>
                        </ul><br></br>
                         We strive to make every visit a positive experience and every smile a reflection of our commitment to excellence.</i> </p>
        </div>
    );
}
export default About;