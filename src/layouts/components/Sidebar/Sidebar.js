import classNames from 'classnames/bind';

import { useState } from 'react';
import { useEffect } from 'react';

import styles from './Sidebar.module.scss';
import { colors, sizes, types } from '~/assets/fakedata/cartlist';
import Button from '~/components/Button/Button';
import Checkbox from '~/components/Checkbox/Checkbox';
import { BackBtnIconMobile } from '~/components/Icons/Icon';

const cx = classNames.bind(styles);

function Sidebar(props) {
    // check type
    const [checkedType, setCheckedType] = useState([]);
    const handleCheckedType = (slug) => {
        setCheckedType((prev) => {
            const isChecked = checkedType.includes(slug);
            if (isChecked) {
                return checkedType.filter((item) => item !== slug);
            } else {
                return [...prev, slug];
            }
        });
    };

    // check color
    const [checkedColor, setCheckedColor] = useState([]);
    const handleCheckedColor = (slug) => {
        setCheckedColor((prev) => {
            const isChecked = checkedColor.includes(slug);
            if (isChecked) {
                return checkedColor.filter((item) => item !== slug);
            } else {
                return [...prev, slug];
            }
        });
    };

    // check size
    const [checkedSize, setCheckedSize] = useState([]);
    const handleCheckedSize = (size) => {
        setCheckedSize((prev) => {
            const isChecked = checkedSize.includes(size);
            if (isChecked) {
                return checkedSize.filter((item) => item !== size);
            } else {
                return [...prev, size];
            }
        });
    };

    useEffect(() => {
        props.ConsoleParent(checkedType, checkedColor, checkedSize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkedType, checkedColor, checkedSize]);

    const clearChecked = () => {
        setCheckedType([]);
        setCheckedColor([]);
        setCheckedSize([]);
        props.ConsoleParent(checkedType, checkedColor, checkedSize);
    };

    // responsive
    const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
    const handleToggleMenuMobile = () => {
        setToggleMenuMobile(!toggleMenuMobile);
    };

    return (
        <>
            <div className={`${props.className} ${cx('wrapper')} ${cx(toggleMenuMobile ? 'mobile' : '')}`}>
                <div className={cx('back')} onClick={handleToggleMenuMobile}>
                    <BackBtnIconMobile />
                </div>
                <div className={cx('type')}>
                    <h3 className={cx('title')}>Danh mục sản phẩm</h3>
                    {types.map((type) => (
                        <Checkbox
                            key={type.id}
                            checked={checkedType.includes(type.type_slug)}
                            onChange={() => handleCheckedType(type.type_slug)}
                        >
                            {type.type}
                        </Checkbox>
                    ))}
                </div>
                <div className={cx('color')}>
                    <h3 className={cx('title')}>Màu sắc</h3>
                    {colors.map((color) => (
                        <Checkbox
                            key={color.id}
                            checked={checkedColor.includes(color.color_slug)}
                            onChange={() => handleCheckedColor(color.color_slug)}
                        >
                            {color.color}
                        </Checkbox>
                    ))}
                </div>
                <div className={cx('size')}>
                    <h3 className={cx('title')}>Kích cỡ</h3>
                    {sizes.map((size) => (
                        <Checkbox
                            key={size.id}
                            checked={checkedSize.includes(size.size)}
                            onChange={() => handleCheckedSize(size.size)}
                        >
                            {size.size}
                        </Checkbox>
                    ))}
                </div>
                <Button primary onClick={clearChecked}>
                    Xóa bộ lọc
                </Button>
            </div>
            <Button className={cx('toggle-sidebar')} primary onClick={handleToggleMenuMobile}>
                bộ lọc
            </Button>
        </>
    );
}

export default Sidebar;
