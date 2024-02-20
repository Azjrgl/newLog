import Image from "next/image";
import { DashHeader } from "./DashboardHeader";
import { DashboardCard } from "./DashboardCard";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col items-center ">
      <DashHeader />
      <DashboardCard />
    </div>
  );
};

export default Dashboard;
