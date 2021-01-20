import React, { useContext, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Home, Personal, Dob, Agreement, Complete } from 'Pages';
import { SignupContext, UiContext } from 'Stores';
import Logo from 'Icons/logo.svg';
import Moon from 'Icons/moon.svg';
import Sun from 'Icons/sun.svg';
import './main.scss';

const Main = () => {
    const { step } = useContext(SignupContext);
    const { isDarkMode, toggleDarkMode } = useContext(UiContext);
    const { push } = useHistory();

    useEffect(() => {
        switch (step) {
            case 0:
                push('/');
                break;
            case 1:
                push('/personal');
                break;
            case 2:
                push('/dob');
                break;
            case 3:
                push('/agreement');
                break;
            default:
                break;
        }
    }, [push, step]);

    return (
        <div className='main'>
            <div className='main__header'>
                <Logo className='main__header-logo' />
                <div className='main__theme' onClick={toggleDarkMode}>
                    {isDarkMode ? (
                        <Moon className='main__theme--moon' height='100%' width='100%' />
                    ) : (
                        <Sun className='main__theme--sun' height='100%' width='100%' />
                    )}
                </div>
                <div
                    className='main__header-progress'
                    style={{ width: `${(100 / 4) * step}%`, opacity: step === 4 ? 0 : 1 }}
                />
            </div>
            <div className='main__content'>
                <div className='main__content-container'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/personal' component={Personal} />
                        <Route path='/dob' component={Dob} />
                        <Route path='/agreement' component={Agreement} />
                        <Route path='/complete' component={Complete} />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Main;
