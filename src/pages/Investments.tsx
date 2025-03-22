import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar";
import { ReactElement, useState, useCallback } from "react";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  investor: string;
  investment: number;
  returns: number;
  units: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Investor",
    accessor: "investor",
  },
  {
    Header: "Investment Amount",
    accessor: "investment",
  },
  {
    Header: "Returns",
    accessor: "returns",
  },
  {
    Header: "Units Purchased",
    accessor: "units",
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

const arr: DataType[] = [
  {
    investor: "John Doe",
    investment: 10000,
    returns: 1200,
    units: 5,
    status: <span className="blue">Pending</span>,
    action: <Link to="/admin/investment/john_doe">Manage</Link>,
  },
  {
    investor: "Jane Smith",
    investment: 25000,
    returns: 5000,
    units: 10,
    status: <span className="green">Completed</span>,
    action: <Link to="/admin/investment/jane_smith">Manage</Link>,
  },
  {
    investor: "Robert Brown",
    investment: 15000,
    returns: 1800,
    units: 7,
    status: <span className="yellow">In Progress</span>,
    action: <Link to="/admin/investment/robert_brown">Manage</Link>,
  },
];

const Investments = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-project-box",
      "Investments",
      true
    ),
    []
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default Investments;
