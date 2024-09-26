import { useEffect, useState } from "react";
import { _mockOrdersData } from "../constants";

const useFetchOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    limit: 10,
    page: 1,
    total: 0,
  });
  const [processing, setProcessing] = useState(true);
  const fetchAllOrders = () => {
    setProcessing(true);
    fetch(`https://dummyjson.com/c/d7ba-8d7c-4bd7-9d6b?delay=1000`)
      .then((res) => res.json())
      .then((res) => {
        if (res?.data) {
          setOrders(res?.data);
          setFilters((pre) => ({ ...pre, total: res?.data?.length }));
        }
      })
      .catch(() => {
        setOrders(_mockOrdersData?.data);
        setFilters((pre) => ({ ...pre, total: _mockOrdersData?.data?.length }));
      })
      .finally(() => setProcessing(false));
  };
  useEffect(() => { 
    fetchAllOrders(); 
  }, [filters.limit, filters.page]); 
  return { orders, processing, setFilters, filters, fetchAllOrders };
};

export default useFetchOrders;
