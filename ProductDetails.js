import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { state } = location;
  const { details } = state;
  console.log(details);
  return (
    <div class="height d-flex justify-content-center align-items-center">
      <div class="card p-3">
        <div class="d-flex justify-content-between align-items-center ">
          <div class="mt-2">
            <h4 class="text-uppercase">{details?.name}</h4>
            <div class="mt-5">
              <h5 class="text-uppercase mb-0">${details?.price}</h5>
              <h1 class="main-heading mt-0">
                Is In Stock: {details?.isInStock ? "YES" : "NO"}
              </h1>
              <h1 class="main-heading mt-0">Category: {details?.category}</h1>
            </div>
          </div>
          <div class="image">
            <img src={details.image} alt={"detail-img"} width={"100%"} />
          </div>
        </div>
        <button class="btn btn-danger">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
