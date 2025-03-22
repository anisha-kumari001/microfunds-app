import AdminSidebar from "../../components/AdminSidebar";
import { DoughnutChart, PieChart } from "../../components/Charts";
import { investmentCategories } from "../../assets/data.json";

const PieCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Investment & Financial Insights</h1>

        {/* Transaction Status Ratio */}
        <section>
          <div>
            <PieChart
              labels={["Pending", "Completed", "Failed"]}
              data={[10, 45, 5]}
              backgroundColor={[
                `hsl(200,80%, 70%)`,
                `hsl(140,80%, 50%)`,
                `hsl(0,80%, 50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Transaction Status Ratio</h2>
        </section>

        {/* Investment Type Ratio */}
        <section>
          <div>
            <DoughnutChart
              labels={investmentCategories.map((i) => i.type)}
              data={investmentCategories.map((i) => i.percentage)}
              backgroundColor={investmentCategories.map(
                (i) => `hsl(${i.percentage * 4}, ${i.percentage}%, 50%)`
              )}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <h2>Investment Types Ratio</h2>
        </section>

        {/* Asset Allocation */}
        <section>
          <div>
            <DoughnutChart
              labels={["Liquid Assets", "Fixed Assets"]}
              data={[60, 40]}
              backgroundColor={["hsl(269,80%,40%)", "rgb(53, 162, 255)"]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2>Asset Allocation</h2>
        </section>

        {/* Expense Breakdown */}
        <section>
          <div>
            <DoughnutChart
              labels={["Marketing", "Operations", "R&D", "Salaries", "Profit"]}
              data={[25, 30, 15, 20, 10]}
              backgroundColor={[
                "hsl(110,80%,40%)",
                "hsl(19,80%,40%)",
                "hsl(69,80%,40%)",
                "hsl(300,80%,40%)",
                "rgb(53, 162, 255)",
              ]}
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2>Expense Breakdown</h2>
        </section>

        {/* Investor Age Groups */}
        <section>
          <div>
            <PieChart
              labels={["Young Investors (Below 25)", "Mid-Age (25-50)", "Senior (50+)"]}
              data={[50, 120, 30]}
              backgroundColor={[
                `hsl(10, ${80}%, 80%)`,
                `hsl(10, ${80}%, 50%)`,
                `hsl(10, ${40}%, 50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Investor Age Groups</h2>
        </section>

        {/* Admin vs. Investors */}
        <section>
          <div>
            <DoughnutChart
              labels={["Admin", "Investors"]}
              data={[10, 500]}
              backgroundColor={[`hsl(335, 100%, 38%)`, "hsl(44, 98%, 50%)"]}
              offset={[0, 80]}
            />
          </div>
          <h2>Platform Users: Admin vs. Investors</h2>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
