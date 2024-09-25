import { memo } from "react";
import ContentWrapper from "../../../shared/ContentWrapper";
import { ArrowUpIcon, SalesStatIcon } from "../../../utils";

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
    <div className="card col-span-1 lg:col-span-3">
      <div className="flex items-center justify-center gap-10 p-[20px]">
        <img src={SalesStatIcon} className="h-[73px] w-[73px]" />
        <div className="border-r border-borderColor h-[150px]" />
        <div>
          <h4 className="font-semibold text-lg">Total Sales & Costs</h4>
          <h4 className="text-secondary text-[14px] font-medium mt-1">Last 7 days</h4>
          <h4 className="mt-[30px] text-xxl font-bold">${_total_sales}</h4>
          <div className="mt-3 flex gap-2 items-center">
            <span className="text-green-primary inline-flex items-center justify-center gap-1 text-[14px] font-medium">
              <img src={ArrowUpIcon} width={16} height={16} /> {_stats}
            </span>
            <span className="text-secondary text-[14px] font-medium">vs last 7 days</span>
          </div>
        </div>
      </div>
    </div>
  );
});
const ProfitCard = memo(function TotalSalesCard() {
  return <div className="card col-span-1 lg:col-span-2">Total Profit</div>;
});
const CountryStatCard = memo(function TotalSalesCard() {
  return <div className="card col-span-1 lg:col-span-4">Total Profit</div>;
});
