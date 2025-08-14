import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle = ({ isActive }) =>
    `block px-4 py-2 hover:bg-teal-800 ${
      isActive ? "bg-teal-900 text-white" : "text-white"
    }`;

  return (
    <div className="bg-teal-700 h-screen w-60 fixed top-0 left-0">
      <h1 className="text-white text-xl font-bold p-4">Water Monitor</h1>
      <nav>
        <NavLink to="/" className={linkStyle}>Dashboard</NavLink>
        <NavLink to="/alerts" className={linkStyle}>Alerts</NavLink>
        <NavLink to="/quality" className={linkStyle}>Last week</NavLink>
        <NavLink to="/settings" className={linkStyle}>Settings</NavLink>
        
      </nav>
    </div>
  );
}
