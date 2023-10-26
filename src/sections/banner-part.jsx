import "./../styles/sass/style.scss";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
function Bannerpart() {
  return (
    <div>
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-5">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <div className="banner_overlay"></div> <h5>Soignons, </h5>
                  <h1>
                    Votre <span>environnement</span>
                  </h1>
                  <p> en recyclant les déchets.</p>
                  <div className="container">
                    <NavLink to="/contact">
                      <button className="btn_2">
                        Nous contacter <Icon icon="bi:arrow-right-short" />
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bannerpart;
