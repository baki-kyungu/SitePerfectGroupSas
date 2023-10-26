import "../styles/sass/style.scss";
import partner1 from "../../src/images/partners/kadea-acdemy.png";

function PartnerSection() {
  return (
    <section className="bg-white h-personalized">
      <div className="container-fluid">
        <div className="container">
          <h1 className="text-center">Nos Partenaires</h1>
          <div className="row">
            <div className="col-md-2">
              <img src={partner1} alt="" srcset="" />
            </div>
            <div className="col-md-2">
              <img src={partner1} alt="" srcset="" />
            </div>
            <div className="col-md-2">
              <img src={partner1} alt="" srcset="" />
            </div>
            <div className="col-md-2">
              <img src={partner1} alt="" srcset="" />
            </div>
            <div className="col-md-2">
              <img src={partner1} alt="" srcset="" />
            </div>

            <div className="col-md-2">
              <img src={partner1} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
