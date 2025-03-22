import { useState, ChangeEvent } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const NewProject = () => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  const [returns, setReturns] = useState<number>();
  const [units, setUnits] = useState<number>();
  const [document, setDocument] = useState<string>();

  const changeDocumentHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setDocument(reader.result);
      };
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="project-management">
        <article>
          <form>
            <h2>New Project</h2>
            <div>
              <label>Project Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Investment Amount</label>
              <input
                required
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Expected Returns</label>
              <input
                required
                type="number"
                placeholder="Returns"
                value={returns}
                onChange={(e) => setReturns(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Units Purchased</label>
              <input
                required
                type="number"
                placeholder="Units"
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
              />
            </div>

            <div>
              <label>Investment Document</label>
              <input required type="file" onChange={changeDocumentHandler} />
            </div>

            {document && <img src={document} alt="Investment Document" />}

            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProject;
