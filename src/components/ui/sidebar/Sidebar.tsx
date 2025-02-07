'use client'
import Link from "next/link"
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"

import { useUIStore } from "@/store"
import clsx from "clsx"

export const Sidebar = () => {
    const { openSideMenu, closeSideMenu } = useUIStore()

    const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen)
    const closeSideMenuAction = useUIStore((state) => state.closeSideMenu)

    return (
        <div>
            {/* Backgorund black */}
            {
                isSideMenuOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30">

                    </div>
                )
            }
            {
                isSideMenuOpen && (
                    <div 
                    onClick={closeSideMenuAction}
                    className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm">
                    </div>
                )
            }
            <nav
                //todo:efectop de slide
                className={
                    clsx(
                        "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl trasnform transition-all duration-300",
                        {
                            "translate-x-full" : !isSideMenuOpen
                        }
                    )
                }>
                <IoCloseOutline
                    size={50}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={() => closeSideMenuAction()}
                />
                {/* Input */}
                <div className="relative mt-14">
                    <IoSearchOutline size={20} className="absolute top-2 left-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                    />
                </div>

                {/* Menu */}
                <Link
                    href={'/'}
                    className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoPersonOutline />
                    <span className="ml-3 text-xl">Profile</span>
                </Link>

                <Link
                    href={'/'}
                    className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoTicketOutline />
                    <span className="ml-3 text-xl">Orders</span>
                </Link>

                <Link
                    href={'/'}
                    className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoLogInOutline />
                    <span className="ml-3 text-xl">Login</span>
                </Link>

                <Link
                    href={'/'}
                    className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoLogOutOutline />
                    <span className="ml-3 text-xl">Logout</span>
                </Link>

                <div className="w-full h-px bg-gray-200 my-5" />

                <Link
                    href={'/'}
                    className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoShirtOutline />
                    <span className="ml-3 text-xl">Products</span>
                </Link>

                <Link
                    href={'/'}
                    className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoTicketOutline />
                    <span className="ml-3 text-xl">Orders</span>
                </Link>

                <Link
                    href={'/'}
                    className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    <IoPeopleOutline />
                    <span className="ml-3 text-xl">Users</span>
                </Link>

            </nav>

        </div>
    )
} 