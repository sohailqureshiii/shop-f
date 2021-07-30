import React, {useState} from "react";
import Navbar from "../../../components/Navbar";
import DashBoard from "../../../components/DashBoardSidebar";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
import { Button } from "../../../components/MaterialUI";
import { NavModal } from "../../../components/NavbarPopUpNew";

const StoreDasboard = () => {
  const storeDetails = useSelector((state) => state.userStore);
  const storeId = useSelector((state) => state.userStore.userStore._id);
  const [showModal, setShoModal] = useState(false);
  const openModal = () => {
    setShoModal(true);
  };

  const closeModal = (cl) => {
    setShoModal(false);
  };

  return (
    <>
      <Navbar />
      <DashBoard sidebar style={{ backgroundColor: "#f1f5f9" }}>
        <div
          className="lkjhasdrfr"
          style={{ paddingTop: "80px", backgroundColor: "#f1f5f9" }}
        >
          <h1 className="order-name-name-order">Dashboard</h1>
          <div style={{display:'flex'}}>
          <div className="add-product-home-redirect">
            <div className="add-product-header">
              <h4 className="add-product-header-head">Add Your Product</h4>
            </div>

            <div className="add-product-btn-dashboard">
              <Link to="/Addproduct">
                <Button
                  title="Add Product"
                  width="20%"
                  height="85%"
                  fontSize="1.2rem"
                  backgroundColor="black"
                  color="white"
                  radius="5px"
                />
              </Link>
            </div>
          </div>
          <div className='main-div-of-catelogue' >
          <h1 className='add-Catalogue-header'>Create Your Catalogue</h1>
            <div style={{textAlign:'center'}}>
              <Button
                title='Add Catalogue'
                width='150px'
                color='black'
                border='1px solid #c7c7c7'
                fontSize='14px'
                padding='5px 5px'
                onClick={openModal}
              />
            </div>
            <NavModal
          showModal={showModal}
          Modal={closeModal}
          style={{ zindex: "90" }}
        />
          </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ padding: "10px" }} className="new-order-table-div">
              <div className="new-order-table-new">
                <div>
                  <div className="new-order-new-heder-new">
                    <h1 className="new-order-hearder-new">New Orders</h1>
                  </div>

                  <table className="table-new-table">
                    {storeDetails &&
                    storeDetails.storeOrder &&
                    storeDetails.storeOrder.length < 0 ? (
                      <thead className="oknbhgrtyfc">
                        <th className="new-order-table-heeder">S.No</th>
                        <th className="new-order-table-heeder">Order Id</th>
                        <th className="new-order-table-heeder">Customer</th>
                        <th className="new-order-table-heeder">Date/Time</th>
                        <th className="new-order-table-heeder">Amount</th>
                        <th className="new-order-table-heeder">Items</th>
                        <th className="new-order-table-heeder">Status</th>
                      </thead>
                    ) : null}

                    <tbody className="lgadkyhdtq">
                      {storeDetails &&
                      storeDetails.storeOrder &&
                      storeDetails.storeOrder.length < 0
                        ? storeDetails.storeOrder.map((order, index) => (
                            <tr className="mnbnmnb">
                              <td className="jfkvvjvsv" data-label="S.No">
                                {index + 1}
                              </td>
                              <td className="jfkvvjvsv" data-label="Order Id">
                                {order._id}
                              </td>
                              <td className="jfkvvjvsv" data-label="Customer">
                                {order.user.name}
                              </td>
                              <td
                                className="jfkvvjvsv"
                                data-label="Date / Time"
                              >
                                3:59
                              </td>
                              <td className="jfkvvjvsv" data-label="Amount">
                                $ 599
                              </td>
                              <td className="jfkvvjvsv" data-label="Items">
                                {
                                  order.items.filter(
                                    (orderProduct) =>
                                      orderProduct.storeId === storeId
                                  ).length + "Items"
                                }
                              </td>
                              <td className="jfkvvjvsv" data-label="Status">
                                Pending
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div style={{ padding: "10px" }} className="new-customer-table-div">
              <div className="new-order-table-new">
                <div>
                  <div className="new-order-new-heder-new">
                    <h1 className="new-order-hearder-new">Customers</h1>
                  </div>

                  <table className="table-new-table">
                    {storeDetails.userStore &&
                    storeDetails.userStore.followers &&
                    storeDetails.userStore.followers.length > 0 ? (
                      <thead className="oknbhgrtyfc">
                        <th className="new-order-table-heeder">S.No</th>
                        <th className="new-order-table-heeder">
                          Customer Name
                        </th>
                      </thead>
                    ) : (
                      "Share Store"
                    )}

                    <tbody className="lgadkyhdtq">
                      {storeDetails.userStore &&
                      storeDetails.userStore.followers &&
                      storeDetails.userStore.followers.length > 0
                        ? storeDetails.userStore.followers.map(
                            (followers, index) => (
                              <tr className="new-table-border-new">
                                <td className="jfkvvjvsv" data-label="S.No">
                                  {index + 1}
                                </td>
                                <td className="jfkvvjvsv" data-label="Order Id">
                                  {followers.name}
                                </td>
                              </tr>
                            )
                          )
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashBoard>
    </>
  );
};

export default StoreDasboard;
