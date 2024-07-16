/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border"

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isNavbarVisible, setNavbarVisible] = useState<boolean>(false); // Set to false by default

    // Toggle function to disable or enable navbar
    const toggleNavbarVisibility = () => {
        setNavbarVisible(!isNavbarVisible);
    };

    return (
        <>
            {isNavbarVisible && ( // Conditionally render the navbar
                <div
                    className={cn("fixed top-10 w-autoinset-x-0 max-w-2xl mx-auto z-50 dark rounded-lg", className, " md:top-10 md:max-w-full md:px-4 md:bg-opacity-90 md:bg-black rounded-lg")}
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
                    <div className="mt-2 text-white flex justify-center items-center md:mt-2 md:justify-center"
                        style={{ borderRadius: "1.75rem" }}>
                        <Button
                            className="bg-black dark:bg-black dark:text-white border-neutral-200 dark:border-slate-800 px-4 py-2 md:text-sm md:px-2 md:py-1 md:justify-center"
                            onClick={toggleNavbarVisibility} >
                            Disable Navbar
                        </Button>
                    </div>
                </div>
            )}
            {!isNavbarVisible && (
                <div className="mt-10 text-white flex justify-end items-center md:mt-5 md:justify-center"
                    style={{ borderRadius: "1.75rem" }}>
                    <Button
                        className="bg-black dark:bg-black dark:text-white border-neutral-200 dark:border-slate-800 px-4 py-2 md:text-sm md:px-2 md:py-1"
                        onClick={toggleNavbarVisibility} >
                        Enable Navbar
                    </Button>
                </div>
            )}
        </>
    );
}

export default Navbar;
