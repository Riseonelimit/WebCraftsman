import React from "react";
import Title from "../Texts/Title";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className=" w-full h-[7vh] gap-3 px-5 z-10 bg-white/40 backdrop-blur-sm  flex-box justify-between items-center">
            <Title className={" text-[1.3rem] font-[700] "}>WebCraftsman</Title>
            <div className=" space-x-4">
                <Link to={"/"}>About</Link>
                <Link to={"/"}>Components</Link>
            </div>
        </nav>
    );
};

export default Navbar;
