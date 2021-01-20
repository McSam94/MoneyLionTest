import React, { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Check from 'Icons/done.svg';
import './checkbox.scss';

const Checkbox = ({ className, label, onCheck, value, error }) => {
    const [isChecked, setIsCheck] = useState(value ?? false);

    const onClick = useCallback(() => {
        setIsCheck((prevState) => !prevState);
    }, []);

    useEffect(() => {
        if (onCheck) {
            onCheck(isChecked);
        }
    }, [isChecked, onCheck]);

    useEffect(() => {
        setIsCheck(value);
    }, [value]);

    return (
        <div className={cn('ml-checkbox', className)} onClick={onClick}>
            <div
                className={cn('ml-checkbox__box', {
                    'ml-checkbox__box--checked': isChecked,
                    'ml-checkbox__box--error': error,
                })}
            >
                {isChecked && <Check className='ml-checkbox__icon' />}
            </div>
            <div className='ml-checkbox__label'>{label}</div>
        </div>
    );
};

Checkbox.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    onCheck: PropTypes.func,
    value: PropTypes.bool,
    error: PropTypes.string,
};

export default memo(Checkbox);
