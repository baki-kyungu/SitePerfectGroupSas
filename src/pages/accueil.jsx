import "./../App.css";

import Header from "../components/header/header";

import Bannerpart from "../sections/banner-part";
import About from "../sections/apropos";
import { Suscribe } from "../sections/suscribe";
import { Hiring } from "../sections/engagez";
import { Footer } from "../components/footer/footer";
import Project from "../components/project";
import Team from "../sections/team.jsx";
import BlogSection from "../sections/blogsection";
// import PartnerSection from "../sections/collaboration";

import "../App.css";

function Home() {
  return (
    <div className="App">
      <Header />
      <Bannerpart />
      <About />

      <Project />
      {/* <PartnerSection /> */}
      <Suscribe />
      <Team />
      <BlogSection />
      <Hiring />
      <Footer />
    </div>
  );
}

export default Home;
