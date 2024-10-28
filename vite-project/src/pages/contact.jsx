/*
import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact Information</h1>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Main St, Anytown, USA</p>
        </div>
    );
};

export default Contact;
*/
import React, { useState } from 'react';

const Contact = () => {
    // State to manage form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission logic here
        console.log({ name, email, message });
        // Clear the form fields after submission (optional)
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='contactDiv'>
            <h1>Contact Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;