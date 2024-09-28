import { memo } from "react";
import { ArrowUpIcon, LAST_SEVEN_DAYS, SalesStatIcon, TOTAL_SALES_TITLE, VS_LAST_SEVEN_DAYS } from "../../../utils";
import NormalLabel from "./NormalLabel";

const SalesCard = memo(function TotalSalesCard() {
  const _total_sales = "350K";
  const _stats = "8.56K";
  return (
    <div className="card col-span-1 lg:col-span-3 dashboard-card-wrapper me-0 md:me-4 lg:me-0">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-evenly gap-2 md:gap-10 ">
        <img src={SalesStatIcon} className="md:h-[64px] lg:h-[73px] md:w-[64px] lg:w-[73px]" />
        <div className="border-r-0 sm:border-r border-borderColor h-[150px]" />
        <div>
          <h4 className="font-semibold text-md lg:text-lg">{TOTAL_SALES_TITLE}</h4>
          <h4 className="text-secondary text-[14px] font-medium mt-1">{LAST_SEVEN_DAYS}</h4>
          <div className="mt-[30px] ">
            <h4 className="text-xl lg:text-xxl font-bold">${_total_sales}</h4>
            <div className="mt-3 flex flex-wrap gap-2 items-center">
              <span className="text-green-primary inline-flex items-center justify-center gap-1 text-[14px] font-medium">
                <img src={ArrowUpIcon} width={16} height={16} /> {_stats}
              </span>
              <NormalLabel text={VS_LAST_SEVEN_DAYS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SalesCard;
