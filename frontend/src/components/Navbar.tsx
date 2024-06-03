
import { Link, useNavigate } from 'react-router-dom';
import { routes } from '../constants'
import { RouteType } from '../types';
import { useGetToken } from '../hooks/useGetToken';
import { useRemoveToken } from '../hooks/useRemoveToken';


const NavbarMenu = ({ routes }: { routes: RouteType[] }) => {
    const params = window.location.href.split("/")[3];

    return (
        <>
            {routes.map((route, i) => (
                <li key={i}>
                    <Link
                        className={`px-4 ${route.href.toLowerCase()==="/"+params.toLowerCase() ? "opacity-100" : "opacity-50 hover:opacity-100"
                            }`}
                        id={route.href.substring(1, )}
                        to={route.href}
                    >
                        {route.name}
                    </Link>
                </li>
            ))}
        </>
    )
}

const Navbar = () => {
    const navigation = useNavigate()

    return (
        <div className=" light py-6 bg-white  dark:bg-[#0b1727] text-zinc-900 dark:text-white relative">
            <nav>
                <div className="container px-4">
                    <div className="flex justify-between items-center">
                        <Link className="font-black text-3xl" to="/">
                            {" "}
                            PostPro{" "}
                        </Link>
                        <button
                            className="block lg:hidden cursor-pointer h-10 z-20"
                            type="button"
                            id="hamburger"
                        >
                            <div className="h-0.5 w-7 bg-black dark:bg-white -translate-y-2"></div>
                            <div className="h-0.5 w-7 bg-black dark:bg-white"></div>
                            <div className="h-0.5 w-7 bg-black dark:bg-white translate-y-2"></div>
                        </button>
                        <ul
                            className="flex flex-col lg:flex-row justify-center items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent"
                            id="navbar"
                        >
                            <NavbarMenu routes={routes} />
                            <li>
                  {useGetToken()?
                                <button className="border border-blue-600 bg-blue-600 text-white hover:bg-opacity-90 py-1.5 px-4 rounded LoginNav" onClick={()=>{useRemoveToken(); navigation("/login")}}>
                            Logout
                            </button>:
                            <Link to="/login">

                                <button className="border border-blue-600 bg-blue-600 text-white hover:bg-opacity-90 py-1.5 px-4 rounded LoginNav" >
                            Signup
                                </button>
                            </Link>
                            }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default Navbar
