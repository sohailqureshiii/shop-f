import { Link } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductModal from "../../../components/StoreProductdeatils";

const ProductTableCompo = (props) => {
  const [show, setShow] = useState(false);
  const [productDetails,setProductDetails] = useState("");
  const { searchKeyword } = props;

  const storeProducts = useSelector((state) => state.userStore.storeProduct);
  // const [searchKeyword , setsearchKeyword] = useState("");

  const handleShow = (product) => {
    setShow(true);
    setProductDetails(product)
  };

  const renderProducts = () => {
    if (searchKeyword === "" || searchKeyword === null) {
      return storeProducts.map((product, index) => (
        <tr className="mnbnmnb" onClick={() => handleShow(product)} key={product._id}>
          <td className="jfkvvjvsv" data-label="S.No">
            {index + 1}
          </td>
          <td className="jfkvvjvsv" data-label="Product Id">
            {product._id}
          </td>
          <td className="jfkvvjvsv" data-label="Product Name">
            {product.productName}
          </td>
          <td className="jfkvvjvsv" data-label="Quantity">
            {product.productQuantity}
          </td>
          <td className="jfkvvjvsv" data-label="Amount">
            {product.productPrice}
          </td>
          <td className="jfkvvjvsv" data-label="Items">
            {product.productCategory.name}
          </td>
          {/* <td className="jfkvvjvsv" data-label="Stock">
            Available
          </td> */}
          {/* <td className="jfkvvjvsv" data-label="Edit"
             onClick={()=>
              <Link to ="/editProduct" />
             }
            >
              edit
            </td> */}
        </tr>
      ));
    }

    if (searchKeyword !== "") {
      return storeProducts
        .filter(
          (product) =>
            product.productName
              .toLowerCase()
              .split(" ")
              .join("")
              .includes(searchKeyword.toLowerCase().split(" ").join("")) ||
            product.productCategory
              .toLowerCase()
              .split(" ")
              .join("")
              .includes(searchKeyword.toLowerCase().split(" ").join(""))
        )
        .map((product, index) => (
          <tr className="mnbnmnb" onClick={() => handleShow()}>
            <td className="jfkvvjvsv" data-label="S.No">
              {index}
            </td>
            <td className="jfkvvjvsv" data-label="Product Id">
              {product._id}
            </td>
            <td className="jfkvvjvsv" data-label="Product Name">
              {product.productName}
            </td>
            <td className="jfkvvjvsv" data-label="Quantity">
              {product.productQuantity}
            </td>
            <td className="jfkvvjvsv" data-label="Amount">
              {product.productPrice}
            </td>
            <td className="jfkvvjvsv" data-label="Items">
              {product.productCategory}
            </td>
            {/* <td className="jfkvvjvsv" data-label="Stock">
              Available 
            </td> */}
            {/* <td className="jfkvvjvsv" data-label="Edit"
            //  onClick={()=>
            //   <Link to ="/editProduct" />
            //  }
            >
              edit
            </td> */}
           
          </tr>
        ));
    }
  };
  return (
    <>
      <table className="table-new-table">
        <thead className="oknbhgrtyfc">
          <th className="jfkvvjvsv kjilljjhn">S.No</th>
          <th className="jfkvvjvsv kjilljjhn">Product Id</th>
          <th className="jfkvvjvsv kjilljjhn">Product Name</th>
          <th className="jfkvvjvsv kjilljjhn">Quantity</th>
          <th className="jfkvvjvsv kjilljjhn">Amount</th>
          <th className="jfkvvjvsv kjilljjhn">Category</th>
          {/* <th className="jfkvvjvsv kjilljjhn">Stock</th> */}
          {/* <th className="jfkvvjvsv kjilljjhn">Edit/Delete</th> */}
        </thead>
        <tbody className="lgadkyhdtq">{renderProducts()}</tbody>
      </table>

      <ProductModal
        show={show}
        handleclose={() => setShow(false)}
        productDetails={productDetails}
      />
    </>
  );
};

export default ProductTableCompo;
