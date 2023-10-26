import Header from "../components/header/header";
import { Footer } from "../components/footer/footer";
import "../styles/sass/style.scss";
import imgValue1 from "../images/values/achievements_8912681.png";
import imgValue2 from "../images/values/idea_1253804.png";
import imgValue3 from "../images/values/pin_745178.png";
import { NavLink } from "react-router-dom";

function Aboutus() {
  return (
    <div className="aboutus">
      <Header />

      <section
        class="container-fluid page-header-about"
        style={{ marginBottom: "90px" }}
      >
        <div class="container">
          <div
            class="d-flex flex-column justify-content-center"
            style={{ minHeight: "400px" }}
          >
            <h3 class="display-4 text-white text-uppercase">
              A Propos de perfect
            </h3>
            <div class="d-inline-flex text-white">
              <p class="m-0 text-uppercase">
                <NavLink className="text-white" to="/home">
                  Home
                </NavLink>
              </p>
              <i class="fa fa-angle-double-right pt-1 px-3"></i>
              <p class="m-0 text-uppercase">A propos</p>
            </div>
          </div>
        </div>
      </section>
      <div class="container" style={{ marginTop: "180px" }}>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about_us_image">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OGor7tzQ4-A?si=F181eFeNCMTlf4jt"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          {/* Texte à droite */}
          <div class="col-lg-6" style={{ marginBottom: "50px" }}>
            <div class="about_us_text">
              <h2 style={{ marginBottom: "30px", color: "#646464" }}>
                Qui sommes-nous
              </h2>
              <p>
                PERFECT GROUP SAS est une société de droit congolais créée en
                2019 et spécialisée dans le domaine de l'environnement. PERFECT
                propose des projets innovants et écologiques afin de contribuer
                au développement socioéconomique de la région. Nous développons
                des solutions technologiques innovantes pour la
                commercialisation de nos produits sur le marché et la gestion.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid perfect-today">
        <h1 className="text-center mb-4 service-title">Perfect Group SAS</h1>

        <div class="row1">
          <div className="container">
            <div className="row align-items-center">
              <div class="col-lg-3 col-sm-6">
                <div class="m-flex">
                  <h1>2</h1>
                  <h5>Usine Goma et lubumbashi</h5>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="m-flex">
                  <h1>+200</h1>
                  <h5>Employés</h5>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 ">
                <div class="m-flex">
                  <h1>30%</h1>
                  <h5>Femmes</h5>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 d-flex align-items-center">
                <div class="m-flex">
                  <h1>5</h1>
                  <h5>Services</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container obect-container">
        <h1 className="text-center mb-5 obj-title">Nos Valeurs</h1>

        <div className="container mt-5 mb-5">
          <div className="row align-items-center">
            <div class="col-lg-4 col-sm-6">
              <div class="flex-container">
                <div className="flex-img">
                  <img src={imgValue1} alt="" srcset="" />
                </div>
                <div class="" style={{ marginBottom: "40px" }}>
                  <h4>1. Excellence et la confiance </h4>
                  <p style={{ color: "black" }}>
                    Nous poursuivons l'excellence dans tout ce que nous faisons,
                    tout en bâtissant des relations solides basées sur la
                    confiance.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="flex-container">
                <div className="flex-img">
                  <img src={imgValue2} alt="" srcset="" />
                </div>
                <div class="" style={{ marginBottom: "40px" }}>
                  <h4>2. Innovation et la perfection </h4>
                  <p style={{ color: "black" }}>
                    Nous poursuivons l'excellence dans tout ce que nous faisons,
                    tout en bâtissant des relations solides basées sur la
                    confiance.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-sm-6">
              <div class="flex-container">
                <div className="flex-img">
                  <img src={imgValue3} alt="" srcset="" />
                </div>
                <div class="" style={{ marginBottom: "40px" }}>
                  <h4>3. Intégrité et l'honnêteté.</h4>
                  <p style={{ color: "black" }}>
                    Nous poursuivons l'excellence dans tout ce que nous faisons,
                    tout en bâtissant des relations solides basées sur la
                    confiance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mission-container mt-5 align-items-center">
        <h1 className="text-center">Notre Mission</h1>
        <div className="col-lg-3 col-sm-6 mx-auto">
          <p
            className="text-center mission-detail-sub-title"
            style={{ color: "black" }}
          >
            Une entreprise prospère et capable de contribuer au développement
            économique de la République Démocratique du Congo
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Aboutus;
