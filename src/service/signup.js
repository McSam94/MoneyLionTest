import { post } from './base';

const SignupSrv = {
    submit: (param) => post('/user', param),
};

export default SignupSrv;
