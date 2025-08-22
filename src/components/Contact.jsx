import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ed856f0b-c039-4967-8f42-e73a8b4b269f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section className="contact-sec" id="contactSec">
            <div className="contact-text">
                <h3>Contact <span>Me</span></h3>
                <p>
                    Feel free to <strong>contact me</strong> anytime! Whether you have a project idea, a collaboration in mind, or just want to say hello, I’m always open to new opportunities and conversations.
                </p>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <ul>
                        <li><span className='primery-span'>Address _ </span><span>House No. 618, 36G Landhi, Karachi, Pakistan</span></li>
                        <li><span className='primery-span'>Phone _ </span><span>+92 327 2705855</span></li>
                        <li><span className='primery-span'>E mail _ </span><span>abdulaziztahir2397@gmail.com</span></li>
                        <li><span className='primery-span'>Website _ </span><span>www.abc.xyz.com</span></li>
                    </ul>
                </div>
                <form className="contact-form" onSubmit={onSubmit}>
                    <input type="hidden" name="access_key" value="ed856f0b-c039-4967-8f42-e73a8b4b269f"></input>

                    <input type="text" name="name" required placeholder='Name' />
                    <input type="email" name="email" required placeholder='E-mail' />
                    <textarea name="message" required placeholder='Message'></textarea>
                    <button className='contact-btn' id='sendMsgBtn' type='submit'><a>Send Message</a></button>
                    <span>{result}</span>
                </form>
            </div>
        </section>
    )
}

export default Contact