import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Button from '~/components/Button/Button';
import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { AddCart } from '~/redux/cartSlice';

const cx = classNames.bind(styles);

function CartItem({ props }) {
    const dispatch = useDispatch();
    return (
        <div className={cx('product_item')}>
            <Link to={``} className={cx('product_info')}>
                <div className={cx('product_img')}>
                    <img src={props.image} alt="product" />
                </div>
                <p className={cx('description')}>{props.desc}</p>
                <div className={cx('price_wrapper')}>
                    <h4 className={cx('price')}>{props.price.slice(0, 3) + ',' + props.price.slice(3)}</h4>
                    <h4 className={`${cx('price')} ${cx('price_sale')}`}>
                        {props.sale.slice(0, 3) + ',' + props.sale.slice(3)}
                    </h4>
                </div>
            </Link>
            <div className={cx('product_btn')}>
                <Button primary onClick={() => dispatch(AddCart(props))}>
                    Chọn mua
                </Button>
            </div>
        </div>
    );
}

export default CartItem;
