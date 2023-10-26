import Header from "../components/header/header";
import { Footer } from "../components/footer/footer";
import "../styles/sass/style.scss";
import "../styles/sass/_nice.scss";
import service1 from "../images/services/cheerful-african-farmer-talking-phone-while-working-field.jpg";
import service2 from "../images/services/shallow-focus-woman-with-facemask-holding-pos-machine-market.jpg";
import service3 from "../images/services/armchair-green-living-room-with-copy-space.jpg";
import service4 from "../images/services/female-worker-examining-juice-bottles.jpg";
// import servicedetail1 from "../images/icons/project_details_icon_1.svg";

function Service() {
  return (
    <>
      <Header />
      <section class="project_details section_padding">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="single_project_item">
                <img src={service1} alt="" srcset="" />
                <div class="card red">
                  <div class="card-body">
                    <h5 class="card-title">Green perfect</h5>

                    {/* <!-- Pills Tabs --> */}
                    <ul
                      class="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Fabrication des meubles
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Recyclage des déchets
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Green House
                        </button>
                      </li>
                    </ul>
                    <div class="tab-content pt-2" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        Sunt est soluta temporibus accusantium neque nam maiores
                        cumque temporibus. Tempora libero non est unde veniam
                        est qui dolor. Ut sunt iure rerum quae quisquam autem
                        eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                        unde.
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        Nesciunt totam et. Consequuntur magnam aliquid eos nulla
                        dolor iure eos quia. Accusantium distinctio omnis et
                        atque fugiat. Itaque doloremque aliquid sint quasi quia
                        distinctio similique. Voluptate nihil recusandae
                        mollitia dolores. Ut laboriosam voluptatum dicta.
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        Saepe animi et soluta ad odit soluta sunt. Nihil quos
                        omnis animi debitis cumque. Accusantium quibusdam
                        perspiciatis qui qui omnis magnam. Officiis accusamus
                        impedit molestias nostrum veniam. Qui amet ipsum iure.
                        Dignissimos fuga tempore dolor.
                      </div>
                    </div>
                    {/* <!-- End Pills Tabs --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="project_details section_padding">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="single_project_item">
                <img src={service2} alt="" srcset="" />
                <div class="card red">
                  <div class="card-body">
                    <h5 class="card-title">Perfect agro-transformation</h5>

                    {/* <!-- Pills Tabs --> */}
                    <ul
                      class="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Production des jus naturels et vins
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Commercialisation et distribution des produits
                          alimentaires
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Green House
                        </button>
                      </li>
                    </ul>
                    <div class="tab-content pt-2" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        Sunt est soluta temporibus accusantium neque nam maiores
                        cumque temporibus. Tempora libero non est unde veniam
                        est qui dolor. Ut sunt iure rerum quae quisquam autem
                        eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                        unde.
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        Nesciunt totam et. Consequuntur magnam aliquid eos nulla
                        dolor iure eos quia. Accusantium distinctio omnis et
                        atque fugiat. Itaque doloremque aliquid sint quasi quia
                        distinctio similique. Voluptate nihil recusandae
                        mollitia dolores. Ut laboriosam voluptatum dicta.
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        Saepe animi et soluta ad odit soluta sunt. Nihil quos
                        omnis animi debitis cumque. Accusantium quibusdam
                        perspiciatis qui qui omnis magnam. Officiis accusamus
                        impedit molestias nostrum veniam. Qui amet ipsum iure.
                        Dignissimos fuga tempore dolor.
                      </div>
                    </div>
                    {/* <!-- End Pills Tabs --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="project_details section_padding">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="single_project_item">
                <img src={service3} alt="" srcset="" />
                <div class="card red">
                  <div class="card-body">
                    <h5 class="card-title">Perfect fourniture</h5>

                    {/* <!-- Pills Tabs --> */}
                    <ul
                      class="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Production des jus naturels et vins
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Commercialisation et distribution des produits
                          alimentaires
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Green House
                        </button>
                      </li>
                    </ul>
                    <div class="tab-content pt-2" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        Sunt est soluta temporibus accusantium neque nam maiores
                        cumque temporibus. Tempora libero non est unde veniam
                        est qui dolor. Ut sunt iure rerum quae quisquam autem
                        eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                        unde.
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        Nesciunt totam et. Consequuntur magnam aliquid eos nulla
                        dolor iure eos quia. Accusantium distinctio omnis et
                        atque fugiat. Itaque doloremque aliquid sint quasi quia
                        distinctio similique. Voluptate nihil recusandae
                        mollitia dolores. Ut laboriosam voluptatum dicta.
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        Saepe animi et soluta ad odit soluta sunt. Nihil quos
                        omnis animi debitis cumque. Accusantium quibusdam
                        perspiciatis qui qui omnis magnam. Officiis accusamus
                        impedit molestias nostrum veniam. Qui amet ipsum iure.
                        Dignissimos fuga tempore dolor.
                      </div>
                    </div>
                    {/* <!-- End Pills Tabs --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="project_details section_padding">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="single_project_item">
                <img src={service4} alt="" srcset="" />
                <div class="card red">
                  <div class="card-body">
                    <h5 class="card-title">Perfect fourniture</h5>

                    {/* <!-- Pills Tabs --> */}
                    <ul
                      class="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Production des jus naturels et vins
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Commercialisation et distribution des produits
                          alimentaires
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Green House
                        </button>
                      </li>
                    </ul>
                    <div class="tab-content pt-2" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        Sunt est soluta temporibus accusantium neque nam maiores
                        cumque temporibus. Tempora libero non est unde veniam
                        est qui dolor. Ut sunt iure rerum quae quisquam autem
                        eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                        unde.
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        Nesciunt totam et. Consequuntur magnam aliquid eos nulla
                        dolor iure eos quia. Accusantium distinctio omnis et
                        atque fugiat. Itaque doloremque aliquid sint quasi quia
                        distinctio similique. Voluptate nihil recusandae
                        mollitia dolores. Ut laboriosam voluptatum dicta.
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        Saepe animi et soluta ad odit soluta sunt. Nihil quos
                        omnis animi debitis cumque. Accusantium quibusdam
                        perspiciatis qui qui omnis magnam. Officiis accusamus
                        impedit molestias nostrum veniam. Qui amet ipsum iure.
                        Dignissimos fuga tempore dolor.
                      </div>
                    </div>
                    {/* <!-- End Pills Tabs --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Service;
