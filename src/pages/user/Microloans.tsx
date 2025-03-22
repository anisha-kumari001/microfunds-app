"use client";

import { useState } from "react";

type Loan = {
  id: number;
  amount: number;
  status: "Pending" | "Approved" | "Repaid";
  balance: number;
};

const MicroLoanApp = () => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [repayAmount, setRepayAmount] = useState<number>(0);

  // Request a new loan
  const requestLoan = () => {
    if (loanAmount <= 0) return;
    const newLoan: Loan = {
      id: Date.now(),
      amount: loanAmount,
      status: "Pending",
      balance: loanAmount,
    };
    setLoans([newLoan, ...loans]);
    setLoanAmount(0);
  };

  // Approve a loan
  const approveLoan = (id: number) => {
    setLoans(loans.map((loan) => (loan.id === id ? { ...loan, status: "Approved" } : loan)));
  };

  // Repay a loan
  const repayLoan = (id: number) => {
    setLoans(
      loans.map((loan) => {
        if (loan.id === id) {
          const newBalance = loan.balance - repayAmount;
          return {
            ...loan,
            balance: newBalance,
            status: newBalance <= 0 ? "Repaid" : loan.status,
          };
        }
        return loan;
      })
    );
    setRepayAmount(0);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center">Microloan Management</h2>

      {/* Request Loan */}
      <div className="mt-4">
        <input
          type="number"
          className="w-full p-2 border rounded"
          placeholder="Enter loan amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded mt-2" onClick={requestLoan}>
          Request Loan
        </button>
      </div>

      {/* Loan List */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Loan History</h3>
        {loans.length === 0 ? (
          <p className="text-gray-500">No loans requested.</p>
        ) : (
          loans.map((loan) => (
            <div key={loan.id} className="p-3 mt-2 border rounded bg-gray-100">
              <p>Amount: <span className="font-semibold">${loan.amount}</span></p>
              <p>Balance: <span className="font-semibold">${loan.balance}</span></p>
              <p>Status: <span className={`font-semibold ${loan.status === "Approved" ? "text-green-500" : loan.status === "Repaid" ? "text-gray-500" : "text-yellow-500"}`}>{loan.status}</span></p>

              {loan.status === "Pending" && (
                <button className="mt-2 bg-green-500 text-white p-1 rounded" onClick={() => approveLoan(loan.id)}>
                  Approve Loan
                </button>
              )}

              {loan.status === "Approved" && (
                <div className="mt-2">
                  <input
                    type="number"
                    className="w-full p-2 border rounded"
                    placeholder="Enter repayment amount"
                    value={repayAmount}
                    onChange={(e) => setRepayAmount(Number(e.target.value))}
                  />
                  <button
                    className="w-full bg-red-500 text-white p-2 rounded mt-2"
                    onClick={() => repayLoan(loan.id)}
                    disabled={repayAmount <= 0 || repayAmount > loan.balance}
                  >
                    Repay Loan
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MicroLoanApp;
