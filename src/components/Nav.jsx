import { useState } from "react";
import { navLinks } from "../constants";
import { hamburgerMenu, closeMenu } from "../assets/icons";

const Nav = () => {
    const [toggleMenu, setToggleMenu]=useState(false);
    return (
        <header>
            <nav className="w-full border-b border-white absolute z-20 top-0 flex flex-row padding-l padding-r pt-2 items-center justify-between sm:flex-row">
                <div className="flex flex-row gap-1 m-4 items-center">
                    <a href="/">
                        <h3 className="text-xl text-white cursor-pointer font-bold hover:skew-y-1">PappaPaul<sup className="text-green-300 text-sm">Says</sup></h3>
                    </a>
                </div>

                <div className="text-md">
                    <ul className="flex flex-row gap-6 max-lg:hidden">
                        {
                            navLinks.map((item) => (
                                <li className="text-green-300 hover:underline underline-offset-4 active:text-green-200 hover:text-green-200 hover:-translate-y-1" key={item.label}>
                                    <a href= {item.href}>
                                        {item.label}
                                    </a>
                                </li>)
                            )
                        }
                    </ul> 
                </div>

                <div className="hidden max-lg:flex items-center">
                    {toggleMenu
                        ? <img src={closeMenu} alt="close-icon" width={30} height={30} onClick={() => setToggleMenu(false)} />
                        : <img src={hamburgerMenu} alt="hamburger-icon" width={30} height={30} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className="absolute z-10 bg-cyan-300 right-0 w-1/3 py-4 top-0 mt-[70px] mr-2">
                            <div className="flex flex-col gap-5 justify-center items-center">
                                <ul className="flex flex-col items-center gap-5">
                                    {
                                        navLinks.map((item) => (
                                            <li className="text-black text-sm font-semibold hover:underline underline-offset-4 hover:text-slate-600 hover:-translate-y-1" key={item.label}>
                                                <a href= {item.href}>
                                                    {item.label}
                                                </a>
                                            </li>)
                                        )
                                    }
                                </ul> 
                            </div>
                        </div>
                    )
                    }
                </div>
            </nav>
        </header>
    )
}

export default Nav
