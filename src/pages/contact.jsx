
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
        if (!name || !email || !message) {
            alert('Please fill out all fields');
            return;
        }
        if (!email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }
        if (message.length < 10) {
            alert('Message should be at least 10 characters long');
            return;
        }
        console.log({ name, email, message });
        // Clear the form fields after submission (optional)
        setName('');
        setEmail('');
        setMessage('');
        if (name && email && message) {
            alert('Message sent successfully');
        }
    };

    return (
        <div className='contactDiv'>
            <h1>Contact Me</h1>
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