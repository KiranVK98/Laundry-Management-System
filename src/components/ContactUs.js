import React from "react";

function ContactUs() {
    return (
        <section id ="ContactUs">
        <div class="container">  
            <form id="contact" action="https://formspree.io/f/moqyzjge" method="post" onsubmit="return ValidatingInputs()">
            <h3>Contact Form</h3>
            <h4>Something not feeling right? Please tell us about it!</h4>
            <fieldset>
                <input placeholder="Your Name" name="name" type="text" tabindex="1" required autofocus></input>
            </fieldset>
            <fieldset>
                <input placeholder="Your Email Address" name="_replyto" type="email" tabindex="2" required></input>
            </fieldset>
            <fieldset>
                <textarea id="message" placeholder="Type your message here...." tabindex="5" required name="message"></textarea>
            </fieldset>
            <fieldset>
                <button name="submit" type="submit" id="contact-submit">Submit</button>
            </fieldset>
            </form>
      </div>
        </section>  
    )
}

export default ContactUs;