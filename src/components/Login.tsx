import { useState } from "react";


const Login = () => {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="login-container">
      <main className="login-card">
        <h1 className="login-title">LOGIN</h1>

        <div className="input-group">
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="input-group">
          <label>Date of birth</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <p className="login-info">Already Signed In Once</p>

        <button className="google-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="google-icon"
          />
          Sign in with Google
        </button>
      </main>
    </div>
  );
};

export default Login;
