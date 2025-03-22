import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import { Column } from "react-table";
import { useState, useCallback } from "react";
import TableHOC from "../../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface PolicyType {
  policyId: string;
  policyName: string;
  coverage: string;
  premium: string;
  status: string;
  action: ReactElement;
}

const columns: Column<PolicyType>[] = [
  {
    Header: "Policy ID",
    accessor: "policyId",
  },
  {
    Header: "Policy Name",
    accessor: "policyName",
  },
  {
    Header: "Coverage",
    accessor: "coverage",
  },
  {
    Header: "Premium",
    accessor: "premium",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const policies: PolicyType[] = [
  {
    policyId: "P-001",
    policyName: "Health Insurance",
    coverage: "$100,000",
    premium: "$200/month",
    status: "Active",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    policyId: "P-002",
    policyName: "Car Insurance",
    coverage: "$50,000",
    premium: "$100/month",
    status: "Expired",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const MyPolicies = () => {
  const [data] = useState<PolicyType[]>(policies);
  const navigate = useNavigate();

  const Table = useCallback(
    TableHOC<PolicyType>(columns, data, "dashboard-policy-box", "My Policies", true),
    []
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        {Table()}
        <button
          onClick={() => navigate("/buy-insurance")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Buy Insurance
        </button>
      </main>
    </div>
  );
};

export default MyPolicies;
