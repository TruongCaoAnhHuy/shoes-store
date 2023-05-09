import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Button from '~/components/Button/Button';
import styles from './CartItem.module.scss';
import { useState } from 'react';
import ProductModal from '../ProductModal/ProductModal';

const cx = classNames.bind(styles);

function CartItem({ props }) {
    const [productModal, setProductModal] = useState(false);

    const handleClickBuy = (product) => {
        setProductModal(!productModal);
    };

    return (
        <>
            <div className={cx('product_item')}>
                <Link to={`/catalog/@${props.pPath}`} className={cx('product_info')}>
                    <div className={cx('product_img')}>
                        <img src={props.image} alt="product" />
                    </div>
                    <p className={cx('product_name')}>{props.name}</p>
                    <div className={cx('price_wrapper')}>
                        <h4 className={cx('price')}>{props.price.slice(0, 3) + ',' + props.price.slice(3)}</h4>
                        <h4 className={`${cx('price')} ${cx('price_sale')}`}>
                            {props.sale.slice(0, 3) + ',' + props.sale.slice(3)}
                        </h4>
                    </div>
                </Link>
                <div className={cx('product_btn')}>
                    <Button primary onClick={() => handleClickBuy(props)}>
                        Chọn mua
                    </Button>
                </div>
            </div>
            {productModal ? (
                <>
                    <ProductModal value={props}>
                        <Button primary className={cx('close_btn')} onClick={handleClickBuy}>
                            Đóng
                        </Button>
                    </ProductModal>
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default CartItem;
