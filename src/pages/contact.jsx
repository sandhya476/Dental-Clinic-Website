import React, { useState } from "react";
import axios from 'axios';

function Contact () {
    //state to store form data
    const [formData, setFormData]=useState({
        name : '',
        email : '',
        subject : '',
        message : ''
    });

    //track input changes
    const handlechange=(e) =>{
        const {name, value} =e.target;
        setFormData(prev => ({...prev, [name]: value }));
    };

    //handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Form Submitted :',formData);

    //simulated API call
    try {
        await axios.post('https://example.com/api/contact',formData); //placeholder
        alert('Message Sent..!');
    }
    catch (error){
        console.error('Sending Failed..',error);
    }

    //reset form
    setFormData({name :'', email :'', subject :'', message :''});
};

return (
    <div className="container mt-5"><br></br>
        <h2> Contact Us</h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name : </label>
            <input type="text" name="name" className="form-control" value={formData.name} onchange={handlechange} required minLength={2}/>
          </div>
          <div className="mb-3">
            <label>Email : </label>
            <input type="email" name="email" className="form-control" value={formData.email} onchange={handlechange} required/>
          </div>
          <div className="mb-3">
            <label>Subject : </label>
            <input type="text" name="subject" className="form-control" value={formData.subject} onchange={handlechange} required/>
          </div>
          <div className="mb-3">
            <label>Message : </label>
            <textarea name="message" className="form-control" rows="4" value={formData.message} onchange={handlechange} required minLength={10}></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>

        {/* Contact Details*/}
        <div className="mt-4"><br></br>
            <h3> Contact Info </h3>
            <p>Phone : (123) 456-7890</p>
            <p>Email : pro-smiledentalclinic@gmail.com</p>
            <p>Address : 123 Dental Street, Smile City</p>
        </div>

        {/* Goolge Maps */}
        <div className="mt-4"><br></br>
            <iframe
                title = 'Clinic Location'
                src = 'https://www.google.com/maps/embed?pb=...'
                width = '100%'
                height = '300'
                style = {{border : 0}}
                allowFullScreen = ''
                loading="lazy">
            </iframe>
        </div>
    </div>
);
}
export default Contact;