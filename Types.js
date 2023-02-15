import { useNavigate } from "react-router-dom";

const Types = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
            <div className="card text-black">
              <img
                src="https://www.lenovo.com/medias/lenovo-tablets-android-tablets-lenovo-tab-series-yoga-tab13-hero.png?context=bWFzdGVyfHJvb3R8ODg5NjN8aW1hZ2UvcG5nfGhmZS9oNDYvMTE2Nzk5NzgyOTEyMzAucG5nfDI0YjhlNGYyOWMzYjk3Y2E1NDE4YmJiZmNjN2YxZGFkNzQ4YzI2MjAyZWUzZWU5MDE1MzA1YjYxMDdiOTUwYTk"
                className="card-img-top"
                alt="iPhone"
              />
              <div className="card-body">
                <div className="text-center mt-1">
                  <h4 className="card-title">Tablets</h4>
                </div>
                <div className="d-flex flex-row">
                  <button
                    onClick={() => {
                      navigate("/products/Tablet");
                    }}
                    type="button"
                    className="btn btn-primary flex-fill me-1"
                    data-mdb-ripple-color="dark"
                  >
                    See
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div className="card text-black">
              <img
                src="https://www.lenovo.com/medias/lenovo-laptops-yoga-yoga-s-series-yoga-creator-7-hero.png?context=bWFzdGVyfHJvb3R8MTU3ODg0fGltYWdlL3BuZ3xoNzUvaDc5LzE0NDA5MDA4MzE2NDQ2LnBuZ3w5NDI2YmNjZTM1NzAxMDAwYWJmMTIxYTQwNTZlZjVlNjEyMjU5MWNmMGVhYjU4ODRiZDE5ODg2ZjAxNWI5MWQ4"
                className="card-img-top"
                alt="iPhone"
              />
              <div className="card-body">
                <div className="text-center mt-1">
                  <h4 className="card-title">Laptops</h4>
                </div>
                <div className="d-flex flex-row">
                  <button
                    onClick={() => {
                      navigate("/products/Laptop");
                    }}
                    type="button"
                    className="btn btn-primary flex-fill me-1"
                    data-mdb-ripple-color="dark"
                  >
                    See
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
            <div className="card text-black">
              <img
                src="https://www.lenovo.com/medias/lenovo-desktop-aio-ideacentre-a540-24-hero.png?context=bWFzdGVyfHJvb3R8MzU5ODAzfGltYWdlL3BuZ3xoYTcvaDEwLzE0Mzk4NzM4OTg5MDg2LnBuZ3wxYjIzYjAwMDAyNjg4M2I2NTQxNjZmZDM4YzVkNjU1MGNmZjU0NmZiNmY5NjA5MTg3MjliNjEwZTcwNzhiN2Q1&w=1920"
                className="card-img-top"
                alt="iPhone"
              />
              <div className="card-body">
                <div className="text-center mt-1">
                  <h4 className="card-title">Desktop</h4>
                </div>

                <div className="d-flex flex-row">
                  <button
                    onClick={() => {
                      navigate("/products/Desktop");
                    }}
                    type="button"
                    className="btn btn-primary flex-fill me-1"
                    data-mdb-ripple-color="dark"
                  >
                    See
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Types;
