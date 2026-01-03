import React, { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
    const [status, setStatus] = useState({
        message: '',
        type: '' // success | error | loading
    })

    const onSubmit = async (event) => {
        event.preventDefault()
        setStatus({ message: 'Sending message...', type: 'loading' })

        const formData = new FormData(event.target)
        formData.append('access_key', 'ed856f0b-c039-4967-8f42-e73a8b4b269f')

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })

            const data = await response.json()

            if (data.success) {
                setStatus({
                    message: 'Your message has been sent successfully.',
                    type: 'success'
                })
                event.target.reset()
            } else {
                setStatus({
                    message: data.message || 'Something went wrong. Please try again.',
                    type: 'error'
                })
            }
        } catch (error) {
            console.error('Submission Error:', error)
            setStatus({
                message: 'Network error. Please check your internet connection.',
                type: 'error'
            })
        }
    }

    return (
        <section className="contact-sec" id="contactSec">
            <div className="contact-text">
                <h3>Contact <span>Me</span></h3>
                <p>
                    Feel free to contact me anytime. Whether you have a project idea,
                    collaboration, or just want to say hello, I am always open to discussion.
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <ul>
                        <li><span className="primery-span">Address _ </span>House No. 618, 36G Landhi, Karachi, Pakistan</li>
                        <li><span className="primery-span">Phone _ </span>+92 327 2705855</li>
                        <li><span className="primery-span">Email _ </span>abdulaziztahir2397@gmail.com</li>
                        <li>
                            <span className="primery-span">Website _ </span>
                            <a href="https://abdulaziz-tahir.netlify.app" target="_blank" rel="noreferrer">
                                abdulaziz-tahir.netlify.app
                            </a>
                        </li>
                    </ul>
                </div>

                <form className="contact-form" onSubmit={onSubmit}>
                    <input type="text" name="name" required placeholder="Name" />
                    <input type="email" name="email" required placeholder="E-mail" />
                    <textarea name="message" required placeholder="Message"></textarea>

                    <button
                        className="contact-btn"
                        type="submit"
                        disabled={status.type === 'loading'}
                    >
                        {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status.message && (
                        <p className={`form-status ${status.type}`}>
                            {status.message}
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Contact
