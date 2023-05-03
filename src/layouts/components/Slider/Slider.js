import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classNames from 'classnames/bind';

import styles from './Slider.module.scss';
import Button from '~/components/Button/Button';
import { slideItems } from '~/assets/fakedata/sliderAPI';
import './Slider.scss';

const cx = classNames.bind(styles);

function Slider() {
    return (
        <div className={cx('wrapper')}>
            <Carousel
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                autoPlay
                interval="3500"
                emulateTouch
            >
                {slideItems.map((slideItem) => (
                    <div key={slideItem.id} className={cx('item')}>
                        <div className={cx('content')}>
                            <div className={`${cx('title')} ${cx(slideItem.color)}`}>
                                <span className="animated_title">{slideItem.title}</span>
                            </div>
                            <div className={cx('description')}>
                                <span className="animated_desc">{slideItem.description}</span>
                            </div>
                            <Button className={`${cx(slideItem.color)} animated_btn`} primary large>
                                Xem chi tiết
                            </Button>
                        </div>
                        <img className={`${cx('img')} animated_img`} src={slideItem.image} alt="slider1" />
                        <div className={`${cx('background')} animated_background`}></div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Slider;
