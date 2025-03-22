import { useState } from "react";
import { Link } from "react-router-dom";

const verificationData: { id: string; document: string; submittedOn: string; status: "Verified" | "Pending" | "Rejected" }[] = Array.from(
  { length: 12 },
  (_, i) => ({
    id: `DOC${2000 + i}`,
    document: i % 2 === 0 ? "Aadhar Card" : "Driving License",
    submittedOn: `2024-${(i % 12) + 1}-05`,
    status: i % 3 === 0 ? "Verified" : i % 3 === 1 ? "Pending" : "Rejected",
  })
);

const DOCS_PER_PAGE = 5;

const statusColors: Record<"Verified" | "Pending" | "Rejected", string> = {
  Verified: "bg-green-500",
  Pending: "bg-yellow-500",
  Rejected: "bg-red-500",
};

const Verification = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.ceil(verificationData.length / DOCS_PER_PAGE);

  const getStatusBadge = (status: "Verified" | "Pending" | "Rejected"): JSX.Element => (
    <span className={`${statusColors[status]} text-white px-3 py-1 rounded-full`}>{status}</span>
  );

  const startIndex: number = (currentPage - 1) * DOCS_PER_PAGE;
  const paginatedDocs = verificationData.slice(startIndex, startIndex + DOCS_PER_PAGE);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-4xl shadow-lg p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800">Verification Documents</h2>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Document ID</th>
              <th className="p-3 text-left">Document Name</th>
              <th className="p-3 text-left">Submitted On</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedDocs.map((doc) => (
              <tr key={doc.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{doc.id}</td>
                <td className="p-3">{doc.document}</td>
                <td className="p-3">{doc.submittedOn}</td>
                <td className="p-3">{getStatusBadge(doc.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span className="text-gray-700 font-semibold">Page {currentPage} of {totalPages}</span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
