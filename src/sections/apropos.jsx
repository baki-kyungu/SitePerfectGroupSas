import "../styles/sass/style.scss";
import photoStudio from "../images/about/wePerfect.JPG";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <section class="about_us padding_top padding_bottom">
        <div class="container">
          <div class="row align-items-center">
            {/* Image à gauche  */}
            <div class="col-lg-6">
              <div class="about_us_image">
                <img src={photoStudio} alt="apropos" />
              </div>
            </div>
            {/* Texte à droite */}
            <div class="col-lg-6">
              <div class="about_us_text">
                <h5>A propos de nous</h5>
                <h2>Ce que nous proposons.</h2>
                <p>
                  PERFECT Sarl est une société de droit congolais qui est
                  spécialisée dans le domaine de l'environnement et qui œuvre
                  dans le recyclage des déchets. Depuis sa création en 2018,
                  l'expertise de PERFECT est reconnue dans la construction des
                  meubles de luxe, durable et accessible à un prix abordable à
                  base des pneus usagés et bouteilles en plastiques.
                </p>

                <NavLink to="/services">
                  <button type="button" className="btn_2">
                    Lire plus
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
