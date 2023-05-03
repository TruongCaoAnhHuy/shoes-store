import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import images from '~/assets/image';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className="container row">
                <div className="col l-3">
                    <h2 className={cx('title')}>Tổng đài hỗ trợ</h2>
                    <div className={cx('content')}>
                        <p>
                            Liên hệ đặt hàng{' '}
                            <Link className={cx('phone')} to="/contact">
                                0123456789
                            </Link>
                        </p>
                        <p>
                            Thắc mắc đơn hàng{' '}
                            <Link className={cx('phone')} to="/contact">
                                0123456789
                            </Link>
                        </p>
                        <p>
                            Góp ý, khiếu nại{' '}
                            <Link className={cx('phone')} to="/contact">
                                0123456789
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="col l-3">
                    <h2 className={cx('title')}>Về shoes</h2>
                    <div className={cx('content')}>
                        <p>
                            <Link to="/about">Giới thiệu</Link>
                        </p>
                        <p>
                            <Link to="/contact">Liên hệ</Link>
                        </p>
                        <p>
                            <Link to="/about">Tuyển dụng</Link>
                        </p>
                        <p>
                            <Link to="/about">Tin tức</Link>
                        </p>
                        <p>
                            <Link to="/about">Hệ thống cửa hàng</Link>
                        </p>
                    </div>
                </div>
                <div className="col l-3">
                    <h2 className={cx('title')}>Chắm sóc khách hàng</h2>
                    <div className={cx('content')}>
                        <p>
                            <Link to="/about">Chính sách đổi trả</Link>
                        </p>
                        <p>
                            <Link to="/about">Chính sách bảo hành</Link>
                        </p>
                        <p>
                            <Link to="/about">Chính sách hoàn tiền</Link>
                        </p>
                    </div>
                </div>
                <div className="col l-3">
                    <img className={cx('logo')} src={images.logo} alt="logo" />
                    <div className={cx('content')}>
                        <p>
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng
                            Việt. Hãy cùng Shoes hướng đến một cuộc sống năng động, tích cực hơn.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
