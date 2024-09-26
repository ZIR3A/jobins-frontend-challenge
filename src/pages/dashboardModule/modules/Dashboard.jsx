import ContentWrapper from "../../../shared/ContentWrapper";
import SalesCard from "../components/SalesCard";
import ProfitCard from "../components/ProfitCard";
import CountryStatCard from "../components/CountryStatCard";
import PersonalSalesInfo from "../components/PersonalSalesInfo";
import { useState } from "react";
import Dropdown from "../../../shared/Dropdown";

const Dashboard = () => {
  const [ordersActiveMenu, setOrdersActiveMenu] = useState("all");
  const _orderMenus = [
    {
      label: "All Orders",
      active: ordersActiveMenu === "all",
      onClick: () => setOrdersActiveMenu("all"),
    },
    {
      label: "Completed",
      active: ordersActiveMenu === "completed",
      onClick: () => setOrdersActiveMenu("completed"),
    },
    {
      label: "Canceled",
      active: ordersActiveMenu === "canceled",
      onClick: () => setOrdersActiveMenu("canceled"),
    },
  ];
  const _filterStatusOptions = [
    {
      label: "All",
      active: true,
      slug: "all",
    },
    {
      label: "Completed",
      active: false,
      slug: "completed",
    },
    {
      label: "Canceled",
      active: false,
      slug: "canceled",
    },
  ];
  return (
    <ContentWrapper title="Dashboardd">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-[18px]">
        <SalesCard />
        <ProfitCard />
        <CountryStatCard />
      </div>
      <div className="mt-4">
        <div className="card px-10 py-5">
          <PersonalSalesInfo />
          <nav className="mt-6 md:mt-2">
            {_orderMenus?.map(({ active, label, onClick }, _index) => (
              <span key={_index} className={`text-nowrap cursor-pointer py-6 px-1 md:px-6 text-[15px] ${active ? "border-b-2 border-blue-primary text-blue-primary" : "text-secondary"}`} onClick={onClick}>
                {label}
              </span>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-4">
        <Dropdown className="border px-3 py-1 text-secondary rounded-sm text-[15px] gap-[6px] bg-white" label={`Status: All`} options={_filterStatusOptions} />
      </div>
    </ContentWrapper>
  );
};

export default Dashboard;
