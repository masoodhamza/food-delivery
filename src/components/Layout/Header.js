import food from "../../assets/food.jpg";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Khaba Khana
          </a>

          <button className="btn btn-success">
            <i className="bi bi-cart"></i> View Cart{" "}
            <span className="badge bg-primary">4</span>
          </button>
        </div>
      </nav>

      <div className="hero">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={food}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Best food of the town at your door step
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                temporibus impedit repellendus similique eius, laborum ex
                inventore nostrum blanditiis quidem? Molestias quas voluptatem
                suscipit sint eos eius qui eaque. A.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Deals
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
