import "../contact/contact.css";
import emailjs from "@emailjs/browser";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8qxfmit",
        "template_f7z69ch",
        formRef.current,
        "im328tf-Z4Clcib4P"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h2 className="c-title">Kontakt</h2>
          <div>Zadzwoń lub napisz do mnie</div>
          <div className="c-info">
            <div className="c-info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="icons-contact"
                viewBox="0 0 16 16"
              >
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
              </svg>
              +48 514-524-348
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="icons-contact"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              Lokalizacja : Warszawa (wesoła)
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc"></p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Imię lub nazwa firmy"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Tytuł"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Treść"
              name="message"
            />
            <button>Wyślij</button>
            {done && "Dziękuje za wiadomość!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
