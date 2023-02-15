import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { firestore } from "../firebase";
import {
  AiOutlineFileSearch,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";

const ProductCard = ({ product, setData, data }) => {
  const [formData, setFormData] = useState(product);
  const navigate = useNavigate();
  const [delLoading, setDelLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const handleDelete = async () => {
    setDelLoading(true);
    const docRef = doc(firestore, "products", product.id);
    try {
      await deleteDoc(docRef);
      const temp = data.filter((prd) => product.id !== prd.id);
      setData(temp);

      toast("Products Successfully Deleted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.log(err);
    } finally {
      setDelLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setUpdateLoading(true);
      const productDoc = doc(firestore, "products", product.id);
      await updateDoc(productDoc, formData);

      const objIndex = data.findIndex((obj) => obj.id === product.id);
      data[objIndex] = formData;
      setData(data);
      toast("Products Successfully Update", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.log(err);
    } finally {
      setUpdateLoading(false);
    }
  };

  const radioButtonHandler = (e) => {
    if (e.target.id === "No") {
      setFormData({
        ...formData,
        isInStock: false,
      });
    } else {
      setFormData({
        ...formData,
        isInStock: true,
      });
    }
  };
  return (
    <>
      <div class="col-md-3 col-sm-6">
        <div class="product-grid">
          <div class="product-image">
            <p href="#">
              <img
                style={{
                  width: "full",
                  maxHeight: "300px",
                  height: "300px",
                }}
                class="pic-1"
                src={product.image}
                alt={"img"}
              />
              <img
                style={{
                  width: "full",
                  maxHeight: "300px",
                  height: "300px",
                }}
                class="pic-2"
                src={product.image}
                alt={"img"}
              />
            </p>
            <ul class="social">
              <li>
                <p
                style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/product/details", {
                      state: { details: formData },
                    });
                  }}
                  data-tip="View"
                >
                  <AiOutlineFileSearch />
                </p>
              </li>
              <li>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={handleDelete}
                  data-tip="Delete"
                >
                  <AiOutlineDelete />
                </p>
              </li>
              <li>
                <p
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-tip="Edit"
                >
                  <AiOutlineEdit />
                </p>
              </li>
            </ul>
          </div>
          <div class="product-content">
            <h3 class="title">
              <h3 className="text-center">{product.name}</h3>
            </h3>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Product</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div style={{ background: "#f6f6f7" }} className="modal-body">
              <form onSubmit={handleUpdate}>
                <div className="d-flex">
                  <div className="form-outline w-100  m-2 mb-2">
                    <label className="form-label" htmlFor="form1Example1">
                      Product Name
                    </label>
                    <input
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        });
                      }}
                      type="text"
                      id="form1Example1"
                      className="form-control"
                    />
                  </div>
                  <div className="form-outline w-100 m-2 mb-2">
                    <label className="form-label" htmlFor="form1Example2">
                      Image URL
                    </label>
                    <input
                      value={formData.image}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          image: e.target.value,
                        });
                      }}
                      type="text"
                      id="form1Example2"
                      className="form-control"
                    />

                    {formData.image && (
                      <div className="d-flex align-items-center">
                        <p>Preview:</p>
                        <img
                          src={formData.image}
                          width={70}
                          height={70}
                          alt={"preview"}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="d-flex">
                  <div className="form-outline w-100  m-2 mb-2">
                    <label className="form-label" htmlFor="form1Example1">
                      Price
                    </label>
                    <input
                      value={formData.price}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          price: e.target.value,
                        });
                      }}
                      type="number"
                      id="form1Example1"
                      className="form-control"
                    />
                  </div>
                  <div className="form-outline w-100 m-2 mb-2">
                    <label className="form-label" htmlFor="form1Example2">
                      Category
                    </label>
                    <select
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          category: e.target.value,
                        });
                      }}
                      value={formData.category}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue value={""}>
                        Select Category
                      </option>
                      <option value="Laptop">Laptop</option>
                      <option value="Tablet">Tablet</option>
                      <option value="Desktop">Desktop</option>
                    </select>
                  </div>
                </div>
                <div className="form-outline m-2 d-flex justify-content-between">
                  <label className="form-label" htmlFor="form1Example2">
                    Is In Stock ?
                  </label>
                  <div className="d-flex">
                    <div className="form-check m-2 ">
                      <input
                        onChange={radioButtonHandler}
                        className="form-check-input"
                        type="radio"
                        name="isinstock"
                        id="No"
                        value={formData.isInStock}
                        checked={formData.isInStock === false}
                      />
                      <label className="form-check-label" htmlFor="No">
                        No
                      </label>
                    </div>
                    <div className="form-check m-2">
                      <input
                        onChange={radioButtonHandler}
                        className="form-check-input"
                        type="radio"
                        name="isinstock"
                        id="Yes"
                        value={formData.isInStock}
                        checked={formData.isInStock === true}
                      />
                      <label className="form-check-label" htmlFor="Yes">
                        Yes
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  disabled={updateLoading}
                  type="submit"
                  className={`btn btn-primary ${updateLoading && "opacity-50"}`}
                >
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
