import { NavLink } from "react-router-dom";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";
function Navbar({ containerStyles }) {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="nav">
          {" "}
          <MdHomeFilled />
          Home
        </div>
      </NavLink>
      <NavLink
        to={"/mens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="nav">
          {" "}
          <MdCategory />
          Men's
        </div>
      </NavLink>
      <NavLink
        to={"/womens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="nav">
          {" "}
          <MdShop2 />
          Women's
        </div>
      </NavLink>
      <NavLink
        to={"/kids"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="nav">
          {" "}
          <MdContacts />
          Kid's
        </div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
