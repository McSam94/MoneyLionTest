import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SignupContext } from 'Stores';
import { DatePicker, Text, Button } from 'Components';
import './dob.scss';

const schema = yup.object().shape({
    dob: yup.date(),
});

const Dob = () => {
    const { handleSubmit, control, errors } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });
    const { dob, updateDob } = useContext(SignupContext);

    return (
        <div className='dob'>
            <Text h3 className='dob__header'>
                {`What's your date of birth`}
            </Text>
            <form className='dob__form' onSubmit={handleSubmit(updateDob)}>
                <Controller
                    control={control}
                    name='dob'
                    render={({ onChange, value }) => (
                        <DatePicker
                            label='Your Birthday'
                            hint='MM/DD/YYY'
                            onChange={onChange}
                            value={value}
                            error={errors?.dob?.message}
                        />
                    )}
                    defaultValue={new Date(dob)}
                />
                <Button type='submit' className='dob__submit'>
                    CONTINUE
                </Button>
            </form>
        </div>
    );
};

export default Dob;
