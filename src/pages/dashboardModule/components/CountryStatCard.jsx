import { memo } from "react";
import { AUSIcon, BrazilIcon, USAIcon } from "../../../utils";
import CountryWiseCardStat from "./CountryWiseCardStat";
const CountryStatCard = memo(function TotalSalesCard() {
  const _countryInfosUSA = {
    icon: USAIcon,
    title: "United States",
    marginAmount: "30k",
    percentage: "25.8%",
    isProfit: true,
  };
  const _countryInfosBra = {
    icon: BrazilIcon,
    title: "Brazil",
    marginAmount: "26k",
    percentage: "16.2%",
    isProfit: false,
  };
  const _countryInfosAUS = {
    icon: AUSIcon,
    title: "Australia",
    marginAmount: "17k",
    percentage: "11.9%",
    isProfit: false,
  };
  return (
    <div className="card col-span-1 md:col-span-4 dashboard-card-wrapper mt-4 md:mt-4 lg:mt-0">
      <ul className="space-y-[18px]">
        <li>
          <CountryWiseCardStat {..._countryInfosUSA} />
        </li>
        <li>
          <CountryWiseCardStat {..._countryInfosBra} />
        </li>
        <li>
          <CountryWiseCardStat {..._countryInfosAUS} />
        </li>
      </ul>
    </div>
  );
});
export default CountryStatCard;
