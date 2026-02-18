import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa";

export default function BreadCrumb({ title, tag, conditionalTag }) {
    return (
        <div className="w-full max-w-350 h-25 flex items-end justify-start md:justify-between">
            <div className="md:w-11/12 justify-between pb-5 flex items-center">
                <h2 className="font-title text-2xl pr-5 xl:pr-12 navbar-logo">{title}</h2>
                <div className="hidden md:flex items-center flex-row-reverse gap-2">
                    {conditionalTag ? (
                        <div className="hidden md:flex items-center flex-row-reverse gap-2">
                            <div>
                                <span
                                    className="text-sm text-color"
                                >{conditionalTag}</span>
                            </div>
                            <div>
                                <FaChevronLeft className="text-[12px] text-color" />
                            </div>
                            <Link href={"/glasses"}>
                                <span
                                    className="text-sm text-color"
                                >{tag}</span>
                            </Link>
                            <div>
                                <FaChevronLeft className="text-[12px] text-color" />
                            </div>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center flex-row-reverse gap-2">
                            <div>
                                <span
                                    className="text-sm text-color"
                                >{tag}</span>
                            </div>
                            <div>
                                <FaChevronLeft className="text-[12px] text-color" />
                            </div>
                        </div>
                    )}
                    <div>
                        <Link href={"/"}>
                            <AiFillHome className="text-lg" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
