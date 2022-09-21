import './index.scss'
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_m3iexx3',
                'template_yt4mskm',
                form.current,
                'E1OvrbASaSGISlNjW'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                },
                () => {
                    alert('Message failed to send, please try again!')
                }
            )

    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o','n','t','a','c','t', ' ', 'm', 'e']}
                            idx={13}
                        />
                    </h1>
                    <p>
                        I am interested in any freelance opportunities of any scale. Don't hesitate to contact me
                        using the form below with any questions or requests.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Name'
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder='Subject'
                                        type='text'
                                        name='subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact