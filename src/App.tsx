import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home.tsx";
import Login from "./components/Login.tsx";

// Lazy-loaded Pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Project"));
const Transaction = lazy(() => import("./pages/Investments"));
const Customers = lazy(() => import("./pages/Customers"));

// Management Pages
const Project = lazy(()=> import("./pages/Project.tsx")
)
const NewProject = lazy(() => import("./pages/management/NewProject"));
const ProjectManagement = lazy(() => import("./pages/management/ProjectManagement")); 
// ✅ Fixed Typo


// Charts
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));

// Apps
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));

const UserDashboard = lazy(() => import("./pages/user/UserDashboard"));
const Projects = lazy(() => import("./pages/user/Projects"));
const BuyInsurance = lazy(() => import("./pages/user/BuyInsurance"));
const MyPolicies = lazy(() => import("./pages/user/MyPolicies"));
const ClaimsVerifications = lazy(() => import("./pages/user/ClaimsPage"));
const EmergencyFunds = lazy(() => import("./pages/user/EmergencyFunds"));
const Microloans = lazy(() => import("./pages/user/Microloans"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Home/>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />

          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />
           



          {/* Charts */}
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          {/* Apps */}
          <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />

          {/* Management */}
          <Route path="/admin/project/" element={<Project />} />
          <Route path="/admin/project/new" element={<NewProject />} />
          <Route path="/admin/project/:id" element={<ProjectManagement />} />
          
          {/* Updated Routes for Policies */}
          <Route path="/admin/transactions" element={<Transaction/>} /> {/* ✅ Better path name */}
         
          <Route path="/login" element={<Login />} />     

       {/* User Routes */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/projects" element={<Projects />} />
          <Route path="/user/buy-insurance" element={<BuyInsurance />} />
          <Route path="/user/my-policies" element={<MyPolicies />} />
          <Route path="/user/claims-verifications" element={<ClaimsVerifications />} />
          <Route path="/user/emergency-funds" element={<EmergencyFunds />} />
          <Route path="/user/microloans" element={<Microloans />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
