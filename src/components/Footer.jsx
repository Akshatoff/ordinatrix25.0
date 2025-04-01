import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="query">
          <h1 className="text" id="foot-head">
            Have Any Queries ?
          </h1>
          <h2 className="text" id="contact">
            Contact Us
          </h2>
          <p className="email">pyrotech@tagoreint.com</p>
          <h2 className="text" id="teacher">
            Teachers-Incharge
          </h2>
          <p className="mmaam">Ms. Meenakshi Tickoo:- 9891494471</p>
          <p className="smaam">Ms. Shilpreet Kaur:- 9910309773</p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.6285388025117!2d77.16143276768526!3d28.569294332070374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1da64b31037f%3A0x9fe8114b5940d45c!2sTagore%20International%20School!5e0!3m2!1sen!2sin!4v1743493364513!5m2!1sen!2sin"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="hi">
          <h1 className="text" id="h-head">
            Say Hi!
          </h1>
          <p className="pyro">Team Pyrotech</p>
          <p className="tis">Tagore International Scool</p>
          <p className="vv">Vasant Vihar</p>

          <p className="mpyro">Made by the Pyrotech Club</p>
        </div>
      </div>
    </>
  );
}
