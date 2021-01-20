import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './button.scss';

const ButtonDiv = memo(({ onClick, className, isLoading, children, ...props }) => {
    return (
        <button className={cn('ml-button', className)} onClick={onClick} {...props}>
            {isLoading ? 'Loading...' : children}
        </button>
    );
});

ButtonDiv.propTypes = {
    className: PropTypes.string,
    link: PropTypes.string,
    onClick: PropTypes.func,
    isLoading: PropTypes.bool,
};

const Button = ({ link, ...props }) => {
    return (
        <>
            {link ? (
                <Link className='ml-button__link' to={link}>
                    <ButtonDiv {...props} />
                </Link>
            ) : (
                <ButtonDiv {...props} />
            )}
        </>
    );
};

Button.propTypes = {
    link: PropTypes.string,
};

export default memo(Button);
