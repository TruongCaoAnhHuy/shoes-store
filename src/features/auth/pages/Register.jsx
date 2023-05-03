/* eslint-disable no-useless-escape */
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '~/firebase';

import { useState } from 'react';

import styles from './auth.module.scss';
import Button from '~/components/Button/Button';
import { Popper as PopperWrapper } from '~/layouts/components/Popper';
import { BackBtnIcon, FaceBookIcon, GoogleIcon } from '~/components/Icons/Icon';
import usePasswordToggle from '~/hooks/usePasswordToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Modal from '~/components/Modal/Modal';

const cx = classNames.bind(styles);

function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        cPass: '',
        phone: '',
    });

    const [loading, setLoading] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');
    const [errorAll, setErrorAll] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [errorCpass, setErrorCpass] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);

    var regexName = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regexPass = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d).{8,}$/;

    const handleRegisterSubmit = (e) => {
        e.preventDefault();

        if (!values.name || !values.email || !values.password || !values.cPass || !values.phone) {
            setErrorMsg('Fill all fields!!');
            return;
        }

        if (values.name.length < 8) {
            setErrorMsg('UserName must >= 8 characters');
            setErrorAll(false);
            setErrorName(true);
            setErrorEmail(false);
            setErrorPass(false);
            setErrorCpass(false);
            return;
        } else if (!regexName.test(values.name)) {
            setErrorMsg('UserName must contain letters and numbers');
            setErrorAll(false);
            setErrorName(true);
            setErrorEmail(false);
            setErrorPass(false);
            setErrorCpass(false);
            setErrorPhone(false);
            return;
        }

        if (!regexEmail.test(values.email)) {
            setErrorMsg('Incorrect email');
            setErrorAll(false);
            setErrorName(false);
            setErrorEmail(true);
            setErrorPass(false);
            setErrorCpass(false);
            setErrorPhone(false);
            return;
        }

        if (!regexPass.test(values.password)) {
            setErrorMsg(
                'Password must be more than 8 characters and contain at least one letter, one number and a special character',
            );
            setErrorAll(false);
            setErrorName(false);
            setErrorEmail(false);
            setErrorPass(true);
            setErrorCpass(false);
            setErrorPhone(false);
            return;
        }

        if (values.cPass !== values.password) {
            setErrorMsg('Incorrect password');
            setErrorAll(false);
            setErrorName(false);
            setErrorEmail(false);
            setErrorPass(false);
            setErrorCpass(true);
            setErrorPhone(false);
            return;
        }

        if (isNaN(values.phone)) {
            setErrorMsg('PhoneNumber must be numbers');
            setErrorAll(false);
            setErrorName(false);
            setErrorEmail(false);
            setErrorPass(false);
            setErrorCpass(false);
            setErrorPhone(true);
            return;
        }

        setLoading(true);
        setErrorAll(false);
        setErrorName(false);
        setErrorEmail(false);
        setErrorPass(false);
        setErrorCpass(false);
        setErrorPhone(false);
        setErrorMsg('');

        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setLoading(false);
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                });
                navigate('/');
                window.location.reload();
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
                setErrorMsg('User name is already!!');
            });
    };

    const [PasswordInputType, ToggleIcon] = usePasswordToggle();

    return (
        <div className={cx('wrapper')}>
            <PopperWrapper className={cx('popper_wrapper')}>
                <div className={cx('header')}>
                    <Link to="/" className={cx('back_btn')}>
                        <BackBtnIcon />
                    </Link>
                    <h2 className={cx('title')}>Register</h2>
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
                <form className="info_form" onSubmit={(e) => handleRegisterSubmit(e)}>
                    <div className={cx('name')}>
                        <label
                            className={`${errorName ? 'error_color' : ''} ${errorAll ? 'error_color' : ''}`}
                            htmlFor="name_id"
                        >
                            User Name
                        </label>
                        <input
                            id="name_id"
                            placeholder="Enter your name"
                            onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
                        />
                    </div>

                    <div className={cx('email')}>
                        <label
                            className={`${errorEmail ? 'error_color' : ''} ${errorAll ? 'error_color' : ''}`}
                            htmlFor="email_id"
                        >
                            Email Address
                        </label>
                        <input
                            id="email_id"
                            placeholder="Enter your email"
                            onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
                        />
                    </div>

                    <div className={cx('password')}>
                        <label
                            className={`${errorPass ? 'error_color' : ''} ${errorAll ? 'error_color' : ''}`}
                            htmlFor="password_id"
                        >
                            Password
                        </label>
                        <input
                            type={PasswordInputType}
                            id="password_id"
                            placeholder="Enter your password"
                            onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))}
                        />
                        <span className={cx('toggle_pass')}>{ToggleIcon}</span>
                    </div>

                    <div className={cx('c_password')}>
                        <label
                            className={`${errorCpass ? 'error_color' : ''} ${errorAll ? 'error_color' : ''}`}
                            htmlFor="c_password_id"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="c_password_id"
                            placeholder="Confirm your password"
                            onChange={(e) => setValues((prev) => ({ ...prev, cPass: e.target.value }))}
                        />
                    </div>

                    <div className={cx('phone')}>
                        <label
                            className={`${errorPhone ? 'error_color' : ''} ${errorAll ? 'error_color' : ''}`}
                            htmlFor="phone_id"
                        >
                            Phone Number
                        </label>
                        <input
                            id="phone_id"
                            placeholder="Enter your phone numbers"
                            onChange={(e) => setValues((prev) => ({ ...prev, phone: e.target.value }))}
                        />
                    </div>

                    <div className={cx('btn_wrapper')}>
                        <span className={cx('error_msg')}>{errorMsg}</span>
                        <Button small primary className={cx('continue_btn')}>
                            Continue
                        </Button>
                    </div>
                </form>
                <div className={cx('footer')}>
                    <span>Already have an account ?</span>
                    <Link to="/login">Login</Link>
                </div>
            </PopperWrapper>
            <Modal className={`${loading ? cx('overlay_none') : ''}`}>
                <FontAwesomeIcon icon={faSpinner} className={cx('overlay_icon')} />
            </Modal>
        </div>
    );
}

export default Register;
