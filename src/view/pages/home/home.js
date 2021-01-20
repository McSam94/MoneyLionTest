import React, { useContext } from 'react';
import { Button, Text } from 'Components';
import { SignupContext } from 'Stores';
import './home.scss';

const Home = () => {
    const { start } = useContext(SignupContext);

    return (
        <div className='home'>
            <Text h1 className='home__title'>
                Say Hello to MoneyLion
            </Text>
            <Text h3 className='home__subtitle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim, dui
                vitae fringilla condimentum, lorem neque semper urna, et aliquam.
            </Text>
            <Button className='home__apply' onClick={start}>
                APPLY NOW
            </Button>
        </div>
    );
};

export default Home;
