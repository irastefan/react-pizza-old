import React from "react";
import PropTypes from 'prop-types'

const Button = ({outline, className, children, onClick}) => {
    return (
        <button onClick={onClick} className={`button ${className} ${outline ? 'button--outline' : ''}`}>{children}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button