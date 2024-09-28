import { memo } from "react";
import PersonalSalesInfo from "./PersonalSalesInfo";
import OrdersNav from "./OrdersNav";

const SalesWrappers = memo(function SalesWrappers() {
  return (
    <div className="mt-4 dashboard-content-anims">
      <div className="card px-4 lg:px-10 pt-5">
        <PersonalSalesInfo />
        <OrdersNav />
      </div>
    </div>
  );
});

SalesWrappers.propTypes = {};

export default SalesWrappers;
