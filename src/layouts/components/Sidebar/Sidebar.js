import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { colors, sizes, types } from '~/assets/fakedata/cartlist';
import Button from '~/components/Button/Button';
const cx = classNames.bind(styles);

function Sidebar({ className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes}>
            <div className={cx('type')}>
                <h3 className={cx('title')}>Danh mục sản phẩm</h3>
                {types.map((type) => (
                    <div className={cx('input')} key={type.id}>
                        <input id={type.forHtml} type="checkbox" />
                        <label htmlFor={type.forHtml}>{type.type}</label>
                    </div>
                ))}
            </div>
            <div className={cx('color')}>
                <h3 className={cx('title')}>Màu sắc</h3>
                {colors.map((color) => (
                    <div className={cx('input')} key={color.id}>
                        <input id={color.forHtml} type="checkbox" />
                        <label htmlFor={color.forHtml}>{color.color}</label>
                    </div>
                ))}
            </div>
            <div className={cx('size')}>
                <h3 className={cx('title')}>Kích cỡ</h3>
                {sizes.map((size) => (
                    <div className={cx('input')} key={size.id}>
                        <input id={size.id} type="checkbox" />
                        <label htmlFor={size.id}>{size.size}</label>
                    </div>
                ))}
            </div>
            <Button primary>Xóa bộ lọc</Button>
        </div>
    );
}

export default Sidebar;
