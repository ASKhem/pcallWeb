"use client"
import Link from 'next/link';
import Dropdown from "./Dropdown";
import { useState } from "react";

const menuItems = [
    {
        title: "Build a Pc",
        children: [
            {
                title: "New PC",
                route: "/buildpc/new",
                image: "/img/header/DropDownMenu/buildpc_img1.png",
            },
            {
                title: "Semi-new PC",
                route: "/buildpc/seminew",
                image: "/img/header/DropDownMenu/buildpc_img2.png",
            },
            {
                title: "Second-hand PC",
                route: "/buildpc/old",
                image: "/img/header/DropDownMenu/buildpc_img3.png",
            },
        ],
    },
    {
        title: "Gallery",
        children: [
            {
                title: "Latest Builds",
                route: "/gallery/latest",
                image: "/img/header/DropDownMenu/gallery_img2.png",
            },
            {
                title: "Hot Builds",
                route: "/gallery/hot",
                image: "/img/header/DropDownMenu/gallery_img1.png",
            },
        ],
    },
    {
        title: "About Us",
        children: [
            {
                title: "History",
                route: "/about/history",
                image: "/img/header/DropDownMenu/aboutUs_img2.png",
            },
            {
                title: "Our Team",
                route: "/about/team",
                image: "/img/header/DropDownMenu/aboutUs_img1.png",
            }
        ],
    },
];

const NavMenu = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdown = (index) => {
        if (openDropdown === index) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(index);
        }
    };

    return (
        <nav className="flex items-center">
            <div className="flex gap-8 items-center text-white">
                {menuItems.map((item, index) => {
                    return item.hasOwnProperty("children") ? (
                        <Dropdown key={index} item={item} isOpen={openDropdown === index} handleDropdown={() => handleDropdown(index)} />
                    ) : (
                        <Link key={index} className="hover:text-orange-500" href={item?.route || ""}>
                            {item.title}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default NavMenu;