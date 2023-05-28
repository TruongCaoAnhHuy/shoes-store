import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { AddCart } from '~/redux/cartSlice';

import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { MinusIcon, PlusIcon } from '~/components/Icons/Icon';
import Button from '~/components/Button/Button';
import { productPopulars } from '~/assets/fakedata/product';
import { product } from '~/assets/fakedata/product';
import CartItem from '../CartItem/CartItem';

const cx = classNames.bind(styles);

function ProductDetail() {
    const [detailDesc, setDetailDesc] = useState(false);

    const productId = useParams();
    const productDetail = product.find((item) => item.pPath === productId.pPath.replace('@', ''));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productDetail]);

    const [quantity, setQuantity] = useState(1);

    const handlePlus = () => {
        setQuantity(quantity + 1);
    };

    const handleMinus = () => {
        if (quantity <= 1) {
            setQuantity(1);
        } else {
            setQuantity(quantity - 1);
        }
    };

    const [isSize, setIsSize] = useState(undefined);

    const dispatch = useDispatch();

    const check = () => {
        if (isSize === undefined) {
            alert('Choose size please !!!');
            return false;
        }

        return true;
    };

    const addToCart = () => {
        if (check()) {
            const newItem = {
                id: productDetail.id,
                pPath: productDetail.pPath,
                name: productDetail.name || '',
                size: isSize || '',
                quantity: quantity || '',
                price: productDetail.price,
                image: productDetail.image,
            };
            dispatch(AddCart(newItem));
        }
    };

    const navigate = useNavigate();

    const clickBuyNow = () => {
        if (check()) {
            addToCart();
            navigate('/cart');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <div className="row">
                    <div className="col l-7 c-12">
                        <div className={cx('product_image')}>
                            <div className={cx('image_list')}>
                                <img src={productDetail.image} alt="shoes" />
                                <img src={productDetail.image} alt="shoes" />
                            </div>
                            <div className={cx('image_main')}>
                                <img src={productDetail.image} alt="shoes" />
                            </div>
                            <div className={`${cx('product_desc')} ${detailDesc ? cx('expand') : ''}`}>
                                <h3 className={cx('product_desc_title')}>Chi tiết sản phẩm</h3>
                                <div
                                    className={cx('product_desc_content')}
                                    dangerouslySetInnerHTML={{ __html: productDetail.desc }}
                                ></div>
                                <Button
                                    primary
                                    className={cx('product_desc_toggle')}
                                    onClick={() => setDetailDesc(!detailDesc)}
                                >
                                    {detailDesc ? 'Thu gọn' : 'Xem thêm'}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col l-5 c-12">
                        <div className={cx('product_info')}>
                            <h1 className={cx('title')}>{productDetail.name}</h1>
                            <h2 className={cx('price')}>
                                {productDetail.price.slice(0, 3) + ',' + productDetail.price.slice(3)}
                            </h2>
                            <div className={cx('option')}>
                                <h3 className={cx('option_title')}>Size: </h3>
                                <ul className={cx('option_select')}>
                                    {productDetail.size.map((size) => (
                                        <li
                                            className={`${cx('option_select_item')} ${cx(
                                                isSize === size ? 'choose' : '',
                                            )}`}
                                            key={size}
                                            onClick={() => setIsSize(size)}
                                        >
                                            {size}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={cx('option')}>
                                <h3 className={cx('option_title')}>Số lượng: </h3>
                                <div className={cx('quantity')}>
                                    <span className={cx('quantity_btn')} onClick={handleMinus}>
                                        <MinusIcon />
                                    </span>
                                    <span className={cx('quantity_input')}>{quantity}</span>
                                    <span className={cx('quantity_btn')} onClick={handlePlus}>
                                        <PlusIcon />
                                    </span>
                                </div>
                            </div>
                            <div className={`${cx('option')} ${cx('option-btn')}`}>
                                <Button large primary onClick={addToCart}>
                                    Thêm vào giỏ
                                </Button>
                                <Button large primary onClick={clickBuyNow}>
                                    Mua ngay
                                </Button>
                            </div>
                            <div className={`${cx('product_desc_mobile')} ${detailDesc ? cx('expand') : ''}`}>
                                <h3 className={cx('product_desc_title')}>Chi tiết sản phẩm</h3>
                                <p
                                    className={cx('product_desc_content')}
                                    dangerouslySetInnerHTML={{ __html: productDetail.desc }}
                                ></p>
                                <Button
                                    primary
                                    className={cx('product_desc_toggle')}
                                    onClick={() => setDetailDesc(!detailDesc)}
                                >
                                    {detailDesc ? 'Thu gọn' : 'Xem thêm'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('product_more')}>
                <div className={cx('product_more_title')}>
                    <p>Phổ biến</p>
                </div>
                <div className="row">
                    {productPopulars.map((productPopular) => (
                        <div className="col l-3 m-6 c-12" key={productPopular.id}>
                            <CartItem props={productPopular} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
