import React from "react";
import { ReactProps } from "../../types/interfaces";

const Title: React.FC<ReactProps> = ({ children, className }) => {
    return (
        <h1 className={`text-text tracking-tighter text-[2rem] font-[800] ${className}`}>
            {children}
        </h1>
    );
};

export default Title;
