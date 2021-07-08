import React, { useState } from "react";
import ProductModal from "../../../components/StoreProductdeatils";

const ProductTableCompo = (props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
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
          <th className="jfkvvjvsv kjilljjhn">Items</th>
          <th className="jfkvvjvsv kjilljjhn">Stock</th>
        </thead>
        <tbody className="lgadkyhdtq">
          <tr className="mnbnmnb" onClick={() => handleShow()}>
            <td className="jfkvvjvsv" data-label="S.No">
              2
            </td>
            <td className="jfkvvjvsv" data-label="Product Id">
              A1-OKM-098756
            </td>
            <td className="jfkvvjvsv" data-label="Product Name">
              Apple Mac Book
            </td>
            <td className="jfkvvjvsv" data-label="Quantity">
              345
            </td>
            <td className="jfkvvjvsv" data-label="Amount">
              $200
            </td>
            <td className="jfkvvjvsv" data-label="Items">
              678 items
            </td>
            <td className="jfkvvjvsv" data-label="Stock">
              Available
            </td>
          </tr>
          <tr className="mnbnmnb" onClick={() => handleShow()}>
            <td className="jfkvvjvsv" data-label="S.No">
              3
            </td>
            <td className="jfkvvjvsv" data-label="Product Id">
              A1-OKM-09834523
            </td>
            <td className="jfkvvjvsv" data-label="Product Name">
              Samsung M10 New Phone
            </td>
            <td className="jfkvvjvsv" data-label="Quantity">
              345
            </td>
            <td className="jfkvvjvsv" data-label="Amount">
              $80
            </td>
            <td className="jfkvvjvsv" data-label="Items">
              678 items
            </td>
            <td className="jfkvvjvsv" data-label="Stock">
              Available
            </td>
          </tr>
          <tr className="mnbnmnb" onClick={() => handleShow()}>
            <td className="jfkvvjvsv" data-label="S.No">
              4
            </td>
            <td className="jfkvvjvsv" data-label="Product Id">
              A1-OKM-0989807
            </td>
            <td className="jfkvvjvsv" data-label="Product Name">
              Realmi New Brand Mobile
            </td>
            <td className="jfkvvjvsv" data-label="Quantity">
              345
            </td>
            <td className="jfkvvjvsv" data-label="Amount">
              $20
            </td>
            <td className="jfkvvjvsv" data-label="Items">
              678 items
            </td>
            <td className="jfkvvjvsv" data-label="Stock">
              Available
            </td>
          </tr>
          <tr className="mnbnmnb" onClick={() => handleShow()}>
            <td className="jfkvvjvsv" data-label="S.No">
              5
            </td>
            <td className="jfkvvjvsv" data-label="Product Id">
              A1-OKM-098345
            </td>
            <td className="jfkvvjvsv" data-label="Product Name">
              2020 Apple MacBook Air - Gold
            </td>
            <td className="jfkvvjvsv" data-label="Quantity">
              345
            </td>
            <td className="jfkvvjvsv" data-label="Amount">
              $2100
            </td>
            <td className="jfkvvjvsv" data-label="Items">
              678 items
            </td>
            <td className="jfkvvjvsv" data-label="Stock">
              Available
            </td>
          </tr>
          <tr className="mnbnmnb" onClick={() => handleShow()}>
            <td className="jfkvvjvsv" data-label="S.No">
              6
            </td>
            <td className="jfkvvjvsv" data-label="Product Id">
              A1-OKM-0987656
            </td>
            <td className="jfkvvjvsv" data-label="Product Name">
              1 Plus Airpods - Black
            </td>
            <td className="jfkvvjvsv" data-label="Quantity">
              345
            </td>
            <td className="jfkvvjvsv" data-label="Amount">
              $2100
            </td>
            <td className="jfkvvjvsv" data-label="Items">
              678 items
            </td>
            <td className="jfkvvjvsv" data-label="Stock">
              Available
            </td>
          </tr>
        </tbody>
      </table>

      <ProductModal
        show={show}
        handleclose={() => setShow(false)}
        // productDetails={productDetails}
      />
    </>
  );
};

export default ProductTableCompo;
