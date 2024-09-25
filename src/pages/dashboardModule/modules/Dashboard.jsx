import { memo } from "react";
import ContentWrapper from "../../../shared/ContentWrapper";
import { ArrowUpIcon, LAST_SEVEN_DAYS, SalesStatIcon, TOTAL_PROFIT_TITLE, TOTAL_SALES_TITLE, VS_LAST_SEVEN_DAYS, YenIcon } from "../../../utils";
import PropTypes from "prop-types";

const Dashboard = () => {
  return (
    <ContentWrapper title="Dashboardd">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-[18px]">
        <SalesCard />
        <ProfitCard />
        <CountryStatCard />
      </div>
    </ContentWrapper>
  );
};

export default Dashboard;

const SalesCard = memo(function TotalSalesCard() {
  const _total_sales = "350K"
  const _stats = "8.56K"
  return (
    <div className="card col-span-1 lg:col-span-3 p-[20px]">
      <div className="flex items-center justify-center gap-10 ">
        <img src={SalesStatIcon} className="h-[73px] w-[73px]" />
        <div className="border-r border-borderColor h-[150px]" />
        <div>
          <h4 className="font-semibold text-lg">{TOTAL_SALES_TITLE}</h4>
          <h4 className="text-secondary text-[14px] font-medium mt-1">{LAST_SEVEN_DAYS}</h4>
          <div className="mt-[30px] ">
            <h4 className="text-xxl font-bold">${_total_sales}</h4>
            <div className="mt-3 flex flex-wrap lg:flex-nowrap gap-2 items-center">
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
const ProfitCard = memo(function TotalSalesCard() {
  const _total_profit = "50K"
  const _stats = "12%"
  return <div className="card col-span-1 lg:col-span-2 p-[20px]">
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
  </div>;
});
const CountryStatCard = memo(function TotalSalesCard() {
  return <div className="card col-span-1 lg:col-span-4">Total Profit</div>;
});


const NormalLabel = memo(function NormalLabel({ text }) {
  return <span className="text-secondary text-[14px] font-medium">{text}</span>
})
NormalLabel.propTypes = {
  text: PropTypes.string.isRequired,
};
