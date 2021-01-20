import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ReactDatePicker from 'react-date-picker/dist/entry.nostyle';
import './datePicker.scss';

const DatePicker = ({ className, value, label, hint, error, onChange }) => {
    const [inputValue, setInputValue] = useState(value ?? new Date());
    const [activeStartDate, setActiveStartDate] = useState(undefined);

    const onUpdate = useCallback(
        (value) => {
            setInputValue(value);
            setActiveStartDate(new Date(value));
            if (onChange) {
                onChange(value);
            }
        },
        [onChange],
    );

    const onCalendarNavigate = useCallback((value) => {
        setActiveStartDate(new Date(value.activeStartDate));
    }, []);

    return (
        <div className={cn('ml-date', className)}>
            {label && <div className='ml-date__label'>{label}</div>}
            <ReactDatePicker
                className='ml-date__picker'
                calendarClassName='ml-date__calendar'
                activeStartDate={activeStartDate}
                onActiveStartDateChange={onCalendarNavigate}
                clearIcon={null}
                calendarIcon={null}
                value={new Date(inputValue)}
                onChange={onUpdate}
                format='MM/dd/yyyy'
            />
            {hint && <span className='ml-date__hint'>{hint}</span>}
            {error && <span className='error ml-date--error'>{hint}</span>}
        </div>
    );
};

DatePicker.propTypes = {
    className: PropTypes.string,
    value: PropTypes.objectOf(Date),
    onChange: PropTypes.func,
    label: PropTypes.string,
    hint: PropTypes.string,
    error: PropTypes.string,
};

export default memo(DatePicker);
