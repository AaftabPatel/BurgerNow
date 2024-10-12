import React from 'react';

const Contact = () => {
    return(
        <div className="contactUs" id="contact">
            <div className="contactForm">
                <h2>Get in Touch</h2>
                <form>
                	<div className="input-group">
                        <input type="text" id="name" placeholder="Enter your Name" />
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" placeholder="Enter your number" />
                    </div>
                    <div className="input-group">
                        <textarea required  placeholder="Enter your Query"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;