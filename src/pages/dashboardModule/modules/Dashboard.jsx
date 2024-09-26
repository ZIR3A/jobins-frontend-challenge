import ContentWrapper from "../../../shared/ContentWrapper";
import SalesCard from "../components/SalesCard";
import ProfitCard from "../components/ProfitCard";
import CountryStatCard from "../components/CountryStatCard";
import PersonalSalesInfo from "../components/PersonalSalesInfo";
import { useState } from "react";
import Dropdown from "../../../shared/Dropdown";
import BasicInput from "../../../shared/BasicInput";
import Table, { TableColumn } from "../../../shared/Table";

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
  const _filterDateRangeOptions = [
    {
      label: "Daily",
      active: true,
      slug: "days",
    },
    {
      label: "Weekly",
      active: false,
      slug: "weeks",
    },
    {
      label: "Monthly",
      active: false,
      slug: "months",
    },
  ];
  const _tableHeaders = [
    {
      label: "ID",
    },
    {
      label: "Customer",
    },
    {
      label: "Date",
    },
    {
      label: "Total",
    },
    {
      label: "Method",
    },
    {
      label: "Status",
    },
    {
      label: "Actions",
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
      <div className="flex flex-wrap md:flex-no-wrap gap-4 md:gap-0 justify-between mt-4">
        <div className="flex  gap-[14px]">
          <Dropdown className="border px-3 py-1 text-secondary rounded-sm text-[15px] gap-[6px] bg-white" label={`Status: All`} options={_filterStatusOptions} />
          <div>
            <BasicInput inputClassName="border-none rounded-sm w-[200px] placeholder-secondary placeholder:font-normal placeholder:text-[14px] placeholder-opacity-0" placeHolder="Search..." />
          </div>
        </div>
        <Dropdown className="border px-3 py-1 text-secondary rounded-sm text-[15px] gap-[6px] bg-white" label={`Filter by date range`} options={_filterDateRangeOptions} />
      </div>
      <div className="mt-4">
        <div className="card">
          <Table headers={_tableHeaders}>
            <tr className="bg-white border-b hover:bg-tertiary text-primary text-[15px]">
              <TableColumn value="#5089" />
              <TableColumn value="Joseph Wheeler" />
              <TableColumn value="6 April, 2023" />
              <TableColumn value="$2999" />
              <TableColumn value="CC" />
              <TableColumn value={<span>Pending</span>} />
              <TableColumn
                value={
                  <a href="#" className="font-medium text-blue-primary hover:underline">
                    View Details
                  </a>
                }
              />
            </tr>
            <tr className="bg-white border-b hover:bg-tertiary text-primary text-[15px]">
              <TableColumn value="#5089" />
              <TableColumn value="Joseph Wheeler" />
              <TableColumn value="6 April, 2023" />
              <TableColumn value="$2999" />
              <TableColumn value="CC" />
              <TableColumn value={<span>Pending</span>} />
              <TableColumn
                value={
                  <a href="#" className="font-medium text-blue-primary hover:underline">
                    View Details
                  </a>
                }
              />
            </tr>
            <tr className="bg-white border-b hover:bg-tertiary text-primary text-[15px]">
              <TableColumn value="#5089" />
              <TableColumn value="Joseph Wheeler" />
              <TableColumn value="6 April, 2023" />
              <TableColumn value="$2999" />
              <TableColumn value="CC" />
              <TableColumn value={<span>Pending</span>} />
              <TableColumn
                value={
                  <a href="#" className="font-medium text-blue-primary hover:underline">
                    View Details
                  </a>
                }
              />
            </tr>
            <tr className="bg-white border-b hover:bg-tertiary text-primary text-[15px]">
              <TableColumn value="#5089" />
              <TableColumn value="Joseph Wheeler" />
              <TableColumn value="6 April, 2023" />
              <TableColumn value="$2999" />
              <TableColumn value="CC" />
              <TableColumn value={<span>Pending</span>} />
              <TableColumn
                value={
                  <a href="#" className="font-medium text-blue-primary hover:underline">
                    View Details
                  </a>
                }
              />
            </tr>
          </Table>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Dashboard;
