import ContentWrapper from "../../../shared/ContentWrapper";
import SalesCard from "../components/SalesCard";
import ProfitCard from "../components/ProfitCard";
import CountryStatCard from "../components/CountryStatCard";
import PersonalSalesInfo from "../components/PersonalSalesInfo";


const Dashboard = () => {
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
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Dashboard;

