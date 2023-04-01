import Cookies from 'js-cookie'

export default {
    state: {
        auth: null
    },

    actions: {

        /**
         *
         * @param commit
         * @param state
         * @param params
         * @returns {Promise<boolean|any>}
         */
        async create({commit, state}, params) {

            try {
                let {data} = await axios.post('/api/register', params)
                commit('SET_AUTH', data.data.token)
                return data
            }
             catch (error) {
                Vue.swal({
                    position: 'top-end',
                    icon: 'error',
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                return false
            }
        },

        /**
         *
         * @param commit
         * @param state
         * @param params
         * @returns {Promise<boolean|any>}
         */
        async login({commit, state}, params) {

            try {
                let {data} = await axios.post(`/api/login`, params)
                commit('SET_AUTH', data.data.token)
                return data
            } catch (error) {
                Vue.swal({
                    position: 'top-end',
                    icon: 'error',
                    title: error.response.data.messages,
                    showConfirmButton: false,
                    timer: 1500
                });
                return false
            }

        },

        /**
         *
         * @param commit
         * @returns {Promise<boolean|any>}
         */
        async logout({commit}) {

            try {
                let {data} = await axios.get(`/api/logout`)
                commit('REMOVE_AUTH')
                return data
            } catch (error) {
                Vue.swal({
                    position: 'top-end',
                    icon: 'error',
                    title: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                return false
            }
        }
    },

    mutations: {
        SET_AUTH(state, data) {
            if (data) Cookies.set('Authorization', data)
            state.auth = data
            window.axios.defaults.headers.common['Authorization'] = `Bearer ${data}`;
        },
        REMOVE_AUTH(state) {
            Cookies.remove('Authorization')
            state.auth = null
            delete axios.defaults.headers.common["Authorization"];
        }
    },

    getters: {
        GET_AUTH(state) {
            return state.auth
        }
    }
}
