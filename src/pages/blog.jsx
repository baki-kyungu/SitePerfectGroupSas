import Header from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/sass/style.scss";
import blog1 from "../images/blog/male-bartender-making-delicious-cocktail.jpg";
import blog2 from "../images/blog/farm-worker-driving-tractor-spraying-green-meadow-generated-by-ai.jpg";
import blog3 from "../images/blog/medium-shot-girl-posing-nature.jpg";
import blog4 from "../images/blog/elegant-wine-bottle-cup-with-grapes-generative-ai.jpg";
import blog5 from "../images/blog/smiling-african-girl-holding-paint-bottle-playful-creativity-generated-by-ai.jpg";
import coffee from "../images/elements/cup-coffee-cup-coffee.jpg";

function Blog() {
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

    // Effectuez la validation ici
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
        class="breadcrumb breadcrumb-bg"
        style={{ backgroundColor: "#EDDD5E" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h2 className="text-white">blog</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="blog_area section_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
              <div class="blog_left_sidebar">
                <article class="blog_item">
                  <div class="blog_item_img">
                    <img src={blog1} alt="" srcset="" />
                    <NavLink to="#" class="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </NavLink>
                  </div>

                  <div class="blog_details">
                    <a class="d-inline-block" href="single-blog.html">
                      <h2>
                        Vente de Vin de Qualité Supérieure Élaboré à Partir de
                        Produits Agricoles.
                      </h2>
                    </a>
                    <p>
                      Perfect Group SAS annonce fièrement la vente de son vin
                      exceptionnel, élaboré à partir de produits agricoles de
                      qualité supérieure. Notre entreprise s'engage à vous
                      offrir un vin raffiné, produit avec soin à partir des
                      meilleurs ingrédients issus de nos cultures. Découvrez
                      l'excellence dans chaque gorgée, avec notre vin qui
                      incarne la passion pour l'agriculture et la qualité.
                    </p>
                    <ul class="blog-info-link">
                      <li>
                        <NavLink to="#">
                          <ion-icon name="person-outline"></ion-icon>{" "}
                          Agro-transformation, Plaisir gustatif
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          <ion-icon name="chatbubbles-outline"></ion-icon> 03
                          Comments
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </article>

                <article class="blog_item">
                  <div class="blog_item_img">
                    <img src={blog3} alt="" srcset="" />
                    <NavLink to="#" class="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </NavLink>
                  </div>

                  <div class="blog_details">
                    <a class="d-inline-block" href="single-blog.html">
                      <h2>Motifs de décoration créés par une élève</h2>
                    </a>
                    <p>
                      Découvrez l'incroyable réalisation d'une élève de{" "}
                      <span style={{ color: "green" }}>bisounours</span> qui a
                      transformé des déchets en œuvres d'art grâce à
                      l'enseignement des ingénieurs de Perfect Group en matière
                      de recyclage créatif.
                    </p>
                    <ul class="blog-info-link">
                      <li>
                        <NavLink to="#">
                          <ion-icon name="person-outline"></ion-icon>
                          Travel, Lifestyle
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          <ion-icon name="chatbubbles-outline"></ion-icon>
                          03 Comments
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </article>

                <article class="blog_item">
                  <div class="blog_item_img">
                    <img src={blog4} alt="" srcset="" />
                    <NavLink to="#" class="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </NavLink>
                  </div>

                  <div class="blog_details">
                    <a class="d-inline-block" href="single-blog.html">
                      <h2>Google inks pact for new 35-storey office</h2>
                    </a>
                    <p>
                      Perfect Group SAS annonce fièrement la vente de son vin
                      exceptionnel, élaboré à partir de produits agricoles de
                      qualité supérieure. Notre entreprise s'engage à vous
                      offrir un vin raffiné, produit avec soin à partir des
                      meilleurs ingrédients issus de nos cultures. Découvrez
                      l'excellence dans chaque gorgée, avec notre vin qui
                      incarne la passion pour l'agriculture et la qualité.
                    </p>
                    <ul class="blog-info-link">
                      <li>
                        <NavLink to="#">
                          <ion-icon name="person-outline"></ion-icon>
                          Travel, Lifestyle
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          <ion-icon name="chatbubbles-outline"></ion-icon>
                          03 Comments
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </article>

                <article class="blog_item">
                  <div class="blog_item_img">
                    <img src={blog5} alt="" srcset="" />
                    <NavLink to="#" class="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </NavLink>
                  </div>

                  <div class="blog_details">
                    <a class="d-inline-block" href="single-blog.html">
                      <h2>
                        Commercialisation et distribution des produits
                        alimentaires
                      </h2>
                    </a>
                    <p>
                      Perfect Group SAS annonce fièrement la vente de son vin
                      exceptionnel, élaboré à partir de produits agricoles de
                      qualité supérieure. Notre entreprise s'engage à vous
                      offrir un vin raffiné, produit avec soin à partir des
                      meilleurs ingrédients issus de nos cultures. Découvrez
                      l'excellence dans chaque gorgée, avec notre vin qui
                      incarne la passion pour l'agriculture et la qualité.
                    </p>
                    <ul class="blog-info-link">
                      <li>
                        <NavLink to="#">
                          <ion-icon name="person-outline"></ion-icon>
                          Travel, Lifestyle
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          <ion-icon name="chatbubbles-outline"></ion-icon>
                          03 Comments
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </article>

                <article class="blog_item">
                  <div class="blog_item_img">
                    <img src={blog2} alt="" srcset="" />
                    <NavLink to="#" class="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </NavLink>
                  </div>

                  <div class="blog_details">
                    <NavLink className="d-inline-block" to="single-blog.html">
                      <h2>
                        Commercialisation et distribution des produits
                        alimentaires
                      </h2>
                    </NavLink>
                    <p>
                      Perfect Group SAS annonce fièrement la vente de son vin
                      exceptionnel, élaboré à partir de produits agricoles de
                      qualité supérieure. Notre entreprise s'engage à vous
                      offrir un vin raffiné, produit avec soin à partir des
                      meilleurs ingrédients issus de nos cultures. Découvrez
                      l'excellence dans chaque gorgée, avec notre vin qui
                      incarne la passion pour l'agriculture et la qualité.
                    </p>
                    <ul class="blog-info-link">
                      <li>
                        <NavLink to="#">
                          <ion-icon name="person-outline"></ion-icon>
                          Travel, Lifestyle
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          <ion-icon name="chatbubbles-outline"></ion-icon>
                          03 Comments
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </article>

                <nav class="blog-pagination justify-content-center d-flex">
                  <ul class="pagination">
                    <li class="page-item">
                      <NavLink to="#" class="page-link" aria-label="Previous">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                      </NavLink>
                    </li>
                    <li class="page-item">
                      <NavLink to="#" class="page-link">
                        1
                      </NavLink>
                    </li>
                    <li class="page-item active">
                      <NavLink to="#" className="page-link">
                        2
                      </NavLink>
                    </li>
                    <li class="page-item">
                      <NavLink to="#" class="page-link" aria-label="Next">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="blog_right_sidebar">
                <aside class="single_sidebar_widget search_widget">
                  <form action="#">
                    <div class="form-group">
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search Keyword"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Search Keyword'"
                        />
                        <div class="input-group-append">
                          <button class="btn" type="button">
                            <i class="ti-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      class="button rounded-0 primary-bg text-white w-100 btn_2"
                      type="submit"
                    >
                      Chercher
                    </button>
                  </form>
                </aside>

                <aside class="single_sidebar_widget post_category_widget">
                  <h4 class="widget_title">Catégorie</h4>
                  <ul class="list cat-list">
                    <li>
                      <a href="single-blog" class="d-flex">
                        <p>Green Perfect</p>
                        <p>(37)</p>
                      </a>
                    </li>
                    <li>
                      <a href="single-blog" class="d-flex">
                        <p>Perfect agro-transformation</p>
                        <p>(10)</p>
                      </a>
                    </li>
                    <li>
                      <a href="single-blog" class="d-flex">
                        <p>Perfect fourniture</p>
                        <p>(03)</p>
                      </a>
                    </li>
                    <li>
                      <a href="single-blog" class="d-flex">
                        <p>Ecole et nature</p>
                        <p>(11)</p>
                      </a>
                    </li>
                    <li>
                      <a href="single-blog" class="d-flex">
                        <p>Inspiration</p>
                        <p>(21)</p>
                      </a>
                    </li>
                    <li>
                      <a href="single-blog" class="d-flex">
                        <p>Motif et décoration </p>
                        <p>(21)</p>
                      </a>
                    </li>
                  </ul>
                </aside>

                <aside class="single_sidebar_widget popular_post_widget">
                  <h3 class="widget_title">Post Récent</h3>
                  <div class="media post_item">
                    <img src={coffee} alt="" srcset="" />
                    <div class="media-body">
                      <a href="/single-blog">
                        <h3>Le café qui guérit...</h3>
                      </a>

                      <p>Janvier 12, 2019</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img src={coffee} alt="" srcset="" />
                    <div class="media-body">
                      <NavLink to="/single-blog">
                        <h3>Le café qui guérit...</h3>
                      </NavLink>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img src={coffee} alt="" srcset="" />
                    <div class="media-body">
                      <NavLink to="/single-blog">
                        <h3>Le café qui guérit...</h3>
                      </NavLink>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    <img src={coffee} alt="" srcset="" />
                    <div class="media-body">
                      <NavLink to="/single-blog">
                        <h3>Le café qui guérit...</h3>
                      </NavLink>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                </aside>
                <aside class="single_sidebar_widget tag_cloud_widget">
                  <h4 class="widget_title">Tag Clouds</h4>
                  <ul class="list">
                    <li>
                      <NavLink to="services">projet</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">agri-tech</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">technologie</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">coffee shop</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">éducation</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">decoration</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">design</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">illustration</NavLink>
                    </li>
                  </ul>
                </aside>

                <aside class="single_sidebar_widget instagram_feeds">
                  <h4 class="widget_title">Instagram Feeds</h4>
                  <ul class="instagram_row flex-wrap">
                    <li>
                      <NavLink to="#">
                        {/* <img
                          class="img-fluid"
                          src="img/post/post_5.png"
                          alt=""
                        /> */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        {/* <img
                          class="img-fluid"
                          src="img/post/post_6.png"
                          alt=""
                        /> */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        {/* <img
                          class="img-fluid"
                          src="img/post/post_7.png"
                          alt=""
                        /> */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        {/* <img
                          class="img-fluid"
                          src="img/post/post_8.png"
                          alt=""
                        /> */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        {/* <img
                          class="img-fluid"
                          src="img/post/post_9.png"
                          alt=""
                        /> */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        {/* <img
                          class="img-fluid"
                          src="img/post/post_10.png"
                          alt=""
                        /> */}
                      </NavLink>
                    </li>
                  </ul>
                </aside>

                <aside class="single_sidebar_widget newsletter_widget">
                  <h4 class="widget_title">Newsletter</h4>
                  <div class="form-wrap" id="mc_embed_signup">
                    <form
                      target="_blank"
                      action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                      method="get"
                      class="form-inline"
                    >
                      <input
                        class="form-control"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        placeholder="Your Email Address"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'email '"
                        required=""
                        type="email"
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                      <button
                        class="btn_2 btn-default text-uppercase"
                        onClick={handleSubmit}
                      >
                        S'INSCRIRE
                      </button>
                      <div style={{ position: "absolute", left: "-5000px" }}>
                        <input
                          name="b_36c4fd991d266f23781ded980_aefe40901a"
                          tabindex="-1"
                          value=""
                          type="text"
                        />
                      </div>
                      <div class="info"></div>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
