import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const BarCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Investment & User Trends</h1>
        <section>
          <BarChart
            data_1={[5000, 8000, 7500, 12000, 15000, 9000, 20000]}
            data_2={[1000, 2500, 1800, 3000, 5000, 2700, 7000]}
            title_1="Investment Growth ($)"
            title_2="Active Users"
            bgColor_1={`hsl(210, 70%, 40%)`} // Blue for investments
            bgColor_2={`#F9A825`} // Yellow for user engagement
          />
          <h2>Monthly Investments & User Activity</h2>
        </section>
        <section>
          <BarChart
            horizontal={true}
            data_1={[5000, 8000, 7500, 12000, 15000, 9000, 20000, 7000, 6500, 11000, 14000, 17500]}
            data_2={[]}
            title_1="Investment Volume ($)"
            title_2=""
            bgColor_1={`hsl(220, 60%, 50%)`}
            bgColor_2=""
            labels={months}
          />
          <h2>Investment Trends Throughout the Year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
