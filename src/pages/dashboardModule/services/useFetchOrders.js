import { useEffect, useState } from "react";
import { _mockOrdersData } from "../constants";

const useFetchOrders = () => {
  const [orders, setOrders] = useState([]);
  const [processing, setProcessing] = useState(true);
  const fetchAllOrders = () => {
    setProcessing(true);
    fetch(`https://dummyjson.com/c/d7ba-8d7c-4bd7-9d6b?delay=1000`)
      .then((res) => res.json())
      .then((res) => {
        if (res?.data) {
          setOrders(res?.data);
        }
      })
      .catch(() => setOrders(_mockOrdersData?.data))
      .finally(() => setProcessing(false));
  };
  useEffect(() => {
    fetchAllOrders();
  }, []);
  return { orders, processing };
};

export default useFetchOrders;
