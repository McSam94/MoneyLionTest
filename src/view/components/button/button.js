import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './button.scss';

const ButtonDiv = memo(({ onClick, className, children, isLoading, testId, ...props }) => {
    return (
        <button
            data-testid={testId ?? 'button-container'}
            className={cn('ml-button', className)}
            onClick={onClick}
            {...props}
        >
            {isLoading ? 'Loading...' : children}
        </button>
    );
});

ButtonDiv.propTypes = {
    className: PropTypes.string,
    link: PropTypes.string,
    onClick: PropTypes.func,
    testId: PropTypes.string,
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
