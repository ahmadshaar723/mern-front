import { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { ShopContext } from "../Context/ShopContext";
function Header() {
  const {count}=useContext(ShopContext)
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  return (
    <header className="header">
      <div className="px-4 flexBetween py-3 max-xs:px-2">
        <div>
          <Link>
            <img src={logo} alt="" height={66} width={88} />
          </Link>
        </div>
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        <Navbar
          containerStyles={`${
            menuOpened
              ? "menu right-8"
              : "menu -right-[100%]"
          }`}
        />
        <div className="flexBetween sm:gap-x-2 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="menu-btn"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="menu-btn"
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"cart-page"} className={"flex"}>
              <FaOpencart className="cart" />
              <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">
                {count}
              </span>
            </NavLink>
            {localStorage.getItem('auth-token')?<NavLink onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}
              
              className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
            >
              <img src={logout} alt="logoutIcon" height={19} width={19} />{" "}Logout
            </NavLink>

            :<NavLink
              to={"login"}
              className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
            >
              <img src={user} alt="logoutIcon" height={19} width={19} />{" "}Login
            </NavLink>}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
