"use client";
import { Link } from "react-router-dom";

const claimsData = [
  { id: "C1234", policy: "Health Insurance", amount: "$2,500", status: "Pending" },
  { id: "C5678", policy: "Car Insurance", amount: "$1,200", status: "Approved" },
  { id: "C9101", policy: "Home Insurance", amount: "$5,000", status: "Rejected" },
];

const statusColors = {
  Pending: "bg-yellow-500",
  Approved: "bg-green-500",
  Rejected: "bg-red-500",
};

const ClaimsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="shadow-lg p-4 rounded-lg bg-white">
        <h2 className="text-xl font-semibold">Claims & Verification</h2>
        <div className="flex justify-end mt-4">
          <Link to="/verification">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Go to Verification
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-2">Claim ID</th>
                <th className="text-left px-4 py-2">Policy</th>
                <th className="text-left px-4 py-2">Amount</th>
                <th className="text-left px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {claimsData.map((claim) => (
                <tr key={claim.id} className="border-b">
                  <td className="px-4 py-2">{claim.id}</td>
                  <td className="px-4 py-2">{claim.policy}</td>
                  <td className="px-4 py-2">{claim.amount}</td>
                  <td className="px-4 py-2">
  <span className={`${statusColors[claim.status as keyof typeof statusColors] || "bg-gray-400"} text-white px-3 py-1 rounded-full`}>
    {claim.status}
  </span>
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClaimsPage;
