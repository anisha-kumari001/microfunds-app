import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";


const BuyInsurance = () => {
  const [coverageType, setCoverageType] = useState("");
  const [coverageAmount, setCoverageAmount] = useState("₹1 Lakh");
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);

  const calculatePremium = () => "₹3333.33";

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="buy-insurance-container">
        <h2>Buy Insurance</h2>
        <p className="subtext">Secure your future with our insurance plans.</p>
        <div className="form-container">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Government ID</label>
          <input type="text" placeholder="Enter your ID" />

          <label>Coverage Type</label>
          <select value={coverageType} onChange={(e) => setCoverageType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="health">Health Insurance</option>
            <option value="car">Car Insurance</option>
          </select>

          <label>Coverage Amount (₹)</label>
          <select value={coverageAmount} onChange={(e) => setCoverageAmount(e.target.value)}>
            <option>₹1 Lakh</option>
            <option>₹5 Lakh</option>
            <option>₹10 Lakh</option>
          </select>

          <label>Start Date</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

          <p className="info"><strong>Premium Amount:</strong> {calculatePremium()}</p>
          <p className="info">
            <strong>End Date:</strong>{" "}
            {new Date(new Date(startDate).setFullYear(new Date(startDate).getFullYear() + 1))
              .toISOString()
              .split("T")[0]}
          </p>

          <button className="buy-button">Buy Now</button>
        </div>
      </main>
    </div>
  );
};

export default BuyInsurance;
