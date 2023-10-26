import "../styles/sass/style.scss";

import blog1 from "../images/project/organic-food-farm.jpg";
import blog2 from "../images/project/market.jpg";
import blog3 from "../images/project/medium-shot-girl-posing-nature.jpg";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

function Project() {
  return (
    <div>
      <section class="pricing_part section_padding home_page_pricing">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section_tittle">
                <h2
                  className="section_subtitle text-center"
                  style={{ color: "#999999" }}
                >
                  Nos services
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-sm-6">
              <div class="single_pricing_part">
                <div class="pricing_tittle">
                  <img src={blog1} alt="" srcset="" />
                  <p>Green Perfect</p>
                </div>
                <div class="pricing_content">
                  <ul>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon>
                      Fabrication des meubles de luxe à base des pneus usagés &
                      bouteilles plastiques.{" "}
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon> Recyclage
                      et gestion ou transformation des déchets{" "}
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon> Aménagement
                      des espaces verts et paysage
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon>Green house
                    </li>
                  </ul>
                  <Link to="services" class="btn_2">
                    En savoir Plus
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="single_pricing_part">
                <div class="pricing_tittle">
                  <img src={blog2} alt="" srcset="" />
                  <p>Perfect agro-transformation</p>
                </div>
                <div class="pricing_content">
                  <ul>
                    <li>
                      {" "}
                      <ion-icon name="checkmark-outline"></ion-icon> Production
                      des jus naturels et vins riches avec les fruits et légumes
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon>{" "}
                      Commercialisation et distribution des produits
                      alimentaires
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon> Agri-tech
                    </li>
                  </ul>
                  <Link to="services" class="btn_2">
                    En savoir Plus
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="single_pricing_part">
                <div class="pricing_tittle">
                  <img src={blog3} alt="" srcset="" />
                  <p>Ecole et nature</p>
                </div>
                <div class="pricing_content">
                  <ul>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon> Encadrement
                      des élèves à la fabrication de meubles écologiques
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon> Information
                      et formation sur l'usage de bouteilles plastiques dans de
                      millieu scholaire et universitaire
                    </li>
                  </ul>

                  <Link to="services" class="btn_2">
                    En savoir Plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
