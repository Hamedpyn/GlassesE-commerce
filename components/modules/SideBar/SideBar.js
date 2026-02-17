"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react"
import { IoMdClose } from "react-icons/io";
import { IoMoonOutline, IoSearchOutline, IoSunnyOutline } from "react-icons/io5";
import { VscChevronDown, VscChevronLeft } from "react-icons/vsc";

export default function SideBar({ isSideBar, setIsSideBar, searchValue, setSearchValue }) {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [isSubMenu, setIsSubMenu] = useState(false)
    const [mounted, setMounted] = useState(false);
    let bodyShadow = useRef(null)
    let navigate = useRouter();
    let userMenu = useRef(null);

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleMenu = (e) => {
        setIsSideBar(prev => !prev)
        e.stopPropagation()
    }

    // Handle clicks outside the sidebar to close it
    useEffect(() => {
        const handleClickOutside = (e) => {
            // Check if click is outside the sidebar and not on a sidebar-toggle element
            if (userMenu.current &&
                !userMenu.current.contains(e.target) &&
                !e.target.closest('.sidebar-toggle')) {
                setIsSideBar(false);
            }
        };

        if (isSideBar) {
            // Use mousedown instead of click for faster response
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSideBar]);

    // Handle body scroll when sidebar is open - simplified
    useEffect(() => {
        let body = document.body;

        if (isSideBar) {
            bodyShadow.current?.classList.add("wrapper");
            body.classList.add("overflow-hidden");
        } else {
            bodyShadow.current?.classList.remove("wrapper");
            body.classList.remove("overflow-hidden");
        }
    }, [isSideBar]);

    // Handle window resize to close the menu when width is 1024 or greater
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsSideBar(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setIsSideBar]);

    return (
        <>
            <div ref={userMenu} className={`z-50 lg:hidden bg-foreground fixed top-0 right-0 transition-all ease duration-300 h-full overflow-auto w-64 p-5 ${isSideBar ? "translate-x-0 visible opacity-100" : "translate-x-full invisible opacity-0"}`} >
                <div className="border-b border-b-neutral-200 dark:border-b-white/10 pb-6 flex flex-row-reverse justify-between">
                    <div className="flex flex-row-reverse gap-3 mt-2!">
                        <button onClick={toggleMenu} className="sidebar-toggle text-color bg-background h-12 rounded-full w-12 flex items-center justify-center">
                            <IoMdClose className="text-2xl" />
                        </button>
                        {/* Light and Dark */}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setTheme(theme === 'dark' ? 'light' : 'dark');
                            }}
                            className="sidebar-toggle flex bg-background h-12 rounded-full w-12 items-center justify-center"
                        >
                            {
                                mounted ? (
                                    resolvedTheme === 'dark' ?
                                        <IoSunnyOutline className="text-2xl text-color" /> :
                                        <IoMoonOutline className="text-2xl text-color" />) : (
                                    <span className="w-10 h-10" aria-hidden="true">
                                        {/* Invisible placeholder with same dimensions */}
                                    </span>
                                )
                            }
                        </button>
                    </div>
                    <Image height={60} width={66} className="rounded" src="/Images/photo_2026-02-14_01-04-33.jpg" alt="لوگوی فروشگاه عینک رهام"
                    />
                </div>
                <div className="pt-3">
                    <button className="flex bg-background h-12 rounded-full items-center justify-evenly w-56 flex-row-reverse cursor-auto">
                        <Link onClick={() => setSearchValue('')} href={`/Search/${searchValue}`} className="h-full flex justify-center items-center">
                            <IoSearchOutline className="text-2xl xl:mt-1 text-color" />
                        </Link>
                        <input style={{ all: "unset" }} onKeyUp={(e) => {
                            if (e.code === "Enter") {
                                navigate.push(`/Search/${searchValue ? searchValue : null}`)
                                setSearchValue("")
                            }
                        }}
                            value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="mt-1! h-full! text-color! text-sm! text-start!" placeholder="عینکتو اینجا پیدا کن!" />
                    </button>
                    <ul className="flex flex-col gap-5 mt-5!">
                        <li className="dana-regular group text-gray-900 dark:text-white w-full">
                            <span className="text-menu flex items-center justify-between h-full group-hover:text-hover transition-colors">
                                <Link href={'/course-cat/php'}>صفحه اصلی</Link>
                            </span>
                        </li>

                        <li className="dana-regular group text-gray-900 dark:text-white w-full">
                            <span className="flex items-center justify-between h-full group-hover:text-hover text-menu transition-colors">
                                <Link href={'/courses'}>دوره ها</Link>
                                {isSubMenu ? <VscChevronDown onClick={() => setIsSubMenu(prev => !prev)} className="text-lg mb-1 cursor-pointer" /> : <VscChevronLeft onClick={() => setIsSubMenu(prev => !prev)} className="text-lg mb-1 cursor-pointer" />}
                            </span>
                            <div className={`pt-4 transition-all cursor-auto ${isSubMenu ? "opacity-100 visible" : "opacity-0 invisible hidden"}`}>
                                <ul className="bg-background rounded-xl p-5 flex flex-col gap-5">
                                    <li className="cursor-pointer">
                                        <span className="w-full flex dana-regular hover:text-hover transition-all text-color text-sm">دوره x</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div ref={bodyShadow} className="lg:hidden"></div>
        </>
    )
}