import Modal from '~/components/Modal/Modal';
import styles from './ProductModal.module.scss';
import classNames from 'classnames/bind';
import { Popper as PopperWrapper } from '../Popper';
import { MinusIcon, PlusIcon } from '~/components/Icons/Icon';
import Button from '~/components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddCart } from '~/redux/cartSlice';

const cx = classNames.bind(styles);

function ProductModal(props) {
    const { children } = props;

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

    const [isChoose, setIsChoose] = useState(undefined);

    const dispatch = useDispatch();

    const check = () => {
        if (isChoose === undefined) {
            alert('Choose size please !!!');
            return false;
        }

        return true;
    };

    const addToCart = () => {
        if (check()) {
            const newItem = {
                id: props.value.id,
                pPath: props.value.pPath,
                name: props.value.name || '',
                size: isChoose || '',
                quantity: quantity || '',
                price: props.value.price,
                image: props.value.image,
            };
            dispatch(AddCart(newItem));
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <PopperWrapper>
                    <div className={cx('product_wrapper')}>
                        <div className={cx('images')}>
                            <div className={cx('image_list')}>
                                <img src={props.value.image} alt="product" />
                                <img src={props.value.image} alt="product" />
                            </div>
                            <div className={cx('image_main')}>
                                <img src={props.value.image} alt="product" />
                            </div>
                        </div>
                        <div className={cx('product_info')}>
                            <h2 className={cx('name')}>{props.value.name}</h2>
                            <h2 className={cx('price')}>
                                {props.value.price.slice(0, 3) + ',' + props.value.price.slice(3)}
                            </h2>
                            <div className={cx('option')}>
                                <h3 className={cx('option_title')}>Size: </h3>
                                <ul className={cx('option_select')}>
                                    {props.value.size.map((size) => (
                                        <li
                                            className={`${cx('option_select_item')} ${cx(
                                                isChoose === size ? 'choose' : '',
                                            )}`}
                                            key={size}
                                            onClick={() => setIsChoose(size)}
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
                            <div className={cx('option')}>
                                <Button large primary onClick={addToCart}>
                                    Thêm vào giỏ
                                </Button>
                                <Button large primary>
                                    Mua ngay
                                </Button>
                            </div>
                        </div>
                    </div>
                    {children}
                </PopperWrapper>
            </div>
            <Modal className={cx('overlay_none')}></Modal>
        </>
    );
}

export default ProductModal;
