import React from 'react';
import "../css/footer.css"


export default function Footer() {
    return (
        <div className="container footer-container my-2">
            <div className="d-flex justify-content-between align-content-center">
                <p>Created by <a href="http://rajivhudeksportfolio.com/">Rajiv Hudek</a></p>
                <a href="https://www.linkedin.com/in/raj-hudek-026b051b1/">Linkedin</a>
                <a href="https://angel.co/u/rajiv-hudek">AngelList</a>
                <div className="footer-image d-flex justify-content-center align-items-center">
                    <i className="devicon-postgresql-plain colored"></i>
                    <i className="devicon-express-original colored"></i>
                    <i className="devicon-react-original colored"></i>
                    <i className="devicon-nodejs-plain colored"></i>
                </div>
            </div>
            

        </div>
    )
}
