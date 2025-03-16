import ChartSection from "@/components/Admin/Dashboard/ChartSection";
import Header from "@/components/Admin/Dashboard/Header";

const Dashboard = () => {
  return (
    <div className="bg-[#F5F6FA] h-[91vh] sm:overflow-y-auto px-5 py-10">
      <h1 className="text-3xl font-medium mb-5">Dashboard</h1>
      <Header />
      <ChartSection />
    </div>
  );
};

export default Dashboard;
