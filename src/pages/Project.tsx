import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface ProjectType {
  name: string;
  category: string;
  investmentRequired: number;
  roi: number;
  duration: string;
  location: string;
  fundingProgress: number;
  action: ReactElement;
}

const columns: Column<ProjectType>[] = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Investment Required",
    accessor: "investmentRequired",
  },
  {
    Header: "ROI (%)",
    accessor: "roi",
  },
  {
    Header: "Duration",
    accessor: "duration",
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: "Funding Progress",
    accessor: "fundingProgress",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const projects: ProjectType[] = [
  {
    name: "Smart Water Conservation",
    category: "Water Conservation",
    investmentRequired: 50000,
    roi: 12,
    duration: "12 months",
    location: "California, USA",
    fundingProgress: 75,
    action: <Link to="/admin/project/1">Manage</Link>,
  },
  {
    name: "AI-Based Irrigation",
    category: "Irrigation",
    investmentRequired: 30000,
    roi: 10,
    duration: "8 months",
    location: "India",
    fundingProgress: 60,
    action: <Link to="/admin/project/2">Manage</Link>,
  },
  {
    name: "Renewable Energy for Water Plants",
    category: "Renewable Energy",
    investmentRequired: 80000,
    roi: 15,
    duration: "18 months",
    location: "Germany",
    fundingProgress: 40,
    action: <Link to="/admin/project/3">Manage</Link>,
  },
  {
    name: "Eco-Friendly Farming",
    category: "Sustainable Agriculture",
    investmentRequired: 25000,
    roi: 9,
    duration: "10 months",
    location: "Australia",
    fundingProgress: 50,
    action: <Link to="/admin/project/4">Finance</Link>,
  },
];

const Projects = () => {
  const [data] = useState<ProjectType[]>(projects);

  const Table = useCallback(
    TableHOC<ProjectType>(columns, data, "dashboard-project-box", "Projects", true),
    []
  );

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{Table()}</main>
      <Link to="/admin/project/new" className="create-project-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Projects;
