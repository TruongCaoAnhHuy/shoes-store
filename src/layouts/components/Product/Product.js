import classNames from 'classnames/bind';

import styles from './Product.module.scss';
import Banner from '../Banner/Banner';
import { productTrends, productNews, productPopulars } from '~/assets/fakedata/product';

import CartItem from '../CartItem/CartItem';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <p>Top sản phẩm</p>
            </div>
            <div className={cx('product')}>
                <div className="row">
                    {productTrends.map((productTrend) => (
                        <div className="col l-3" key={productTrend.id}>
                            <CartItem props={productTrend} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('title')}>
                <p>Sản phẩm mới</p>
            </div>
            <div className={cx('product')}>
                <div className="row">
                    {productNews.map((productNew) => (
                        <div className="col l-3" key={productNew.id}>
                            <CartItem props={productNew} />
                        </div>
                    ))}
                </div>
            </div>
            <Banner />
            <div className={cx('title')}>
                <p>Phổ biến</p>
            </div>
            <div className={cx('product')}>
                <div className="row">
                    {productPopulars.map((productPopular) => (
                        <div className="col l-3" key={productPopular.id}>
                            <CartItem props={productPopular} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
