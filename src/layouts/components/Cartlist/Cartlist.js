import classNames from 'classnames/bind';
import styles from './Cartlist.module.scss';
import { product } from '~/assets/fakedata/product';
import CartItem from '../CartItem/CartItem';
import { useState, useEffect, useCallback } from 'react';

const cx = classNames.bind(styles);

function Cartlist(props) {
    const [newList, setNewList] = useState(product);

    const updateProductList = useCallback(() => {
        let temp = product;
        if (props.value[0].length > 0) {
            temp = temp.filter((item) => props.value[0].includes(item.type_slug));
        }

        if (props.value[1].length > 0) {
            temp = temp.filter((item) => {
                const check = item.color_slug.find((color) => props.value[1].includes(color));
                return check !== undefined;
            });
        }

        if (props.value[2].length > 0) {
            temp = temp.filter((item) => {
                const itemCheck = item.size.map((itemSize) => itemSize.toString());
                const check = itemCheck.find((size) => props.value[2].includes(size));
                return check !== undefined;
            });
        }

        setNewList(temp);
    }, [props.value]);

    useEffect(() => {
        updateProductList();
    }, [updateProductList]);

    return (
        <div className={`${props.className} ${cx('wrapper')}`}>
            <div className="row">
                {newList.map((product) => (
                    <div className={`col l-4 m-6 c-12 ${cx('cartlist-item')}`} key={product.id}>
                        <CartItem props={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cartlist;
