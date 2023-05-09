import Home from '~/pages/Home';
import Catalog from '~/pages/Catalog';
import Cart from '~/pages/Cart';
import Product from '~/pages/Product';
import Login from '~/features/auth/pages/Login';
import Register from '~/features/auth/pages/Register';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const ProtectedRoute = ({ children }) => {
    const currentUser = localStorage.getItem('user2');
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/login');
        }
    }, [currentUser, navigate]);

    return <>{children}</>;
};

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/catalog', component: Catalog },
    { path: '/catalog/:pPath', component: Product },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
];

const privateRoutes = [{ path: '/cart', component: Cart, protected: ProtectedRoute }];

export { publicRoutes, privateRoutes };
