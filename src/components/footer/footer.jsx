import { Icon } from "@iconify/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/sass//style.scss";
function Footer(params) {
  const [values, setValues] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!values.email) {
      newErrors.email = "L'adresse e-mail est requise";
    } else if (!isValidEmail(values.email)) {
      newErrors.email = "L'adresse e-mail n'est pas valide";
    } else {
      newErrors.email = "";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      console.log("Données valides :", values);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="single-footer-widget">
              <h4>Nos services</h4>
              <ul>
                <li>
                  <a href="#f">Fabrication Meubles</a>
                </li>
                <li>
                  <a href="#f">Aménagement des espaces</a>
                </li>
                <li>
                  <a href="#f">Motifs de décoration</a>
                </li>
                <li>
                  <a href="#f">Event</a>
                </li>
                <li>
                  <a href="#f">Education</a>
                </li>
                <li>
                  <a href="#f">Agri-market</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="single-footer-widget footer_icon">
              <h4>Coordonnées de contact</h4>
              <p>15 Avenue Mwela , Golf-karavia, Lubumbashi / 70091</p>
              <ul>
                <li>
                  <a href="#f">
                    <Icon icon="radix-icons:mobile" className="custom-icon" />
                    097 000 76 05
                  </a>
                </li>
                <li>
                  <a href="#f">
                    <Icon icon="typcn:mail" className="custom-icon" />{" "}
                    info@perfectgroupsas.com
                  </a>
                </li>
                <li>
                  <a href="#f">
                    <Icon icon="mdi:web" className="custom-icon" />{" "}
                    http://www.perfect-sarl.net
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="single-footer-widget footer_2">
              <h4>Newsletter</h4>
              <p>
                Restez à jour avec nos dernières tendances, découvrez le
                paradis, comme le dit l'endroit fruit.
              </p>
              <div className="form-wrap" id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="form-inline"
                >
                  <input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Your Email Address"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Your Email Address '"
                    required=""
                    type="email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                  <button className="btn text-uppercase" onClick={handleSubmit}>
                    <Icon icon="iconamoon:send-duotone" />
                  </button>
                  <div style={{ position: "absolute", left: "-5000px" }}>
                    <input
                      name="b_36c4fd991d266f23781ded980_aefe40901a"
                      tabindex="-1"
                      value=""
                      type="text"
                    />
                  </div>

                  <div className="info"></div>
                </form>
              </div>
              <div className="social_icon">
                <NavLink to="/">
                  {" "}
                  <Icon icon="basil:facebook-outline" />
                </NavLink>
                <NavLink to="/">
                  {" "}
                  <Icon icon="ri:twitter-line" />
                </NavLink>
                <NavLink to="/">
                  {" "}
                  <Icon icon="mdi:instagram" />
                </NavLink>
                <NavLink to="/">
                  {" "}
                  <Icon icon="ant-design:skype-outlined" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="copyright_part_text text-center">
              <p className="footer-text m-0">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="ti-heart" aria-hidden="true"></i> by{" "}
                <a
                  href="https://perfectsarl.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Baki Kyungu
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
