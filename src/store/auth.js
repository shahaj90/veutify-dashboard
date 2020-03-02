import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        user: null,
        navBars: [],
        publicNavBars: [{
                label: "Login",
                url: "/"
            },
            {
                label: "Sign Up",
                url: "/signup"
            },
            {
                label: "Dashboard",
                url: "/dashboard"
            },
            {
                label: "User List",
                url: "/user-list"
            }
        ],
        authNavBars: [{
                label: "Dashboard",
                url: "/dashboard"
            },
            {
                label: "User List",
                url: "/user-list"
            }
        ],
    },
    getters: {

    },
    mutations: {
        setNavbar(state) {
            if (state.token) {
                state.navBars = state.authNavBars
            } else {
                state.navBars = state.publicNavBars
            }
        }
    },
    actions: {
        getNavbar(context) {
            context.commit('setNavbar')
        }
    }
})