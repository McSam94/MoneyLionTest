import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './text.scss';

const Text = ({ className, h1, h2, h3, h4, link, children }) => {
    const conditionClasses = {
        'ml-text__h1': h1,
        'ml-text__h2': h2,
        'ml-text__h3': h3,
        'ml-text__h4': h4,
    };

    if (link) {
        return (
            <a href={link} className={cn('ml-link', conditionClasses, className)}>
                {children}
            </a>
        );
    }

    return <div className={cn('ml-text', conditionClasses, className)}>{children}</div>;
};

Text.propTypes = {
    className: PropTypes.string,
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
    link: PropTypes.string,
};

Text.defaultProps = {
    h1: false,
    h2: false,
    h3: false,
};

export default memo(Text);
