import { Link } from "react-router-dom";
import blog1 from "../images/blosection/close-up-arrangement-modern-vases.jpg";
import blog2 from "../images/blosection/colorful-glassware-pottery-create-festive-decor-generated-by-ai.jpg";
import blog3 from "../images/blosection/drone-spraying-fertilizer-vegetable-green-plants-agriculture-technology-farm-automation.jpg";

function BlogSction() {
  return (
    <div class="container-fluid py-5">
      <div class="container pt-5 pb-3">
        <div class="text-center mb-5">
          <h5 class="text-uppercase mb-3" style={{ letterSpacing: "5px" }}>
            Notre Blog
          </h5>
          <h1 style={{ color: "#999999" }}>Dernières Nouvelles du blog</h1>
        </div>
        <div class="row pb-3">
          <div class="col-lg-4 mb-4">
            <div class="blog-item position-relative overflow-hidden rounded mb-2">
              <img class="img-fluid" src={blog2} alt="" />
              <Link class="blog-overlay text-decoration-none" to="">
                <h5 class="text-white mb-3">
                  Lorem elitr magna stet eirmod labore amet labore clita at ut
                  clita
                </h5>
                <p class=" m-0" style={{ color: "#999999" }}>
                  Jan 01, 2050
                </p>
              </Link>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="blog-item position-relative overflow-hidden rounded mb-2">
              <img class="img-fluid" src={blog1} alt="" />
              <Link class="blog-overlay text-decoration-none" to="">
                <h5 class="text-white mb-3">
                  Lorem elitr magna stet eirmod labore amet labore clita at ut
                  clita
                </h5>
                <p class="m-0" style={{ color: "#999999" }}>
                  Jan 01, 2050
                </p>
              </Link>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="blog-item position-relative overflow-hidden rounded mb-2">
              <img class="img-fluid" src={blog3} alt="" />
              <Link class="blog-overlay text-decoration-none" to="">
                <h5 class="text-white mb-3">
                  Lorem elitr magna stet eirmod labore amet labore clita at ut
                  clita
                </h5>
                <p class="m-0" style={{ color: "#999999" }}>
                  Jan 01, 2050
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSction;
