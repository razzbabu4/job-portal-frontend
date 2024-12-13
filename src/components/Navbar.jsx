import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLink =
        <>
            <li><NavLink to='/' style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "teal" : "",
                    border: isActive ? "1px solid teal" : "",
                    borderRadius: isActive ? "4px" : "",
                    color: isActive ? "white" : "",
                };
            }}>Home</NavLink></li>
            <li><NavLink to='/create-job' style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "teal" : "",
                    border: isActive ? "1px solid teal" : "",
                    borderRadius: isActive ? "4px" : "",
                    color: isActive ? "white" : "",
                };
            }}>Post Job</NavLink></li>

        </>
    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">JobPortal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-red-500 text-white font-medium text-lg">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;