import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment, createContext, useEffect, useState } from 'react';
import { auth } from './firebase';

import { publicRoutes } from '~/routes';
import { MainLayout } from '~/layouts/MainLayout';

const UserContext = createContext();

function App() {
    const [userName, setUserName] = useState('');
    const [userDate, setUserDate] = useState('');

    const [currentUser, setCurrentUser] = useState(false);

    const values = {
        userName,
        userDate,
        currentUser,
    };

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(true);
                setUserName(user.displayName);
                setUserDate(user.metadata.creationTime);
            } else {
                setCurrentUser(false);
                setUserName('');
                setUserDate('');
            }
        });
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : MainLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <UserContext.Provider value={values}>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </UserContext.Provider>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export { App, UserContext };
