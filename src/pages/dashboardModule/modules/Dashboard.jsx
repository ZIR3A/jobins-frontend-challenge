import { ContentWrapper } from "../../../shared";
import { CardsWrapper, OrdersListing, SalesWrappers } from "../components";
import { ProviderDashboard } from "../dashboardStore/DashboardStore";

const Dashboard = () => {
  return (
    <ProviderDashboard>
      <ContentWrapper title="Dashboard">
        <CardsWrapper />
        <SalesWrappers />
        <OrdersListing />
      </ContentWrapper>
    </ProviderDashboard>
  );
};

export default Dashboard;
