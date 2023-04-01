import Cookies from "js-cookie";

export default function auth({ next, router }) {
    if (Cookies.get('Authorization')) {
        return router.push({ name: 'home' });
    }

    return next();
}
