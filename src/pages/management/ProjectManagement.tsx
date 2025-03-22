import { useState, ChangeEvent, FormEvent } from "react";
import { useParams } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

const defaultImage =
  "https://images.unsplash.com/photo-1606811849847-6e8d9c601c46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400";

const ProjectManagement = () => {
  const { id } = useParams<{ id: string }>();
  
  const [name, setName] = useState("John Doe");
  const [amount, setAmount] = useState(5000);
  const [returns, setReturns] = useState(10);
  const [units, setUnits] = useState(50);
  const [document, setDocument] = useState(defaultImage);
  const [status, setStatus] = useState("Processing");

  const handleDocumentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") setDocument(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="project-management">
        <section>
          <strong>Project ID - {id}</strong>
          <img src={document} alt="Project Document" />
          <p>{name}</p>
          <h3>${amount}</h3>
          <span>Expected Returns: {returns}%</span>
          <span>Units Purchased: {units}</span>
          <p>Status: {status}</p>
        </section>

        <article>
          <form onSubmit={handleSubmit}>
            <h2>Manage Project</h2>
            <div>
              <label>Project Owner</label>
              <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label>Project Budget</label>
              <input required type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
            </div>
            <div>
              <label>Expected Returns (%)</label>
              <input required type="number" value={returns} onChange={(e) => setReturns(Number(e.target.value))} />
            </div>
            <div>
              <label>Units Allocated</label>
              <input required type="number" value={units} onChange={(e) => setUnits(Number(e.target.value))} />
            </div>
            <div>
              <label>Project Document</label>
              <input required type="file" onChange={handleDocumentChange} />
            </div>
            <div>
              <label>Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Processing">Processing</option>
                <option value="Completed">Completed</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProjectManagement;
