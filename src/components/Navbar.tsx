/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
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
    )
}

export default Navbar;