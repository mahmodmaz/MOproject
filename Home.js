import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            alt="Banner"
            className="w-100 shadow"
            src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="col-lg-6">
          <div className="p-5 mt-4">
            <h1 className="display-4">Welcome To Our Store</h1>
            <p className="lead">Buy A Your Smarts Assets From here</p>
            <button
              onClick={() => {
                navigate("/types");
              }}
              className="btn btn-outline-dark"
            >
              See categories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
