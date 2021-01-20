import React, { useContext } from 'react';
import { Text, Button } from 'Components';
import { SignupContext } from 'Stores';
import Done from 'Icons/complete.svg';
import './complete.scss';

const Complete = () => {
    const { resetSignup } = useContext(SignupContext);

    return (
        <div className='complete'>
            <div className='complete__illustration'>
                <Done className='complete__illustration-icon' height='300' width='300' />
            </div>
            <Text h3 className='complete__text'>
                Congraz! Your account was created
            </Text>
            <Button className='complete__button' onClick={resetSignup}>
                APPLY AGAIN
            </Button>
        </div>
    );
};

export default Complete;
