"use client";

import { useState } from "react";

const EmergencyFund = () => {
  const [balance, setBalance] = useState<number>(5000); // Initial balance
  const [target, setTarget] = useState<number>(10000); // Target savings
  const [amount, setAmount] = useState<number>(0);
  const [transactions, setTransactions] = useState<{ type: string; amount: number }[]>([]);

  const handleAddFunds = () => {
    if (amount <= 0) return;
    setBalance((prev) => prev + amount);
    setTransactions([{ type: "Deposit", amount }, ...transactions]);
    setAmount(0);
  };

  const handleWithdrawFunds = () => {
    if (amount <= 0 || amount > balance) return;
    setBalance((prev) => prev - amount);
    setTransactions([{ type: "Withdrawal", amount }, ...transactions]);
    setAmount(0);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center">Emergency Fund Manager</h2>

      <div className="mt-4">
        <p className="text-lg font-semibold">Current Balance: <span className="text-green-600">${balance}</span></p>
        <p className="text-lg">Target: <span className="font-semibold">${target}</span></p>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${(balance / target) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4">
        <input
          type="number"
          className="w-full p-2 border rounded"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div className="flex gap-2 mt-2">
          <button className="flex-1 bg-green-500 text-white p-2 rounded" onClick={handleAddFunds}>
            Add Funds
          </button>
          <button
            className="flex-1 bg-red-500 text-white p-2 rounded disabled:opacity-50"
            onClick={handleWithdrawFunds}
            disabled={amount > balance}
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Transaction History</h3>
        <ul className="mt-2">
          {transactions.length === 0 ? (
            <p className="text-gray-500">No transactions yet.</p>
          ) : (
            transactions.map((tx, index) => (
              <li key={index} className={`p-2 rounded mt-1 ${tx.type === "Deposit" ? "bg-green-100" : "bg-red-100"}`}>
                {tx.type}: ${tx.amount}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default EmergencyFund;
