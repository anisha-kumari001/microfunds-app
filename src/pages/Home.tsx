import { Link } from "react-router-dom";
import { FaPiggyBank, FaLifeRing, FaCoins, FaShieldCat, FaChartLine, FaLightbulb } from "react-icons/fa6";
import { motion } from "framer-motion";


const features = [
  { icon: <FaPiggyBank />, title: "Smart Savings", description: "Grow your wealth with high-yield accounts." },
  { icon: <FaLifeRing />, title: "Financial Security", description: "Protect your assets with trusted insurance plans." },
  { icon: <FaCoins />, title: "Investments", description: "Diversify your portfolio for maximum returns." },
  { icon: <FaShieldCat />, title: "Secure Transactions", description: "Your data and money are protected with encryption." },
  { icon: <FaChartLine />, title: "Real-Time Insights", description: "AI-powered analytics for better financial decisions." },
  { icon: <FaLightbulb />, title: "Goal Planning", description: "Plan your future with easy-to-use tools." },
];

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to AquaWealth</h1>
        <p>Secure your future with smart financial solutions.</p>
        <div className="hero-buttons">
          <Link to="/admin/dashboard">
            <button className="btn primary">Admin Dashboard</button>
          </Link>
          <Link to="/login">
            <button className="btn secondary">Login</button>
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose AquaWealth?</h2>
        <div className="feature-grid">
          {features.map((feature, i) => (
            <motion.div
              className="feature-card"
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
