import React, { useCallback, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Text, Checkbox, Button } from 'Components';
import { SignupContext } from 'Stores';
import './agreement.scss';

const schema = yup.object().shape({
    etec: yup.bool().isTrue('You need to agree to proceed'),
    tnc: yup.bool().isTrue('You need to agree to proceed'),
});

const Agreement = () => {
    const { handleSubmit, control, errors } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });
    const {
        personal: { firstName, lastName, email },
        step,
        submit,
        isSubmitting,
        errMsg,
    } = useContext(SignupContext);
    const { push } = useHistory();

    useEffect(() => {
        if (step === 4) {
            push('/complete');
        }
    }, [step]);

    const signup = useCallback(
        ({ etec, tnc }) => {
            submit({
                firstName,
                lastName,
                email,
                agreement1: etec,
                agreement2: tnc,
            });
        },
        [firstName, lastName, email],
    );

    return (
        <div className='agreement'>
            <Text h3 className='agreement__title'>
                One last step!
            </Text>
            <form className='agreement__form' onSubmit={handleSubmit(signup)}>
                <Text className='agreement__form-title'>Agreement</Text>
                <div className='agreement__checkbox-container'>
                    <Controller
                        control={control}
                        name='etec'
                        render={({ onChange, value }) => (
                            <Checkbox
                                className='agreement__checkbox'
                                onCheck={onChange}
                                value={value}
                                label='I agree to the'
                                error={errors?.etec?.message}
                            />
                        )}
                        defaultValue={false}
                    />
                    <Text className='agreement__link' link='https://google.com'>
                        Electronic Transaction Esign Consent
                    </Text>
                </div>
                <div className='agreement__checkbox-container'>
                    <Controller
                        control={control}
                        name='tnc'
                        render={({ onChange, value }) => (
                            <Checkbox
                                className='agreement__checkbox'
                                label='I agree to the following agreements'
                                onCheck={onChange}
                                value={value}
                                error={errors?.tnc?.message}
                            />
                        )}
                        defaultValue={false}
                    />
                    <Text className='agreement__link' link='https://google.com'>
                        Privacy Notice
                    </Text>
                    <Text className='agreement__link' link='https://google.com'>
                        Terms and Conditions
                    </Text>
                    <Text className='agreement__link' link='https://google.com'>
                        Membership Agreement
                    </Text>
                </div>
                <div className='agreement__footer'>
                    {errors && (
                        <span className='error agreement--error'>
                            {errors?.[Object.keys(errors)?.[0]]?.message}
                        </span>
                    )}
                    {errMsg && (
                        <span className='error agreement--error'>
                            Opps, Something went wrong. Please try again
                        </span>
                    )}
                    <Button type='submit' isLoading={isSubmitting} className='agreement__submit'>
                        {'AGREE & CREATE ACCOUNT'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Agreement;
