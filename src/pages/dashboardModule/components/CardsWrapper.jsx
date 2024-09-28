import { memo } from "react";
import SalesCard from "./SalesCard";
import ProfitCard from "./ProfitCard";
import CountryStatCard from "./CountryStatCard";

const CardsWrapper = memo(function CardsWrapper() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 lg:gap-[18px]">
      <SalesCard />
      <ProfitCard />
      <CountryStatCard />
    </div>
  );
});

CardsWrapper.propTypes = {};

export default CardsWrapper;
