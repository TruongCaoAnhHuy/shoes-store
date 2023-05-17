import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '~/firebase';

import { useContext, useState } from 'react';

import styles from './auth.module.scss';
import Button from '~/components/Button/Button';
import { Popper as PopperWrapper } from '~/layouts/components/Popper';
import { BackBtnIcon, FaceBookIcon, GoogleIcon } from '~/components/Icons/Icon';
import usePasswordToggle from '~/hooks/usePasswordToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Modal from '~/components/Modal/Modal';
import { child, get, onValue, ref } from 'firebase/database';
import { UserContext } from '~/App';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Login() {
    const context = useContext(UserContext);

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const [errorMsg, setErrorMsg] = useState('');

    const [loading, setLoading] = useState(false);

    const [dataFirebase, setDataFirebase] = useState([]);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (!values.email || !values.password) {
            setErrorMsg('Fill all fields!!');
            return;
        }

        setLoading(true);
        setErrorMsg('');

        // const starCountRef = ref(db, 'users/' + context.userName + '/cart');
        // onValue(starCountRef, (snapshot) => {
        //     const data = snapshot.val();
        //     setDataFirebase(data);
        //     console.log(data);
        //     // localStorage.setItem('cartItems', JSON.stringify(data.cart));
        // });

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(async () => {
                setLoading(false);
                localStorage.setItem('user2', JSON.stringify(auth.currentUser));

                // console.log(dataFirebase);

                navigate('/');
            })
            .catch((err) => {
                setLoading(false);
                setErrorMsg(err.message);
            });
    };

    // get(child(db, 'users/' + context.userName))
    //     .then((snapshot) => {
    //         if (snapshot.exists()) {
    //             console.log(snapshot.val());
    //         } else {
    //             console.log('No data available');
    //         }
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });

    const [PasswordInputType, ToggleIcon] = usePasswordToggle();

    return (
        <div className={cx('wrapper')}>
            <PopperWrapper className={cx('popper_wrapper')}>
                <div className={cx('header')}>
                    <Link to="/" className={cx('back_btn')}>
                        <BackBtnIcon />
                    </Link>
                    <h2 className={cx('title')}>Login</h2>
                </div>
                <div className={cx('social_btn')}>
                    <Button className={cx('google_btn')} social>
                        <span>
                            <GoogleIcon />
                        </span>
                        <span className={cx('label_btn')}>Google</span>
                    </Button>
                    <Button className={cx('facebook_btn')} social>
                        <span>
                            <FaceBookIcon />
                        </span>
                        <span className={cx('label_btn')}>FaceBook</span>
                    </Button>
                </div>
                <form className="info_form" onSubmit={(e) => handleLoginSubmit(e)}>
                    <div className={cx('email')}>
                        <label htmlFor="email_id">Email Address</label>
                        <input
                            type="email"
                            id="email_id"
                            placeholder="Enter your email"
                            onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
                        />
                    </div>

                    <div className={cx('password')}>
                        <label htmlFor="password_id">Password</label>
                        <input
                            type={PasswordInputType}
                            id="password_id"
                            placeholder="Enter your password"
                            onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))}
                        />
                        <span className={cx('toggle_pass')}>{ToggleIcon}</span>
                    </div>

                    <div className={cx('btn_wrapper')}>
                        <span className={cx('error_msg')}>{errorMsg.replace('Firebase:', '')}</span>
                        <Button small primary className={cx('continue_btn')}>
                            Continue
                        </Button>
                    </div>
                </form>
                <div className={cx('footer')}>
                    <span>Don't have an account ?</span>
                    <Link to="/register">Register</Link>
                </div>
            </PopperWrapper>
            <Modal className={`${loading ? cx('overlay_none') : ''}`}>
                <FontAwesomeIcon icon={faSpinner} className={cx('overlay_icon')} />
            </Modal>
        </div>
    );
}

export default Login;
