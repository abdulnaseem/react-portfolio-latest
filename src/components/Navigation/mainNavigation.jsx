import { Link, NavLink } from "react-router-dom";
import './mainNavigation.css';
import { useMediaQuery } from "react-responsive";
import { CiMenuFries } from "react-icons/ci";
import { RiMenu4Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import navData from './nav-data.json';

const MainNavigation = () => {

    const [sideBar, setSideBar] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "769px" });

    const handleToggleNav = () => setSideBar(!sideBar);

    const webNavLinks = () => {
        return (
                <div className="links-container"> 
                    {
                        navData.map((navItem) => {
                            return (
                                <NavLink key={navItem.id}
                                         id={navItem.cName} 
                                         to={navItem.path} 
                                         className={({isActive}) => isActive ? "active" : ""}
                                         onClick={isMobile && handleToggleNav}>
                                    {navItem.title}
                                </NavLink>
                            )
                        })
                    }
                </div>
        )
    }

    const mobileNavLinks = () => {
        return (
            <>
                <div className="navbar">
                    <Link to='#' className='menu-bars'>
                        <RiMenu4Line size={25} onClick={handleToggleNav} />
                    </Link>
                </div>
                <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={handleToggleNav}>
                        <li className="navbar-toggle">
                            <Link to='#' className='menu-bars'>
                                <IoCloseOutline className="icon" onClick={handleToggleNav} size={30} />
                            </Link>
                            {webNavLinks()}
                        </li>
                    </ul>
                </nav>
            </>
        )
    }

    return (
        <>
            <div className="navigation inline-flex place-content-between">

                {isMobile ? (
                    mobileNavLinks()
                ) : (
                    webNavLinks()
                )}
            </div>
        </>
      )
}

export default MainNavigation;