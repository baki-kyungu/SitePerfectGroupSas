import Header from "../components/header/header";
import { useState } from "react";
import { Footer } from "../components/footer/footer";
import blog_det1 from "../images/blog/male-bartender-making-delicious-cocktail.jpg";

import { NavLink } from "react-router-dom";
import "../styles/sass/style.scss";

function SingleBlog() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    comment: "",
    website: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    comment: "",
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

    if (!values.comment) {
      newErrors.comment = "Le commententaire est requis";
    } else if (values.comment.length < 3) {
      newErrors.comment = "Le commentaire doit contenir au moins 3 caractères";
    } else if (values.message.length > 324) {
      newErrors.comment = "Le message ne doit pas dépasser 324 caractères";
    } else {
      newErrors.comment = "";
    }

    if (values.website) {
      if (!isValidWebsite(values.website)) {
        newErrors.website = "L'adresse du site web n'est pas valide";
      }
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      // Les données du formulaire sont valides, vous pouvez les soumettre
      console.log("Données valides :", values);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidWebsite = (website) => {
    const websiteRegex =
      /^(http|https):\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\/\S*)?$/;
    return websiteRegex.test(website);
  };

  return (
    <div className="contact">
      <Header />

      <section
        class="breadcrumb breadcrumb_bg"
        style={{ backgroundColor: "#54B435" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb_iner text-center">
                <div class="breadcrumb_iner_item">
                  <h2>blog details</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="blog_area single-post-area section_padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 posts-list">
              <div class="single-post">
                <div class="feature-img">
                  <img src={blog_det1} alt="" srcset="" />
                </div>
                <div class="blog_details">
                  <h2>
                    Second divided from form fish beast made every of seas all
                    gathered us saying he our
                  </h2>
                  <ul class="blog-info-link mt-3 mb-4">
                    <li>
                      <NavLink>
                        <i class="far fa-user"></i> Travel, Lifestyle
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i class="far fa-comments"></i> 03 Comments
                      </NavLink>
                    </li>
                  </ul>
                  <p class="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower
                  </p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training. who has the willpower to actually
                  </p>
                  <div class="quote-wrapper">
                    <div class="quotes">
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower to actually sit through a
                      self-imposed MCSE training.
                    </div>
                  </div>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower
                  </p>
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training. who has the willpower to actually
                  </p>
                </div>
              </div>
              <div class="navigation-top">
                <div class="d-sm-flex justify-content-between text-center">
                  <p class="like-info">
                    <span class="align-middle">
                      <i class="far fa-heart"></i>
                    </span>{" "}
                    Lily and 4 people like this
                  </p>
                  <div class="col-sm-4 text-center my-2 my-sm-0">
                    {/* <!-- <p class="comment-count"><span class="align-middle"><i class="far fa-comment"></i></span> 06 Comments</p> --> */}
                  </div>
                  <ul class="social-icons">
                    <li>
                      <NavLink>
                        <i class="fab fa-facebook-f"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i class="fab fa-twitter"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i class="fab fa-dribbble"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i class="fab fa-behance"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div class="navigation-area">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                      <div class="thumb">
                        <NavLink>
                          {/* <img class="img-fluid" src="img/post/preview.png" alt=""> */}
                        </NavLink>
                      </div>
                      <div class="arrow">
                        <NavLink>
                          <span class="lnr text-white ti-arrow-left"></span>
                        </NavLink>
                      </div>
                      <div class="detials">
                        <p>Prev Post</p>
                        <NavLink>
                          <h4>Space The Final Frontier</h4>
                        </NavLink>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                      <div class="detials">
                        <p>Next Post</p>
                        <NavLink>
                          <h4>Telescopes 101</h4>
                        </NavLink>
                      </div>
                      <div class="arrow">
                        <NavLink>
                          <span class="lnr text-white ti-arrow-right"></span>
                        </NavLink>
                      </div>
                      <div class="thumb">
                        <NavLink>
                          {/* <img class="img-fluid" src="img/post/next.png" alt=""> */}
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blog-author">
                <div class="media align-items-center">
                  {/* <img src="img/blog/author.png" alt=""> */}
                  <div class="media-body">
                    <NavLink>
                      <h4>Harvard milan</h4>
                    </NavLink>
                    <p>
                      Second divided from form fish beast made. Every of seas
                      all gathered use saying you're, he our dominion twon
                      Second divided from
                    </p>
                  </div>
                </div>
              </div>
              <div class="comments-area">
                <h4>05 Comments</h4>
                <div class="comment-list">
                  <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                      <div class="thumb">
                        {/* <img src="img/comment/comment_1.png" alt=""> */}
                      </div>
                      <div class="desc">
                        <p class="comment">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser
                        </p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <h5>
                              <NavLink>Emilly Blunt</NavLink>
                            </h5>
                            <p class="date">December 4, 2017 at 3:12 pm </p>
                          </div>
                          <div class="reply-btn">
                            <NavLink class="btn-reply text-uppercase">
                              reply
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="comment-list">
                  <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                      <div class="thumb">
                        {/* <img src="img/comment/comment_2.png" alt=""> */}
                      </div>
                      <div class="desc">
                        <p class="comment">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser
                        </p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <h5>
                              <NavLink>Emilly Blunt</NavLink>
                            </h5>
                            <p class="date">December 4, 2017 at 3:12 pm </p>
                          </div>
                          <div class="reply-btn">
                            <NavLink class="btn-reply text-uppercase">
                              reply
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="comment-list">
                  <div class="single-comment justify-content-between d-flex">
                    <div class="user justify-content-between d-flex">
                      <div class="thumb">
                        {/* <img src="img/comment/comment_3.png" alt=""> */}
                      </div>
                      <div class="desc">
                        <p class="comment">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser
                        </p>
                        <div class="d-flex justify-content-between">
                          <div class="d-flex align-items-center">
                            <h5>
                              <NavLink>Emilly Blunt</NavLink>
                            </h5>
                            <p class="date">December 4, 2017 at 3:12 pm </p>
                          </div>
                          <div class="reply-btn">
                            <NavLink class="btn-reply text-uppercase">
                              reply
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment-form">
                <h4>Leave a Reply</h4>
                <form
                  class="form-contact comment_form"
                  action="#"
                  id="commentForm"
                >
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          className={`form-control w-100 ${
                            errors.comment
                              ? "is-invalid"
                              : values.comment.length >= 3 &&
                                values.comment.length <= 324
                              ? "is-valid"
                              : ""
                          }`}
                          name="comment"
                          value={values.comment}
                          id="comment"
                          cols="30"
                          rows="9"
                          onChange={handleChange}
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) => (e.target.placeholder = "Commentaire")}
                          placeholder="Commentaire"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
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
                          onBlur={(e) => (e.target.placeholder = "Nom")}
                          placeholder="Nom"
                        />
                        {errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <input
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          id="email"
                          type="email"
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) => (e.target.placeholder = "Email")}
                          placeholder="Email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                        />

                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          class={`form-control ${
                            errors.website ? "is-invalid" : ""
                          }`}
                          name="website"
                          value={values.website}
                          id="website"
                          type="text"
                          placeholder="Siteweb"
                          onChange={handleChange}
                        />
                        {errors.website && (
                          <div className="invalid-feedback">
                            {errors.website}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <button
                      type="submit"
                      class="button-contactForm btn_2"
                      onClick={handleSubmit}
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
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
                  <h4 class="widget_title">Category</h4>
                  <ul class="list cat-list">
                    <li>
                      <NavLink class="d-flex">
                        <p>Resaurant food</p>
                        <p>(37)</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="d-flex">
                        <p>Travel news</p>
                        <p>(10)</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="d-flex">
                        <p>Modern technology</p>
                        <p>(03)</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="d-flex">
                        <p>Product</p>
                        <p>(11)</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="d-flex">
                        <p>Inspiration</p>
                        <p>(21)</p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="d-flex">
                        <p>Health Care</p>
                        <p>(21)</p>
                      </NavLink>
                    </li>
                  </ul>
                </aside>
                <aside class="single_sidebar_widget popular_post_widget">
                  <h3 class="widget_title">Recent Post</h3>
                  <div class="media post_item">
                    {/* <img src="img/post/post_1.png" alt="post"> */}
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>From life was you fish...</h3>
                      </a>
                      <p>January 12, 2019</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    {/* <img src="img/post/post_2.png" alt="post"> */}
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    {/* <img src="img/post/post_3.png" alt="post"> */}
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div class="media post_item">
                    {/* <img src="img/post/post_4.png" alt="post"> */}
                    <div class="media-body">
                      <a href="single-blog.html">
                        <h3>Asteroids telescope</h3>
                      </a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                </aside>
                <aside class="single_sidebar_widget tag_cloud_widget">
                  <h4 class="widget_title">Tag Clouds</h4>
                  <ul class="list">
                    <li>
                      <NavLink>project</NavLink>
                    </li>
                    <li>
                      <NavLink>love</NavLink>
                    </li>
                    <li>
                      <NavLink>technology</NavLink>
                    </li>
                    <li>
                      <NavLink>travel</NavLink>
                    </li>
                    <li>
                      <NavLink>restaurant</NavLink>
                    </li>
                    <li>
                      <NavLink>life style</NavLink>
                    </li>
                    <li>
                      <NavLink>design</NavLink>
                    </li>
                    <li>
                      <NavLink>illustration</NavLink>
                    </li>
                  </ul>
                </aside>
                <aside class="single_sidebar_widget instagram_feeds">
                  <h4 class="widget_title">Instagram Feeds</h4>
                  <ul class="instagram_row flex-wrap">
                    <li>
                      <NavLink>
                        {/* <img class="img-fluid" src="img/post/post_5.png" alt=""> */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        {/* <img class="img-fluid" src="img/post/post_6.png" alt=""> */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        {/* <img class="img-fluid" src="img/post/post_7.png" alt=""> */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        {/* <img class="img-fluid" src="img/post/post_8.png" alt=""> */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        {/* <img class="img-fluid" src="img/post/post_9.png" alt=""> */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        {/* <img class="img-fluid" src="img/post/post_10.png" alt=""> */}
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
                        name="EMAIL"
                        placeholder="Your Email Address"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Your Email Address '"
                        required=""
                        type="email"
                      />
                      <button class="btn_2 btn-default text-uppercase">
                        SUBSCRIBE
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

export default SingleBlog;
