import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFetchOrders } from "../services";
const initialState = {};
export const ContextDashboard = React.createContext(initialState);
export const ProviderDashboard = ({ children }) => {
  const [ordersActiveMenu, setOrdersActiveMenu] = useState("all");
  const orderState = useFetchOrders();
  const _orderMenus = [
    {
      label: "All Orders",
      active: ordersActiveMenu === "all",
      onClick: () => {
        orderState.fetchAllOrders();
        setOrdersActiveMenu("all");
      },
    },
    {
      label: "Completed",
      active: ordersActiveMenu === "completed",
      onClick: () => {
        orderState.fetchAllOrders();
        setOrdersActiveMenu("completed");
      },
    },
    {
      label: "Canceled",
      active: ordersActiveMenu === "canceled",
      onClick: () => {
        orderState.fetchAllOrders();
        setOrdersActiveMenu("canceled");
      },
    },
  ];

  return (
    <ContextDashboard.Provider
      value={{
        _orderMenus,
        orderState,
      }}
    >
      {children}
    </ContextDashboard.Provider>
  );
};
ProviderDashboard.propTypes = {
  children: PropTypes.node,
};
