import ContentWrapper from "../../../shared/ContentWrapper";
import SalesCard from "../components/SalesCard";
import ProfitCard from "../components/ProfitCard";
import CountryStatCard from "../components/CountryStatCard";

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
