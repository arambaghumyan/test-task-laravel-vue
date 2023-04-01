export default {
    state: {
        products: [],
        meta: {},
        product: null,
        filterColor: ['red', 'blue', 'orange', 'green']
    },

    actions: {

        /**
         *
         * @param commit
         * @returns {Promise<boolean|any>}
         */
        async getProducts({commit}, params) {

            try {
                let {data} = await axios.get(`/api/products`, params)
                commit('SET_PRODUCTS', data.data)
                commit('SET_META', data.meta)
                return data
            } catch (e) {
                Vue.swal({
                    position: 'top-end',
                    icon: 'error',
                    title: e.response.data.message,
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
         * @param dispatch
         * @param params
         * @returns {Promise<boolean|any>}
         */
        async store({commit, state, dispatch}, params) {

            try {
                let {data} = await axios.post(`/api/products`, params)
                dispatch('getProducts')
                return data
            } catch (e) {
                Vue.swal({
                    position: 'top-end',
                    icon: 'error',
                    title: e.response.data.message,
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
         * @param dispatch
         * @param id
         * @returns {Promise<boolean|any>}
         */
        async destroy({commit, state, dispatch}, id) {

            try {
                let response = await axios.delete(`/api/products/${id}`)
                dispatch('getProducts')
                return response.data
            } catch (e) {
                Vue.swal({
                    position: 'top-end',
                    icon: 'error',
                    title: e.response.data.message,
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
        async update({commit, state}, params) {

            try {
                let response = await axios.put(`/api/products/${params.id}`, params)
                return response.data
            } catch (e) {
                Vue.swal({
                    position: 'top-end',
                    icon: 'error',
                    title: e.response.data.data.message,
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
         * @param id
         * @returns {Promise<boolean|any>}
         */
        async show({commit, state}, id) {

            try {
                let {data} = await axios.get(`/api/products/${id}`)
                commit('SET_SINGLE_PRODUCT', data.data)
                return data
            } catch (e) {
                Vue.swal({
                    position: 'top-end',
                    icon: 'error',
                    title: e.response.data.data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                return false
            }
        },
    },

    mutations: {
        SET_PRODUCTS(state, data) {
            state.products = data
        },
        SET_META(state, data) {
            state.meta = data
        },
        SET_SINGLE_PRODUCT(state, data) {
            state.product = data
        },
    },

    getters: {
        GET_PRODUCTS(state) {
            return state.products
        },
        GET_META(state) {
            return state.meta
        },
        GET_PRODUCT(state) {
            return state.product
        },
        GET_FILTER_COLORS(state) {
            return state.filterColor
        }
    }
}
