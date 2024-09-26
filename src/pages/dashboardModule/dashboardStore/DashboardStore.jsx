import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFetchOrders } from "../services";
const initialState = {};
export const ContextDashboard = React.createContext(initialState);
export const ProviderDashboard = ({ children }) => {
  const [ordersActiveMenu, setOrdersActiveMenu] = useState("all");
  const _orderMenus = [
    {
      label: "All Orders",
      active: ordersActiveMenu === "all",
      onClick: () => setOrdersActiveMenu("all"),
    },
    {
      label: "Completed",
      active: ordersActiveMenu === "completed",
      onClick: () => setOrdersActiveMenu("completed"),
    },
    {
      label: "Canceled",
      active: ordersActiveMenu === "canceled",
      onClick: () => setOrdersActiveMenu("canceled"),
    },
  ];
  const orderState = useFetchOrders();
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
