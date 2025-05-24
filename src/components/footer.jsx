import React from "react";

function Footer () {
    return(
        <footer className="bg-dark text-white text-center p-3 mt-5">
            <p>&copy; {new Date().getFullYear()} Pro-Smile Dental Clinic. All rights reserved.</p>
        </footer>
    );
}
export default Footer;