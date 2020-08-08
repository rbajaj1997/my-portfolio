import React from 'react'

export default function Contact() {
    return (
        <section className="contact-container">
            <div className="contact__form">
                <h2 className="heading-secondary">
                    Get in touch!
                </h2>
                <form action="https://formspree.io/xlegnepg" className="form" method="POST">
                    <div className="contact__form--group">
                        <label for="name">Your Name: </label>
                        <input type="text" name="name" required />
                    </div>

                    <div className="contact__form--group">
                        <label for="email">Your E-mail: </label>
                        <input type="email" name="_replyto" required />
                    </div>

                    <div className="contact__form--group">
                        <label for="Message">Your message: </label>
                        <textarea rows="4" name="message"> </textarea>
                    </div>
                    <div className="contact__form--group">
                        <button type="submit" className="submit-button">
                            Send
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
            </div>

            <div className="tired">
                <h2 className="heading-tertiary">
                    Already filled too many forms lately? <span role="img" aria-label="tired-emoji">😴</span>
                </h2>
                <h2 className="heading-tertiary">
                    Feel free to reach me at:
                </h2>
            </div>

        </section>
    );
}