// import "./App.css";
// import Header from "./components/header/header";
// import Bannerpart from "./sections/banner-part";
// import Apropos from "./sections/apropos";
// import { Gallerypadding } from "./sections/partie-gallerie";
// import { Photography } from "./sections/photography";
// import { Hiring } from "./sections/engagez";
// import { Footer } from "./components/footer/footer";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Bannerpart />
//       <Apropos />
//       {/* <Gallerypadding /> */}
//       <Photography />
//       <Hiring />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";
import Aboutus from "./pages/aboutus";
import Blog from "./pages/blog";
import Home from "./pages/accueil";
import SingleBlog from "./pages/single-blog";
import Service from "./pages/service";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/apropos" element={<Aboutus />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/single-blog" element={<SingleBlog />} />
      <Route path="/services" element={<Service />} />
    </Routes>
  );
}
export default App;
