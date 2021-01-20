import React, { useCallback, useState, forwardRef, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './input.scss';

const Input = forwardRef(
    ({ className, label, placeholder, error, value, onChange, testId, ...props }, ref) => {
        const [isFocus, setIsFocus] = useState(false);
        const [inputValue, setInputValue] = useState(value ?? '');

        const onFocusToggle = useCallback((flag) => {
            setIsFocus(flag);
        }, []);

        const onTextChange = useCallback((event) => {
            setInputValue(event.target.value);
        }, []);

        useEffect(() => {
            setInputValue(value);
        }, [value]);

        useEffect(() => {
            if (onChange) {
                onChange(inputValue);
            }
        }, [inputValue]);

        return (
            <div data-testid={testId ?? 'input-wrapper'} className={cn('ml-input', className)}>
                <div
                    data-testid='input-container'
                    className={cn('ml-input__container', {
                        'ml-input__container--error': error,
                    })}
                >
                    {label && (
                        <div
                            data-testid='input-label'
                            className={cn('ml-input__label', {
                                'ml-input__label--focused': isFocus || inputValue,
                                'ml-input__label--error': error,
                            })}
                        >
                            {label}
                        </div>
                    )}
                    <input
                        ref={ref}
                        data-testid='input-field'
                        className={cn('ml-input__field', {
                            'ml-input__field--focused': isFocus,
                        })}
                        value={inputValue}
                        placeholder={isFocus ? placeholder : ''}
                        onFocus={() => onFocusToggle(true)}
                        onBlur={() => onFocusToggle(false)}
                        onChange={onTextChange}
                        {...props}
                    />
                </div>
                {error && (
                    <span data-testid='input-error' className='ml-input--error error'>
                        {error}
                    </span>
                )}
            </div>
        );
    },
);

Input.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    testId: PropTypes.string,
    onChange: PropTypes.func,
};

export default memo(Input);
