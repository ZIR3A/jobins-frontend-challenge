import { ContentWrapper } from "../../../shared";
import { CardsWrapper, OrdersListing, SalesWrappers, TableFilters } from "../components";
import { ProviderDashboard } from "../dashboardStore/DashboardStore";

const Dashboard = () => {
  return (
    <ProviderDashboard>
      <ContentWrapper title="Dashboardd">
        <CardsWrapper />
        <SalesWrappers />
        <TableFilters />
        <OrdersListing />
      </ContentWrapper>
    </ProviderDashboard>
  );
};

export default Dashboard;
