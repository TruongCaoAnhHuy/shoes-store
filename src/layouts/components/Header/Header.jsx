import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { GetTotal } from '~/redux/cartSlice';

import { auth, db } from '~/firebase';
import { ref, set } from 'firebase/database';

import images from '~/assets/image';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import { UserContext } from '~/App';
import { Popper as PopperWrapper } from '~/layouts/components/Popper';
import { BackBtnIconMobile, CartIcon, LogOutIcon, MenuBarIcon, SearchIcon, UserIcon } from '~/components/Icons/Icon';

const cx = classNames.bind(styles);

function Header() {
    const mainNav = [
        {
            id: 1,
            title: 'Trang chủ',
            path: '/',
        },
        {
            id: 2,
            title: 'Sản phẩm',
            path: '/catalog',
        },
    ];

    const [isShrink, setIsShrink] = useState(false);

    const { carts } = useSelector((item) => item.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetTotal());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carts]);

    const context = useContext(UserContext);
    const currentUser = context.currentUser;

    const menuRef = useRef(null);
    const menuToggle = () => {
        menuRef.current.classList.toggle('active');
    };

    const logOut = () => {
        auth.signOut();

        // lưu dữ liệu người dùng vào firebase
        set(ref(db, 'users/' + auth.currentUser.displayName.replace('.', '')), {
            userName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            cart: carts,
        });

        localStorage.removeItem('user2');
        localStorage.removeItem('cartItems');
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setIsShrink(true);
            } else {
                setIsShrink(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const cartsLocal = JSON.parse(localStorage.getItem('cartItems'));
    const quantityLocal = cartsLocal ? cartsLocal.reduce((total, item) => total + Number(item.quantity), 0) : 0;

    // ipad
    const [toggleMenuMobile, setToggleMenuMobile] = useState(false);

    const handleToggleMenuMobile = () => {
        setToggleMenuMobile(!toggleMenuMobile);
    };

    return (
        <header className={`${cx('wrapper')} ${isShrink ? cx('header-shrink') : ''}`}>
            <div ref={menuRef} className={`${cx('container')} container`}>
                <div className={cx('menu-mobile-bar')} onClick={handleToggleMenuMobile}>
                    <MenuBarIcon />
                </div>
                <ul className={`${cx('nav')} ${toggleMenuMobile ? cx('nav-active') : ''}`}>
                    <div className={cx('back')} onClick={handleToggleMenuMobile}>
                        <BackBtnIconMobile />
                    </div>
                    {mainNav.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${cx('nav-item')}`}
                            onClick={() => {
                                menuToggle();
                                setToggleMenuMobile(false);
                            }}
                        >
                            <NavLink to={nav.path} className={({ isActive }) => cx(`${isActive ? 'active' : ''}`)}>
                                {nav.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button className={cx('search')}>
                                <SearchIcon />
                            </Button>
                            <Button className={cx('cart')} to="/cart">
                                <CartIcon />
                            </Button>
                            <span className={cx('quality')}>{quantityLocal}</span>
                            <TippyHeadless
                                interactive
                                hideOnClick={true}
                                delay={[0, 1000]}
                                placement="bottom-start"
                                zIndex={99999}
                                appendTo={document.body}
                                render={(attrs) => (
                                    <PopperWrapper>
                                        <div className={cx('user_wrapper')} tabIndex="-1" {...attrs}>
                                            <div className={cx('user_content')}>
                                                <img src={images.user} alt="user" />
                                                <div className={cx('user_info')}>
                                                    <div className={cx('username')}>
                                                        <p className={cx('username_label')}>User: </p>
                                                        <h3
                                                            className={`${cx('username_value')} ${cx(
                                                                'username_value_name',
                                                            )}`}
                                                        >
                                                            {context.userName}
                                                        </h3>
                                                    </div>
                                                    <div className={cx('username')}>
                                                        <p className={cx('username_label')}>Created: </p>
                                                        <h3
                                                            className={`${cx('username_value')} ${cx(
                                                                'username_value_date',
                                                            )}`}
                                                        >
                                                            {context.userDate}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button primary leftIcon={<LogOutIcon />} onClick={logOut}>
                                                Log out
                                            </Button>
                                        </div>
                                    </PopperWrapper>
                                )}
                            >
                                <button className={cx('user')}>
                                    <UserIcon />
                                </button>
                            </TippyHeadless>
                        </>
                    ) : (
                        <>
                            <Button to="/login">Đăng nhập</Button>
                            <Button primary to="/register" className={cx('register-btn')}>
                                Đăng ký
                            </Button>
                        </>
                    )}
                </div>
            </div>
            <div className={`${cx('logo')} ${isShrink ? cx('logo-shrink') : ''}`}>
                <Link to="/">
                    <img src={images.logo} alt="logo" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
