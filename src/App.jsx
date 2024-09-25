import Dashboard from "./pages/dashboardModule/modules/Dashboard";
import Layout from "./shared/Layout";
function App() {
  return (
    <Layout>
      {/* DIfferent routes can be defined here */}
      {/* For now its only dashboard */}
      <Dashboard />
    </Layout>
  );
}

export default App;
