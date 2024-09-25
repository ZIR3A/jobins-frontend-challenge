import { memo } from "react";
import { ArrowUpIcon, LAST_SEVEN_DAYS, TOTAL_PROFIT_TITLE, VS_LAST_SEVEN_DAYS, YenIcon } from "../../../utils";
import NormalLabel from "./NormalLabel";

const ProfitCard = memo(function TotalSalesCard() {
  const _total_profit = "50K";
  const _stats = "12%";
  return (
    <div className="card col-span-1 lg:col-span-2 p-[20px]">
      <div className="flex gap-[22px]">
        <img src={YenIcon} className="h-[43px] w-[43px]" />
        <div>
          <h4 className="font-semibold text-lg">{TOTAL_PROFIT_TITLE}</h4>
          <h4 className="text-secondary text-[14px] font-medium mt-1">{LAST_SEVEN_DAYS}</h4>
        </div>
      </div>
      <div className="mt-[30px]">
        <h4 className="text-xxl font-bold">{_total_profit}</h4>
        <div className="mt-3 flex flex-wrap lg:flex-nowrap gap-2 items-center">
          <span className="text-green-primary inline-flex items-center justify-center gap-1 text-[14px] font-medium">
            <img src={ArrowUpIcon} width={16} height={16} /> {_stats}
          </span>
          <NormalLabel text={VS_LAST_SEVEN_DAYS} />
        </div>
      </div>
    </div>
  );
});
export default ProfitCard;
