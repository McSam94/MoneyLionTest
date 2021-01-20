import React, { memo, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SignupContext } from 'Stores';
import { Text, Input, Button } from 'Components';
import './personal.scss';

const schema = yup.object().shape({
    firstName: yup.string().required('Please fill in your first name'),
    lastName: yup.string().required('Plase fill in your last name'),
    email: yup
        .string()
        .required('Please fill in your email')
        .email('Please fill in correct format email'),
});

const Personal = () => {
    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });
    const { updatePersonal } = useContext(SignupContext);

    return (
        <div className='personal'>
            <Text h3 className='personal__title'>
                Create Your Account
            </Text>
            <form className='personal__form' onSubmit={handleSubmit(updatePersonal)}>
                <Input
                    name='firstName'
                    label='First Name'
                    ref={register}
                    error={errors?.firstName?.message}
                />
                <Input
                    name='lastName'
                    label='Last Name'
                    ref={register}
                    error={errors?.lastName?.message}
                />
                <Input name='email' label='Email' ref={register} error={errors?.email?.message} />
                <Button type='submit' className='personal__submit'>
                    CONTINUE
                </Button>
            </form>
        </div>
    );
};

export default memo(Personal);
