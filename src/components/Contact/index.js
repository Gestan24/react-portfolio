import { validateEmail } from '../../utils/helpers';
import React, { useState } from 'react';

function Contact() {

    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // const [errorMessage, setErrorMessage] = useState('');

    // const { name, email, message } = formState;

    // function handleChange(e) {

    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);

    //         // isValid conditional statement
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             if (!e.target.value.length) {
    //                 setErrorMessage(`${e.target.name} is required.`);
    //             } else {
    //                 setErrorMessage('');
    //             }
    //         }
    //     }

    //     if (e.target.name === 'name') {

    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }

    //     }

    //     if (e.target.name === 'message') {

    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }

    //     }



    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //     }

    // }

    // function handleSubmit(e) {
    //     e.preventDefault();

    // }

    return (

        <div>
            <div id='card-background' className='card mx-5 px-3 pt-2 pb-5'>
                <h1 className='mb-4'>Contact Me!</h1>

                <div>
                    <h2>Email:</h2>
                    <p>gestan.joshua@gmail.com</p>
                </div>

                <div>
                    <h2>Phone:</h2>
                    <p>414-517-9276</p>
                </div>

            </div>
        </div>
    );

}

export default Contact;