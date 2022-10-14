import { validateEmail } from '../../utils/helpers';
import React, { useState } from 'react';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }

        if (e.target.name === 'name') {

            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }

        }

        if (e.target.name === 'message') {

            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }

        }



        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        
    }

    return (

        <div>
            <div id='card-background' className='card mx-5 px-3 pt-2 pb-5'>
                <h1 className=''>Contact Me!</h1>
                <form id='contact-form' onSubmit={handleSubmit}>
                    <div className="form-group col-4">
                        <label htmlFor='name'>Name</label>
                        <input type='text' defaultValue={name} className='form-control' placeholder="Enter Your Name" onBlur={handleChange} name='name'></input>                      
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' defaultValue={email} className='form-control' placeholder='Enter Your Email' onBlur={handleChange}></input>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor='message'>Message:</label>
                        <textarea name='message' className="form-control form-control-lg" defaultValue={message} onBlur={handleChange}></textarea>
                        {errorMessage && (
                            <div>
                                <p className="error-text text-danger">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                    <button id='button' type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    );

}

export default Contact;