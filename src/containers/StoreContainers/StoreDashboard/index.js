import React from "react";
import Navbar from "../../../components/Navbar";
import DashBoard from "../../../components/DashBoardSidebar";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
import { Button } from "../../../components/MaterialUI";

const StoreDasboard = () => {
  const storeProducts = useSelector((state) => state.userStore.storeProduct);
  const storeOrders = useSelector((state) => state.userStore.storeOrder);
  return (
    <>
      <Navbar />
      <DashBoard sidebar style={{ backgroundColor: "#f1f5f9" }}>
        <div
          className="lkjhasdrfr"
          style={{ paddingTop: "80px", backgroundColor: "#f1f5f9" }}
        >
          <h1 className="order-name-name-order">Dashboard</h1>

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
                  backgroundColor="rgb(236, 236, 236)"
                  color="#5f5f5f"
                />
              </Link>
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
                    <thead className="oknbhgrtyfc">
                      <th className="new-order-table-heeder">S.No</th>
                      <th className="new-order-table-heeder">Order Id</th>
                      <th className="new-order-table-heeder">Customer</th>
                      <th className="new-order-table-heeder">Date/Time</th>
                      <th className="new-order-table-heeder">Amount</th>
                      <th className="new-order-table-heeder">Items</th>
                      <th className="new-order-table-heeder">Status</th>
                    </thead>

                    <tbody className="lgadkyhdtq">
                      <tr className="mnbnmnb">
                        <td className="jfkvvjvsv" data-label="S.No">
                          1
                        </td>
                        <td className="jfkvvjvsv" data-label="Order Id">
                          GG23233
                        </td>
                        <td className="jfkvvjvsv" data-label="Customer">
                          ASAS1223
                        </td>
                        <td className="jfkvvjvsv" data-label="Date / Time">
                          3:59
                        </td>
                        <td className="jfkvvjvsv" data-label="Amount">
                          $ 599
                        </td>
                        <td className="jfkvvjvsv" data-label="Items">
                          3 Items
                        </td>
                        <td className="jfkvvjvsv" data-label="Status">
                          Pending
                        </td>
                      </tr>
                      <tr className="mnbnmnb">
                        <td className="jfkvvjvsv" data-label="S.No">
                          1
                        </td>
                        <td className="jfkvvjvsv" data-label="Order Id">
                          GG23233
                        </td>
                        <td className="jfkvvjvsv" data-label="Customer">
                          ASAS1223
                        </td>
                        <td className="jfkvvjvsv" data-label="Date / Time">
                          3:59
                        </td>
                        <td className="jfkvvjvsv" data-label="Amount">
                          $ 599
                        </td>
                        <td className="jfkvvjvsv" data-label="Items">
                          3 Items
                        </td>
                        <td className="jfkvvjvsv" data-label="Status">
                          Pending
                        </td>
                      </tr>
                      <tr className="mnbnmnb">
                        <td className="jfkvvjvsv" data-label="S.No">
                          1
                        </td>
                        <td className="jfkvvjvsv" data-label="Order Id">
                          GG23233
                        </td>
                        <td className="jfkvvjvsv" data-label="Customer">
                          ASAS1223
                        </td>
                        <td className="jfkvvjvsv" data-label="Date / Time">
                          3:59
                        </td>
                        <td className="jfkvvjvsv" data-label="Amount">
                          $ 599
                        </td>
                        <td className="jfkvvjvsv" data-label="Items">
                          3 Items
                        </td>
                        <td className="jfkvvjvsv" data-label="Status">
                          Pending
                        </td>
                      </tr>
                      <tr className="mnbnmnb">
                        <td className="jfkvvjvsv" data-label="S.No">
                          1
                        </td>
                        <td className="jfkvvjvsv" data-label="Order Id">
                          GG23233
                        </td>
                        <td className="jfkvvjvsv" data-label="Customer">
                          ASAS1223
                        </td>
                        <td className="jfkvvjvsv" data-label="Date / Time">
                          3:59
                        </td>
                        <td className="jfkvvjvsv" data-label="Amount">
                          $ 599
                        </td>
                        <td className="jfkvvjvsv" data-label="Items">
                          3 Items
                        </td>
                        <td className="jfkvvjvsv" data-label="Status">
                          Pending
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div style={{ padding: "10px" }} className="new-customer-table-div">
              <div className="new-order-table-new">
                <div>
                  <div className="new-order-new-heder-new">
                    <h1 className="new-order-hearder-new">New Orders</h1>
                  </div>

                  <table className="table-new-table">
                    <thead className="oknbhgrtyfc">
                      <th className="new-order-table-heeder">S.No</th>
                      <th className="new-order-table-heeder">Order Id</th>
                      <th className="new-order-table-heeder">Customer</th>
                      <th className="new-order-table-heeder">Date/Time</th>
                    </thead>

                    <tbody className="lgadkyhdtq">
                      <tr className="mnbnmnb">
                        <td className="jfkvvjvsv" data-label="S.No">
                          1
                        </td>
                        <td className="jfkvvjvsv" data-label="Order Id">
                          GG23233
                        </td>
                        <td className="jfkvvjvsv" data-label="Customer">
                          ASAS1223
                        </td>
                        <td className="jfkvvjvsv" data-label="Date / Time">
                          3:59
                        </td>
                      </tr>
                      <tr className="mnbnmnb">
                        <td className="jfkvvjvsv" data-label="S.No">
                          1
                        </td>
                        <td className="jfkvvjvsv" data-label="Order Id">
                          GG23233
                        </td>
                        <td className="jfkvvjvsv" data-label="Customer">
                          ASAS1223
                        </td>
                        <td className="jfkvvjvsv" data-label="Date / Time">
                          3:59
                        </td>
                      </tr>
                      <tr className="mnbnmnb">
                        <td className="jfkvvjvsv" data-label="S.No">
                          1
                        </td>
                        <td className="jfkvvjvsv" data-label="Order Id">
                          GG23233
                        </td>
                        <td className="jfkvvjvsv" data-label="Customer">
                          ASAS1223
                        </td>
                        <td className="jfkvvjvsv" data-label="Date / Time">
                          3:59
                        </td>
                      </tr>
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

{
  /* <div style={{ padding: "30px" }}>
            <div className="mklydfbsn">
              <div className="bvncmdkdj">
                <div className="njhgyflvdiw">
                  <h1 className="mkoqszert">Products</h1>
                </div>
                <div className="nnsxnslxkax">
                  <h1 className="mkoqszerdefeft">{storeProducts.length}</h1>
                </div>
              </div>
              <div className="bvncmdkdj">
                <div className="njhgyflvdiw">
                  <h1 className="mkoqszert">Orders</h1>
                </div>
                <div className="nnsxnslxkax">
                  
                </div>
              </div>
              <div className="bvncmdkdj">
                <div className="njhgyflvdiw">
                  <h1 className="mkoqszert">Customer</h1>
                </div>
                <div className="nnsxnslxkax">
                  <h1 className="mkoqszerdefeft">960</h1>
                </div>
              </div>
            </div>
          </div> */
}
