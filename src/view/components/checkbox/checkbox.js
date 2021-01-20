import React, { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Check from 'Icons/done.svg';
import './checkbox.scss';

const Checkbox = ({ className, label, onCheck, value, error, testId }) => {
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
        <div
            data-testid={testId ?? 'checkbox'}
            className={cn('ml-checkbox', className)}
            onClick={onClick}
        >
            <div
                data-testid='checkbox-box'
                className={cn('ml-checkbox__box', {
                    'ml-checkbox__box--checked': isChecked,
                    'ml-checkbox__box--error': error,
                })}
            >
                {isChecked && <Check className='ml-checkbox__icon' />}
            </div>
            <div data-testid='checkbox-label' className='ml-checkbox__label'>
                {label}
            </div>
        </div>
    );
};

Checkbox.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    onCheck: PropTypes.func,
    value: PropTypes.bool,
    testId: PropTypes.string,
    error: PropTypes.string,
};

export default memo(Checkbox);
