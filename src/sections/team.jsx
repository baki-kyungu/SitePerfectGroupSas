import { Link } from "react-router-dom";
import member2 from "../images/team/team-copy.JPG";
import member4 from "../images/team/team-4.JPG";

function Team() {
  return (
    <div class="container-fluid py-5">
      <div class="container pt-5 pb-3">
        <div class="text-center mb-5">
          <h5 class="text-uppercase mb-3" style={{ letterSpacing: "5px" }}>
            Equipe
          </h5>
          <h1 style={{ color: "#999999" }}>
            Rencontrer les membres de notre équipe
          </h1>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3 text-center team mb-4">
            <div class="team-item rounded overflow-hidden mb-2">
              <div class="team-img position-relative">
                <img className="img-fluid" src={member2} alt="" srcset="" />
                <div class="team-social">
                  <Link
                    className="btn btn-outline-light btn-square mx-1"
                    to="#"
                  >
                    <i class="fab fa-twitter"></i>
                  </Link>
                  <Link
                    className="btn btn-outline-light btn-square mx-1"
                    to="#"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    className="btn btn-outline-light btn-square mx-1"
                    to="#"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
              <div class="bg-secondary p-4">
                <h5>M. Elie Bigabwa</h5>
                <p class="m-0">L'administration et finances</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 text-center team mb-4">
            <div class="team-item rounded overflow-hidden mb-2">
              <div class="team-img position-relative">
                <img className="img-fluid" src={member2} alt="" srcset="" />
                <div class="team-social">
                  <Link class="btn btn-outline-light btn-square mx-1" to="#">
                    <i class="fab fa-twitter"></i>
                  </Link>
                  <Link class="btn btn-outline-light btn-square mx-1" to="#">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                  <Link class="btn btn-outline-light btn-square mx-1" to="#">
                    <i class="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
              <div class="bg-secondary p-4">
                <h5>Elie bigabwa</h5>
                <p class="m-0">Directeur général</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 text-center team mb-4">
            <div class="team-item rounded overflow-hidden mb-2">
              <div class="team-img position-relative">
                <img className="img-fluid" src={member2} alt="" srcset="" />
                <div class="team-social">
                  <Link class="btn btn-outline-light btn-square mx-1" to="#">
                    <i class="fab fa-twitter"></i>
                  </Link>
                  <Link class="btn btn-outline-light btn-square mx-1" to="#">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                  <Link class="btn btn-outline-light btn-square mx-1" to="#">
                    <i class="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
              <div class="bg-secondary p-4">
                <h5>Elie bigabwa</h5>
                <p class="m-0">La direction commerciale</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 text-center team mb-4">
            <div class="team-item rounded overflow-hidden mb-2">
              <div class="team-img position-relative">
                <img className="img-fluid" src={member4} alt="" srcset="" />
                <div class="team-social">
                  <Link
                    className="btn btn-outline-light btn-square mx-1"
                    to="#"
                  >
                    <i class="fab fa-twitter"></i>
                  </Link>
                  <Link
                    className="btn btn-outline-light btn-square mx-1"
                    to="#"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    className="btn btn-outline-light btn-square mx-1"
                    to="#"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
              <div class="bg-secondary p-4">
                <h5>Elie Bigabwa</h5>
                <p class="m-0">L'équipe technique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
