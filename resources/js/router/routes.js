import auth from './middleware/auth';
import unauthorized from './middleware/unauthorized'

export default [
    {
        path: '/',
        name: 'home',
        meta: {
            middleware: auth,
        },
        component: () => import("../pages/Home")
    },
    {
        path: '/products',
        name: 'products',
        meta: {
            middleware: auth,
        },
        component: () => import("../pages/Products.vue")
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            middleware: unauthorized,
        },
        component: () => import("../pages/Login")
    },
    {
        path: '/signup',
        name: 'signup',
        meta: {
            middleware: unauthorized,
        },
        component: () => import("../pages/SignUp")
    },
    {
        path: '*',
        name: 'notFound404',
        component: () => import("../pages/notFound404")
    }
]
