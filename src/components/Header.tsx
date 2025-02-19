import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">WeatherApp</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive ? "bg-white text-blue-600" : "hover:bg-blue-500"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weather"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive ? "bg-white text-blue-600" : "hover:bg-blue-500"
                }`
              }
            >
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive ? "bg-white text-blue-600" : "hover:bg-blue-500"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${
                  isActive ? "bg-white text-blue-600" : "hover:bg-blue-500"
                }`
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
