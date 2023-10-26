import "../styles/sass/style.scss";

function Suscribe() {
  return (
    <section class="photography section_padding">
      <div
        class="container-fluid bg-registration py-5"
        style={{ margin: "90px 0" }}
      >
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <div class="mb-4">
                <h5
                  class="text-uppercase mb-3 rg-text"
                  style={{ letterSpacing: "5px" }}
                >
                  Besoin d'un service
                </h5>
                <h1 class="text-white">
                  30% de reduction pour les nouveaux clents
                </h1>
              </div>
              <p class="text-white">
                Demander un service et nous vous l'orfrirons avec une reduction
                de 30% à nos prix habituels.
              </p>
              <ul class="list-inline text-white m-0">
                <li class="py-2">
                  <i class="fa fa-check rg-text mr-3"></i>Motifs de décorations
                  et design
                </li>
                <li class="py-2">
                  <i class="fa fa-check rg-text mr-3"></i>Poubelles écologiques
                </li>
                <li class="py-2">
                  <i class="fa fa-check rg-text mr-3"></i>Diam dolor diam
                  elitripsum vero.
                </li>
              </ul>
            </div>
            <div class="col-lg-5">
              <div class="card border-0">
                <div class="card-header bg-light text-center p-4">
                  <h1 class="m-0">S'inscrire</h1>
                </div>
                <div class="card-body rounded-bottom bg-form p-5">
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control border-0 p-4"
                        placeholder="Nom"
                        required="required"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control border-0 p-4"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                    <div class="form-group">
                      <select
                        class="custom-select border-0 px-4"
                        style={{ height: "47px" }}
                      >
                        <option selected>Selectionner un service</option>
                        <option value="1">Green perfect</option>
                        <option value="2">Perfect agro-transformation</option>
                        <option value="3">Perfect fourniture</option>
                      </select>
                    </div>
                    <div>
                      <button
                        class="btn btn-dark btn-block border-0 py-3"
                        type="submit"
                      >
                        Enregistrer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Suscribe };
