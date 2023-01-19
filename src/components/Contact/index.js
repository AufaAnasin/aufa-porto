import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders';
import './index.scss';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jipcyk4', 'template_ytjppi8', form.current, 'u3avUpvjWP3kCXacd')
          .then((result) => {
              console.log(result.text);
              alert("Message Succesfully Send");
          }, (error) => {
              console.log(error.text);
              alert("Failed to Send Mesage, Please Try Again");
          });
          e.target.reset()
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact Me
                    </h1>
                    <p>
                    I am eager to take on a new opportunity as a Front-end Developer where I can utilize 
                    my skills and passion for creating visually appealing 
                    and user-friendly websites. Feel free to reach out to me for any Front-end Development projects or opportunities. You can contact me via email at anasinaufa@gmail.com 
                    or connect with me on LinkedIn at linkedin.com/in/aufaanasin.
                    </p>
                    <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type='email' name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required />
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value='Send' required />
                            </li>
                        </ul>
                    </form>
                </div>
                </div>
                <div className='info-map'>
                    Muhammad Aufa Anasin
                    <br /> 
                    Indonesia,
                    <br /> 
                    Kanayakan Street No. 29A, Bandung, West Java
                    <span>anasinaufa@gmail.com</span> 
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-6.879116, 107.618785]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[-6.879116, 107.618785]}>
                            <Popup>CR7 ever take a coffe here</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;