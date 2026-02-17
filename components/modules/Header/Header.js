"use client"
import { CiUser, } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { VscChevronDown, VscCommentDiscussion } from "react-icons/vsc";
import { IoSunnyOutline, IoMoonOutline, IoSearchOutline, IoHomeOutline, IoPowerOutline, IoFolderOpenOutline } from "react-icons/io5";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";
import { SiAwssecretsmanager } from "react-icons/si";
import { useTheme } from "next-themes";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";
import SideBar from "../SideBar/SideBar";

export default memo(function Header() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isValue, setIsValue] = useState(false);
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const [isSideBar, setIsSideBar] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isLogin,] = useState(false);
    let router = useRouter()
    let bodyShadow = useRef(null)
    let bodyRef = useRef(null);
    let expandedSearchRef = useRef(null);
    let userMenu = useRef(null);
    let searchBarRef = useRef(null);

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleMenu = useCallback(() => {
        if (window.innerWidth <= 1280) {
            setIsValue((prev) => !prev);
            setSearchValue("")
        }
    }, []);

    const navigateUser = useCallback(() => {
        router.push(`/Search/${searchValue ? searchValue : null}`)
    }, [router, searchValue])

    const navigateUserOnKey = useCallback((e) => {
        if (e.code === "Enter") {
            router.push(`/Search/${searchValue ? searchValue : null}`)
            setSearchValue("")
        }
    }, [router, searchValue])
        ;
    useEffect(() => {
        const handleBodyClick = (e) => {
            // Check if the click target is outside the expanded search and search bar
            if (
                expandedSearchRef.current &&
                !expandedSearchRef.current.contains(e.target) &&
                searchBarRef.current &&
                !searchBarRef.current.contains(e.target)
            ) {
                setIsValue(false);
            }
        };

        bodyRef.current = document.body;

        if (window.innerWidth <= 1280) {
            if (isValue) {
                bodyShadow.current.classList.add("wrapper");
                bodyRef.current.classList.add("overflow-hidden");
                document.body.addEventListener("click", handleBodyClick);

                // Only disable pointer events on elements outside the search components
                const allElements = bodyRef.current.querySelectorAll("*");
                allElements.forEach((el) => {
                    // Skip elements that are part of the expanded search or search bar
                    if (
                        (expandedSearchRef.current && expandedSearchRef.current.contains(el)) ||
                        (searchBarRef.current && searchBarRef.current.contains(el))
                    ) {
                        // Keep pointer events enabled for search components
                        el.style.pointerEvents = "auto";
                    } else {
                        // Disable pointer events for everything else
                        el.style.pointerEvents = "none";
                    }
                });

                // Ensure the expanded search itself is interactive
                if (expandedSearchRef.current) {
                    expandedSearchRef.current.style.pointerEvents = "auto";
                }
                if (searchBarRef.current) {
                    searchBarRef.current.style.pointerEvents = "auto";
                }
            } else {
                bodyShadow.current.classList.remove("wrapper");
                bodyRef.current.classList.remove("overflow-hidden");

                // Reset all pointer events
                const allElements = bodyRef.current.querySelectorAll("*");
                allElements.forEach((el) => {
                    el.style.pointerEvents = "";
                });

                document.body.removeEventListener("click", handleBodyClick);
            }
        }

        // Cleanup event listener on unmount or when `isValue` changes
        return () => {
            document.body.removeEventListener("click", handleBodyClick);

            // Clean up pointer events
            if (bodyRef.current) {
                const allElements = bodyRef.current.querySelectorAll("*");
                allElements.forEach((el) => {
                    el.style.pointerEvents = "";
                });
            }
        };
    }, [isValue]);

    useEffect(() => {
        const handleBodyClick = (e) => {
            if (userMenu.current && !userMenu.current.contains(e.target)) {
                setOpenUserMenu(false);
            }
        };

        const body = document.body;

        if (openUserMenu) {
            bodyShadow.current.classList.add("wrapper");
            body.classList.add("overflow-hidden");
            body.addEventListener("click", handleBodyClick);

            // Apply `pointer-events: none` to all elements except `userMenu`
            body.querySelectorAll("*").forEach((el) => {
                if (userMenu.current &&
                    el !== userMenu.current &&
                    !userMenu.current.contains(el)) {
                    el.style.pointerEvents = "none";
                } else {
                    el.style.pointerEvents = "auto";
                }
            });

            if (userMenu.current) {
                // Ensure `userMenu` and its children are interactive
                userMenu.current.style.pointerEvents = "auto";
            }
        } else {
            bodyShadow.current.classList.remove("wrapper");
            body.classList.remove("overflow-hidden");
            body.removeEventListener("click", handleBodyClick);

            // Reset `pointer-events` for all elements
            body.querySelectorAll("*").forEach((el) => {
                el.style.pointerEvents = "";
            });
        }

        return () => {
            body.removeEventListener("click", handleBodyClick);
        };
    }, [openUserMenu]);

    return (

        <>
            <div className="w-full bg-foreground">
                <div className="h-21 md:h-25 flex flex-row-reverse items-center justify-between px-4 mx-auto lg:px-12">
                    <div className="flex flex-row-reverse relative gap-5 h-full items-center">
                        {/* User Account */}
                        {isLogin ? (
                            <>
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    setOpenUserMenu(prev => !prev)
                                }} className={`bg-[#f3f4f6] relative dark:bg-[#2F3542] h-13 rounded-full w-13 flex items-center justify-center  ${openUserMenu && "z-50"}`}>
                                    <CiUser className="dark:text-white text-gray-900 text-2xl" />
                                </button>
                                {<div ref={userMenu} className={`bg-white w-69.5 rounded-xl dark:bg-[#242a38] absolute top-full ${openUserMenu ? "flex z-50" : "hidden"}`}>
                                    <div className="p-4 flex flex-col w-full justify-start">
                                        <div className="flex w-full pb-3 items-center gap-5 border-b border-b-neutral-200 dark:border-b-white/10">
                                            {/* <img className="w-14 rounded-full" src={"public/Images/ba986f5ecace8be41dfdf99d3000078f.png"} alt="user Image" /> */}
                                            <span className="flex text-gray-900 dark:text-white flex-col items-start dana-regular">
                                                <span>{" نام کاربری"}</span>

                                                {/* <div className="flex items-center justify-start">
                                                    <span>ورود : </span>
                                                    <span className="text-sm overflow-hidden whitespace-nowrap text-ellipsis w-[125px]">{userInfos.createdAt ? <PersianDate isoDate={userInfos.createdAt} /> : "تاریخ"} </span>
                                                </div> */}

                                            </span>
                                        </div>
                                        <div className="pt-2">
                                            {/* {userInfos.role == 'ADMIN' && ( */}

                                            <Link href={'/CMS'} className="flex items-center group gap-2 px-2.5 h-12 rounded-lg hover:text-white hover:bg-[#0f6b68] transition-colors">
                                                <SiAwssecretsmanager className="text-xl group-hover:text-white transition-colors text-black dark:text-white" />
                                                <span className="dark:text-white text-gray-900 dana-regular group-hover:text-white transition-colors">پنل مدیریت</span>
                                            </Link>
                                            {/* )} */}
                                            <Link href={'/my-account'} className="flex items-center group gap-2 px-2.5 h-12 rounded-lg hover:text-white hover:bg-[#0f6b68] transition-colors">
                                                <IoHomeOutline className="text-xl group-hover:text-white transition-colors text-black dark:text-white" />
                                                <span className="dark:text-white text-gray-900 dana-regular group-hover:text-white transition-colors">پیشخوان</span>
                                            </Link>
                                            <Link href={'/my-account/Courses'} className="flex items-center group gap-2 px-2.5 h-12 rounded-lg hover:text-white hover:bg-[#0f6b68] transition-colors">
                                                <IoFolderOpenOutline className="text-xl group-hover:text-white transition-colors text-black dark:text-white" />
                                                <span className="dark:text-white text-gray-900 dana-regular group-hover:text-white transition-colors">دوره های من</span>
                                            </Link>
                                            <Link href={'/my-account/Tickets'} className="flex items-center group gap-2 px-2.5 h-12 rounded-lg hover:text-white hover:bg-[#0f6b68] transition-colors">
                                                <VscCommentDiscussion className="text-xl group-hover:text-white transition-colors text-black dark:text-white" />
                                                <span className="dark:text-white text-gray-900 dana-regular group-hover:text-white transition-colors">تیکت های من</span>
                                            </Link>
                                            <Link href={'/my-account/Edit-Account'} className="flex items-center group gap-2 px-2.5 h-12 rounded-lg hover:text-white hover:bg-[#0f6b68] transition-colors">
                                                <CiUser className="text-xl group-hover:text-white transition-colors text-black dark:text-white" />
                                                <span className="dark:text-white text-gray-900 dana-regular group-hover:text-white transition-colors">جزئیات حساب</span>
                                            </Link>
                                        </div>
                                        <div>
                                            <div className="cursor-pointer flex items-center group gap-2 px-2.5 h-12 rounded-lg hover:text-white hover:bg-[#ef4444] transition-colors">
                                                <IoPowerOutline className="text-xl group-hover:text-white transition-colors text-black dark:text-white" />
                                                <span className="dark:text-white text-gray-900 dana-regular group-hover:text-white transition-colors">خروج</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </>
                        ) : (
                            <>
                                <Link href={'/Login'} className="bg-brand text-white h-13 transition-colors hover:bg-hover rounded-xl px-4 lg:flex items-center justify-center gap-2 hidden w-42.5">
                                    <CiUser className="text-2xl" />
                                    <span>
                                        ورود | عضویت
                                    </span>
                                </Link>
                                <Link href={'/Login'} className="bg-background h-13 rounded-full px-4 lg:hidden items-center gap-2 flex">
                                    <HiMiniArrowRightStartOnRectangle className="text-2xl text-color" />
                                </Link>
                            </>
                        )}

                        {/* Light and Dark */}
                        <button onClick={() => {
                            setTheme(theme === 'dark' ? 'light' : 'dark');
                        }} className="hidden lg:flex bg-background h-13 rounded-full w-13 items-center justify-center">

                            {
                                mounted ? (
                                    resolvedTheme === 'dark' ?
                                        <IoSunnyOutline className="text-2xl text-color" /> :
                                        <IoMoonOutline className="text-2xl text-color" />) : (
                                    <span className="hidden lg:block w-10 h-10" aria-hidden="true">
                                        {/* Invisible placeholder with same dimensions */}
                                    </span>
                                )
                            }
                        </button>
                        {/* Search Bar */}
                        <div ref={searchBarRef} className="hidden relative lg:flex h-full items-center">
                            <button onClick={toggleMenu} className="flex bg-background h-13 rounded-full w-13 items-center xl:justify-around justify-center xl:cursor-auto xl:w-57.5 xl:flex-row-reverse xl:px-2">
                                <IoSearchOutline
                                    onClick={() => window.innerWidth >= 1280 && navigateUser()}
                                    className="text-2xl xl:mt-1 cursor-pointer text-color" />
                                <input
                                    name="searchBar"
                                    value={searchValue}
                                    onKeyDown={navigateUserOnKey}
                                    onChange={e => setSearchValue(e.target.value)}
                                    style={{ all: "unset" }} type="text" className="mt-1! hidden!  xl:inline-block! text-sm! text-color! pr-1! text-start!" placeholder="عینکتو اینجا پیدا کن!" />
                            </button>
                            {/* Expanded Search Input */}
                            {isValue && (
                                <div
                                    ref={expandedSearchRef}
                                    id="ExpandedSearch"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                    }} // Prevent closing when clicking inside
                                    className="xl:hidden absolute top-28 left-0 opacity-100 flex items-center bg-background z-50 h-13 pointer-events-auto rounded-full justify-around w-57.5 flex-row-reverse px-2"
                                >
                                    <IoSearchOutline
                                        onClick={navigateUser}
                                        className="text-2xl h-full cursor-pointer pointer-events-auto text-color" />
                                    <input
                                        value={searchValue}
                                        onKeyDown={navigateUserOnKey}
                                        onChange={e => setSearchValue(e.target.value)}
                                        style={{ all: "unset" }}
                                        type="text"
                                        className="mt-1 pointer-events-auto h-full inline-block text-sm cursor-default text-color text-start"
                                        placeholder="چیو میخوای یاد بگیری؟"
                                    />
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="flex h-13 items-center gap-5">
                        <div className="lg:ml-8 h-full">
                            <Image height={60} width={66} className="rounded" src="public/Images/photo_2026-02-14_01-04-33.jpg" alt="logo" />
                        </div>
                        <ul className="hidden lg:flex gap-6">
                            <li className="group relative">
                                <Link href={'/'} className="flex items-center gap-x-1 text-menu h-full group-hover:text-brand transition-colors">
                                    صفحه اصلی
                                </Link>
                            </li>

                            <li className="group relative">
                                <Link href={'/Courses'} className="dana-regular gap-1 flex items-center text-menu h-full group-hover:text-brand  transition-colors">
                                    محصولات
                                    <VscChevronDown style={{ all: "unset" }} className="text-lg fill-color! group-hover:fill-brand! transition-colors  " />
                                </Link>
                                <div className="z-50 invisible opacity-0 absolute xl:pt-8  top-full pt-4 right-0 group-hover:visible group-hover:opacity-100 transition-all w-64 cursor-auto">
                                    <ul className="bg-foreground rounded border-y border-[#0f6b68] p-5 flex flex-col gap-5">
                                        <li className="cursor-pointer">
                                            <span className="w-full flex dana-regular hover:text-brand transition-all text-color text-[16px]">
                                                عینک x									</span>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={(e) => {
                            setIsSideBar(prev => !prev)
                            e.stopPropagation()
                        }} className="bg-background menu-button cursor-pointer h-13 rounded-full w-13 flex items-center justify-center">
                            <IoIosMenu className="text-2xl text-color" />
                        </button>
                    </div>
                </div>
            </div>
            <SideBar isSideBar={isSideBar} setIsSideBar={setIsSideBar} searchValue={searchValue} setSearchValue={setSearchValue} />
            <div ref={bodyShadow}></div>
        </>
    )
})