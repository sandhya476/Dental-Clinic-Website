import React from "react";

function Services () {
    const Services =[
        { title : 'Teeth Whitening',
          image: "/images/services/whitening.jpg",
          description : <p><strong>Brighten your smile with professional whitening.</strong><br></br>
                         <i>Teeth whitening refers to a variety of processes that 
                         aim to make someone’s natural teeth appear brighter and whiter. 
                         Teeth whitening methods include sanding down stains, bleaching, 
                         ultraviolet (UV) light therapy, and more.</i></p>
        },
        {  title : 'Dental Implants',
           image: "/images/services/dentalimplant.jpg",
           description : <p><strong>Permanent replacements for missing teeth.</strong><br></br>
                            <i>A Dental Implant (or teeth implant) is a titanium 
                            post or screw which is surgically inserted into the 
                            jawbone beneath the gum line to work as a tooth root. 
                            Post insertion, an implantologist will attach a crown 
                            on top of the Implant to ensure the appearance of a natural tooth.</i></p>
        },
        {  title : 'Root Canal Therapy',
           image: "/images/services/root.jpg",
           description : <p><strong>Save your tooth with pain-free root canal therapy.</strong><br></br>
                            <i>A root canal is treatment for infections in tooth pulp, 
                                the innermost layer of your teeth.Typically, root canals 
                                are painless treatments. You can avoid needing a root canal
                                 by brushing your teeth after meals, flossing daily and having 
                                 regular dental checkups.</i></p>
        },
        {  title : 'Braces & Aligners',
           image: "/images/services/braces.jpg",
           description :<p><strong>Correct misaligned teeth with braces and aligners.</strong><br></br>
                            <i>Dental braces are a type of material widely using in orthodontic
                             treatment to align and straighten teeth, and improve overall dental health.
                              They consist of metallic wires, clips, or bands affixed to the teeth's surface,
                               providing corrective action to address misaligned teeth, gaps, jaw alignment.</i></p>
        },
        {  title : 'Cosmetic Dentistry',
           image: "/images/services/cosmetic.jpg",
           description :<p><strong>Enhance your smile with aesthetic treatments.</strong><br></br>
                            <i>Cosmetic dentistry is dental care that improves the 
                                  appearance of your teeth and smile. A cosmetic dentist 
                                  can whiten your teeth, straighten them, or improve their shape.
                                   They can also replace missing teeth and repair chips.</i></p>
        }, 
        {  title : 'Pediatric Dentistry',
           image: "/images/services/pediatric.jpg",
           description :<p><strong>Specialized care for children and teens.</strong><br></br>
                            <i>A pediatric dentist, often known as a Pedodontist,
                                 is a dentist who works with children from birth 
                                 until adulthood. Pediatric dentistry definition 
                                 involves one of the nine different types of dental speciality. 
                                 Dentists in this discipline offer a variety of services.</i></p>
        }
    ];
    return (
        <div className="container mt-5"><br></br>
            <u><h2 className="text-center mb-4"> Our Services </h2></u>
            <center> <h1> <i> Your Smile, Our Priority... </i> </h1> </center><br></br>
            <div className="row g-4">
                {Services.map((service,index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100 text-center shadow-sm border-0">
                            <div className="card-body">
                                <img src={service.image} alt={service.title} className="img-fluid mb-3 rounded" style={{height:"150px", objectFit:"cover"}}/>                           
                                <h5 className="card title"> {service.title} </h5>
                                <p className="card-text"> {service.description} </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Services;