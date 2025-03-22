import { Column } from "react-table";
import TableHOC from "./TableHOC";

interface DataType {
  id: string;
  investor_id: string;
  amount: number;
  profit: number;
  status: string;
}

const columns: Column<DataType>[] = [
  {
    Header: "Transaction ID",
    accessor: "id",
  },
  {
    Header: "Investor ID",
    accessor: "investor_id",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Profit",
    accessor: "profit",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  return TableHOC<DataType>(columns, data, "transaction-box", "Top Transaction")();
};

export default DashboardTable;
