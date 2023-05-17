import classNames from 'classnames/bind';
import styles from './Cartlist.module.scss';
import { product } from '~/assets/fakedata/product';
import CartItem from '../CartItem/CartItem';

const cx = classNames.bind(styles);

function Cartlist({ className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes}>
            <div className="row">
                {product.map((product) => (
                    <div className={`col l-4 m-6 c-12 ${cx('cartlist-item')}`} key={product.id}>
                        <CartItem props={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cartlist;
