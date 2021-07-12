import React from "react";
import { useSelector } from "react-redux";

const OrderTableCompo = (props) => {
  const storeOrderDetails = useSelector((state) => state.userStore.storeOrder);
  const storeId = useSelector((state) => state.userStore.userStore._id);
  const totalPrice = 0;
  const abcd = storeOrderDetails.map((orderItem, index) =>
    orderItem.items.filter((orderProduct) => orderProduct.storeId === storeId)
  );

  console.log("totalPrice", abcd);
  return (
    <table className="table-new-table">
      <thead className="oknbhgrtyfc">
        <th className="jfkvvjvsv kjilljjhn">S.No</th>
        <th className="jfkvvjvsv kjilljjhn">Order Id</th>
        <th className="jfkvvjvsv kjilljjhn">Customer</th>
        <th className="jfkvvjvsv kjilljjhn">Date / Time</th>
        <th className="jfkvvjvsv kjilljjhn">Amount</th>
        <th className="jfkvvjvsv kjilljjhn">Items</th>
        <th className="jfkvvjvsv kjilljjhn">Status</th>
      </thead>

      <tbody className="lgadkyhdtq">
        {/* <tr className="mnbnmnb"> */}
        {storeOrderDetails.map((orderItem, index) => (
          <tr className="mnbnmnb">
            <td className="jfkvvjvsv" data-label="S.No">
              {index}
            </td>
            <td className="jfkvvjvsv" data-label="Order Id">
              {orderItem._id}
            </td>
            <td className="jfkvvjvsv" data-label="Customer">
              {orderItem.user.name}
            </td>
            <td className="jfkvvjvsv" data-label="Date / Time"></td>
            <td className="jfkvvjvsv" data-label="Amount"></td>
            <td className="jfkvvjvsv" data-label="Items">
              {
                orderItem.items.filter(
                  (orderProduct) => orderProduct.storeId === storeId
                ).length
              }
            </td>
            <td className="jfkvvjvsv" data-label="Status">
              Pending
            </td>
          </tr>
        ))}
        {/* </tr> */}
      </tbody>
    </table>
  );
};

export default OrderTableCompo;
