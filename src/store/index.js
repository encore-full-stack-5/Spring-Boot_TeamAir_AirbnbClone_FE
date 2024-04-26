// import router from '@/router';
import { createStore } from 'vuex'
// import axios from 'axios';

export default createStore({
    state: {
        loginState: localStorage.getItem("token") == null ? false : true,
    },
    getters: {
        getLoginState(state){
            return state.isLogin;
        },
    },
    mutations: {
        mutateLoginState(state){
            state.isLogin = localStorage.getItem("token") == null ? false : true;
        }
    },
    actions: {
        logout(context){
            localStorage.removeItem("token");
            context.commit('mutateLoginState');
        },
        login(context, token){
            localStorage.setItem("token", token);
            context.commit('mutateLoginState');
        }
    },
    modules: {
        
    }
})