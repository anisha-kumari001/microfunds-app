import { Link } from "react-router-dom";
import { FaFileInvoice, FaShieldAlt, FaMoneyBillWave, FaHandHoldingUsd } from "react-icons/fa";
import { MdVerifiedUser, MdWork } from "react-icons/md";


const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <aside className="sidebar">
        <h2>User Dashboard</h2>
        <nav>
          <Link to="/user/projects"><MdWork /> Projects</Link>
          <Link to="/user/buy-insurance"><FaShieldAlt /> Buy Insurance</Link>
          <Link to="/user/my-policies"><FaFileInvoice /> My Policies</Link>
          <Link to="/user/claims-verifications"><MdVerifiedUser /> Claims & Verifications</Link>
          <Link to="/user/emergency-funds"><FaMoneyBillWave /> Emergency Funds</Link>
          <Link to="/user/microloans"><FaHandHoldingUsd /> Microloans</Link>
        </nav>
      </aside>
      <main className="content">
        <h1>Welcome to Your Dashboard</h1>
        <p>Select an option from the menu to get started.</p>
      </main>
    </div>
  );
};

export default UserDashboard;
