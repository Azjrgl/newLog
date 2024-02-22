import { DashHeader } from "@/components/DashboardHeader";
import RecordsPage from "@/components/RecordsPage";

function Index() {
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100">
      <DashHeader />
      <RecordsPage />
    </div>
  );
}
export default Index;
