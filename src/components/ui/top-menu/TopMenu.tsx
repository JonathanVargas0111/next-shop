'use client'
import { titleFont } from "@/config/fonts";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import Link from "next/link";

import { useUIStore } from "@/store"


export const TopMenu = () => {

    const openSideMenuAction = useUIStore((state) => state.openSideMenu)

    return (
        <nav className="flex px-5 justify-between items-center w-full">
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Next</span>
                    <span>| Shop</span>
                </Link>
            </div>
            {/* Center menu */}
            <div className="hidden sm:block">
                <Link
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-300 hover:text-gray-900"
                    href="/category/men">
                    Men
                </Link>
                <Link
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-300 hover:text-gray-900"
                    href="/category/women">
                    Women
                </Link>
                <Link
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-300 hover:text-gray-900"
                    href="/category/kid">
                    Kid
                </Link>
            </div>

            <div className="flex items-center">
                <Link href="/search" className="mx-2">
                    <IoSearchOutline className="w-5 h-5" />
                </Link>
                <Link href="/cart" className="mx-2">
                    <div className="relative">
                        <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-400 text-white">
                            3</span>
                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>
                <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:text-gray-900"
                    onClick={openSideMenuAction}>
                    Menu
                </button>
            </div>
        </nav>
    );
};