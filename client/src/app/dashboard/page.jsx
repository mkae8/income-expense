import { Graphical } from "@/components/dashboardComps/Graphical";
import { Header } from "@/components/dashboardComps/Header";
import { IncomeExpense } from "@/components/dashboardComps/IncomeExpense";

const Dashboard = () => {
  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center">
        <Header />
        <IncomeExpense />
        <Graphical />
      </div>
    </>
  );
};

export default Dashboard;
