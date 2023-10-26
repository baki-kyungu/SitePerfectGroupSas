import Header from "../components/header/header";
import { Footer } from "../components/footer/footer";
import "../styles/sass/style.scss";
// import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    message: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Effectuez la validation ici
    const newErrors = {};

    if (!values.name) {
      newErrors.name = "Le nom est requis";
    } else if (values.name.length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    } else {
      newErrors.name = "";
    }

    if (!values.email) {
      newErrors.email = "L'adresse e-mail est requise";
    } else if (!isValidEmail(values.email)) {
      newErrors.email = "L'adresse e-mail n'est pas valide";
    } else {
      newErrors.email = "";
    }

    if (!values.subject) {
      newErrors.subject = "L'Objet est requis";
    } else if (values.subject.length < 8) {
      newErrors.subject = "L'objet doit contenir au moins 8 caractères";
    } else {
      newErrors.subject = "";
    }

    if (!values.message) {
      newErrors.message = "Le message est requis";
    } else if (values.message.length < 16) {
      newErrors.message = "Le message doit contenir au moins 16 caractères";
    } else if (values.message.length > 324) {
      newErrors.message = "Le message ne doit pas dépasser 324 caractères";
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      // Les données du formulaire sont valides, vous pouvez les soumettre
      console.log("Données valides :", values);
    }
  };

  const isValidEmail = (email) => {
    // Mettez en place une validation d'e-mail ici, par exemple, avec une expression régulière
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="contact">
      <Header />

      <section
        class="container-fluid page-header"
        style={{ marginBottom: "90px" }}
      >
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <h3 class="display-4 text-white text-uppercase">Contact</h3>
            <div class="d-inline-flex text-white">
              <p class="m-0 text-uppercase">
                <NavLink className="text-white" to="/home">
                  Home
                </NavLink>
              </p>
              <i class="fa fa-angle-double-right pt-1 px-3"></i>
              <p class="m-0 text-uppercase">Contact</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact section */}
      <section className="contact-section section_padding">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4">
            {/* <div id="map" style={{ height: "480px" }}></div> */}
          </div>

          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Contactez-nous</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        name="name"
                        value={values.name}
                        id="name"
                        type="text"
                        onChange={handleChange}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "Votre nom")}
                        placeholder="Votre nom"
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        type="email"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "Votre email")}
                        placeholder="Votre email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                      />

                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className={`form-control ${
                          errors.subject ? "is-invalid" : ""
                        }`}
                        name="subject"
                        id="subject"
                        type="text"
                        value={values.subject}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "Sujet")}
                        placeholder="Objet"
                      />
                      {errors.subject && (
                        <div className="invalid-feedback">{errors.subject}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className={`form-control ${
                          errors.message
                            ? "is-invalid"
                            : values.message.length >= 16 &&
                              values.message.length <= 324
                            ? "is-valid"
                            : ""
                        }`}
                        name="message"
                        value={values.message}
                        id="message"
                        cols="30"
                        rows="9"
                        onChange={handleChange}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "Message")}
                        placeholder="Message"
                      ></textarea>

                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button-contactForm btn_2"
                    onClick={handleSubmit}
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <ion-icon name="location-outline"></ion-icon>
                </span>
                <div className="media-body">
                  <h3>Golf-karavia, Lubumbashi.</h3>
                  <p>Mwela, 15</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <ion-icon name="call-outline"></ion-icon>
                </span>
                <div className="media-body">
                  <h3>+243 970 007 605</h3>
                  <p>Lun au Sam 8am to 7pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <ion-icon name="mail-outline"></ion-icon>
                </span>
                <div className="media-body">
                  <h3>info@perfect.com</h3>
                  <p>Envoyez-nous votre demande à tout moment!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
