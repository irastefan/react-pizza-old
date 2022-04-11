import React from "react";

const Button = ({outline, className, children, onClick}) => {
    return (
        <button onClick={onClick} className={`button ${className} ${outline ? 'button--outline' : ''}`}>{children}</button>
    )
}

export default Button