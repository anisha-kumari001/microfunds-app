import AdminSidebar from "../../components/AdminSidebar";
import { LineChart } from "../../components/Charts";

const months = [
  "January", "February", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

const LineCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Financial Performance</h1>
        
        <section>
          <LineChart
            data={[500, 1200, 1800, 2500, 3000, 4200, 5300, 6000, 7500, 8200, 9100, 10000]}
            label="Active Investors"
            borderColor="rgb(53, 162, 255)"
            backgroundColor="rgba(53, 162, 255,0.5)"
            labels={months}
          />
          <h2>Growth of Investors</h2>
        </section>

        <section>
          <LineChart
            data={[10000, 25000, 40000, 55000, 70000, 85000, 100000, 120000, 140000, 160000, 180000, 200000]}
            backgroundColor={"hsla(269,80%,40%,0.4)"}
            borderColor={"hsl(269,80%,40%)"}
            label="Total Transactions"
            labels={months}
          />
          <h2>Monthly Transactions</h2>
        </section>

        <section>
          <LineChart
            data={[20000, 50000, 75000, 100000, 130000, 165000, 190000, 220000, 250000, 280000, 300000, 350000]}
            backgroundColor={"hsla(129,80%,40%,0.4)"}
            borderColor={"hsl(129,80%,40%)"}
            label="Total Investments"
            labels={months}
          />
          <h2>Total Investment Growth</h2>
        </section>

        <section>
          <LineChart
            data={[5000, 12000, 20000, 28000, 35000, 45000, 52000, 60000, 72000, 81000, 92000, 100000]}
            backgroundColor={"hsla(29,80%,40%,0.4)"}
            borderColor={"hsl(29,80%,40%)"}
            label="Monthly Returns"
            labels={months}
          />
          <h2>Investment Returns</h2>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;
