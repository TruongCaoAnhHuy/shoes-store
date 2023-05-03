import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: 'AIzaSyBf1X7MyvrcxYU2-SU3uEITpl54so99JWY',
    authDomain: 'shoes-web-6216d.firebaseapp.com',
    projectId: 'shoes-web-6216d',
    storageBucket: 'shoes-web-6216d.appspot.com',
    messagingSenderId: '493956694394',
    appId: '1:493956694394:web:2c05ac4470be12ca8116c3',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
