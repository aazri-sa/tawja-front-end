import React from "react";


const Image = ({ source, altText, className }) => {
    return <img src={source} alt={altText} className={className} />;
};

export default Image;