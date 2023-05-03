import Home from '~/pages/Home';
import Catalog from '~/pages/Catalog';
import Cart from '~/pages/Cart';
import Product from '~/pages/Product';
import Login from '~/features/auth/pages/Login';
import Register from '~/features/auth/pages/Register';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/catalog', component: Catalog },
    { path: '/catalog/:pPath', component: Product },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
];

const privateRoutes = [{ path: '/cart', component: Cart }];

export { publicRoutes, privateRoutes };
