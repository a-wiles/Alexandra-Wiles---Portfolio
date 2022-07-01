import '../../App.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';


function Contact() {
  return (
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1 class="text-center">Contact Me!</h1>
          {/* <!-- contact form --> */}
          <form>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name">Your Name</label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="Please Enter Your Name Here"
              />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email">Your Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="Please Enter Email Here"
              />
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                class="form-control"
                id="subject"
                placeholder="Email Subject Line"
              />
            </div>

            <div class="form-group">
              <label for="email_body">Message</label>
              <textarea
                class="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="contac" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_b4qmiqc",
      "template_h9rzd14",
      form.current,
      "user_UHpNJFij8MtQD1aAfs38X"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("SUCCESS!");
      },
      (error) => {
        console.log(error.text);
        alert("FAILED...", error);
      }
    );
};

export default Contact;