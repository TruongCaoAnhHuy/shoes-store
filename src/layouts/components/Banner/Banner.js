import classNames from 'classnames/bind';

import styles from './Banner.module.scss';
import images from '~/assets/image';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Banner() {
    const navigative = useNavigate();
    return (
        <div onClick={() => navigative('/catalog')} className={cx('banner')}>
            <img src={images.banner} alt="banner" />
        </div>
    );
}

export default Banner;
