import { combineReducers } from "redux";

const initialState ={
    name: 'adi sanjaya'
};

const initialStateRegister = {
    title: 'Register Page',
    desc: 'Ini adalah desc untuk register'
};

const RegisterReducer = (state = initialStateRegister, action) => {
    return state
};

const initialStateLogin = {
    info: 'Tolong Masukan Password anda',
    isLogin: true,

};

const LoginReducer = (state = initialStateLogin, action) => {
    return state;
};

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
});

export default reducer;