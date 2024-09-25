import { memo } from 'react'
import ContentWrapper from '../../../shared/ContentWrapper'

const Dashboard = () => {
  return (
    <ContentWrapper title="Dashboardd">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-[18px]">
        <SalesCard />
        <ProfitCard />
        <CountryStatCard />
      </div>
    </ContentWrapper>
  )
}

export default Dashboard

const SalesCard = memo(function TotalSalesCard() {
  return <div className="card col-span-1 md:col-span-3">
    Total Sales
  </div>
})
const ProfitCard = memo(function TotalSalesCard() {
  return <div className="card col-span-1 md:col-span-2">
    Total Profit
  </div>
})
const CountryStatCard = memo(function TotalSalesCard() {
  return <div className="card col-span-1 md:col-span-4">
    Total Profit
  </div>
})