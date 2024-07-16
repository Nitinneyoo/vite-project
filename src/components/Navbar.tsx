/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isNavbarVisible, setNavbarVisible] = useState<boolean>(true); // Add this state

    // Toggle function to disable or enable navbar
    const toggleNavbarVisibility = () => {
        setNavbarVisible(!isNavbarVisible);
    };

    return (
        <>

            {isNavbarVisible && ( // Conditionally render the navbar
                <div
                    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 dark", className)}
                >
                    <Menu setActive={setActive}>
                        <Link href="/">
                            <MenuItem item="Home" setActive={setActive} active={active} />
                        </Link>
                        <MenuItem item="About" setActive={setActive} active={active} />
                        <MenuItem item="Academic" setActive={setActive} active={active} />
                        <MenuItem item="Facility" setActive={setActive} active={active} />
                        <MenuItem item="Faculty" setActive={setActive} active={active} />
                        <Link href="/contact">
                            <MenuItem item="Contact" setActive={setActive} active={active} />
                        </Link>

                    </Menu>

                </div>
            )}
            <div>
                <button onClick={toggleNavbarVisibility} className="border-solid border-2 border-white-500 text-white border-r-red-500 rounded-lg mt-2">
                    {isNavbarVisible ? "Disable Navbar" : "Enable Navbar"}
                </button>
            </div>
        </>
    );
}

export default Navbar;
