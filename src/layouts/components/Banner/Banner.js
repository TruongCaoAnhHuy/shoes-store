import classNames from 'classnames/bind';

import styles from './Banner.module.scss';
import images from '~/assets/image';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('banner')}>
            <img src={images.banner} alt="banner" />
        </div>
    );
}

export default Banner;
