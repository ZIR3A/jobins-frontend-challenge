import { memo } from "react";
import PersonalSalesInfo from "./PersonalSalesInfo";
import OrdersNav from "./OrdersNav";

const SalesWrappers = memo(function SalesWrappers() {
  return (
    <div className="mt-4">
      <div className="card px-10 py-5">
        <PersonalSalesInfo />
        <OrdersNav />
      </div>
    </div>
  );
});

SalesWrappers.propTypes = {};

export default SalesWrappers;
