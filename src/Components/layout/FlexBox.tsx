import { ReactProps } from "../../types/interfaces";

const FlexBox: React.FC<ReactProps> = ({ children, className }) => {
    return (
        <div
            className={` flex-box ${className}`}
        >
            {children}
        </div>
    );
};

export default FlexBox;
