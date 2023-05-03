import images from '~/assets/image';
import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import { MinusIcon, PlusIcon } from '~/components/Icons/Icon';
import { useState } from 'react';
import Button from '~/components/Button/Button';
import { productPopulars } from '~/assets/fakedata/product';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    const [detailDesc, setDetailDesc] = useState(false);

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

    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <div className="row">
                    <div className="col l-7">
                        <div className={cx('product_image')}>
                            <div className={cx('image_list')}>
                                <img src={images.activeShoesDenCam} alt="shoes" />
                                <img src={images.activeShoesDenCam} alt="shoes" />
                            </div>
                            <div className={cx('image_main')}>
                                <img src={images.activeShoesDenCam} alt="shoes" />
                            </div>
                            <div className={`${cx('product_desc')} ${detailDesc ? cx('expand') : ''}`}>
                                <h3 className={cx('product_desc_title')}>Chi tiết sản phẩm</h3>
                                <p className={cx('product_desc_content')}>
                                    Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa
                                    khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ.
                                    Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang
                                    phục hàng ngày!
                                    <br />
                                    <br />
                                    <br />
                                    Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc
                                    áo thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính
                                    sự đơn giản của chúng. Càng đơn giản, bạn lại càng dễ mix & match với những món đồ
                                    khác nhau.Áo thun nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay
                                    cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc
                                    biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính,
                                    trơn màu. Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần
                                    đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy
                                    trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng
                                    mát ngay khi chạm vào. Cùng với đó, áo thun nữ cotton cổ tròn Yody có khả năng thâm
                                    shuts mồ hôi rất tốt nên người mặc không bị cảm giác bí bách, dính dính trên da khi
                                    đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm cũng chưa 5% spandex - loại sợi giúp co
                                    giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều môi trường, ngay cả khi vận động
                                    <br />
                                    <br />
                                    <br />
                                    Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc
                                    áo thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính
                                    sự đơn giản của chúng. Càng đơn giản, bạn lại càng dễ mix & match với những món đồ
                                    khác nhau.Áo thun nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay
                                    cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc
                                    biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính,
                                    trơn màu. Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần
                                    đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy
                                    trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng
                                    mát ngay khi chạm vào. Cùng với đó, áo thun nữ cotton cổ tròn Yody có khả năng thâm
                                    shuts mồ hôi rất tốt nên người mặc không bị cảm giác bí bách, dính dính trên da khi
                                    đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm cũng chưa 5% spandex - loại sợi giúp co
                                    giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều môi trường, ngay cả khi vận động
                                </p>
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
                    <div className="col l-5">
                        <div className={cx('product_info')}>
                            <h1 className={cx('title')}>Giày Run Active - Đen Cam</h1>
                            <h2 className={cx('price')}>189,000</h2>
                            <div className={cx('option')}>
                                <h3 className={cx('option_title')}>Size: </h3>
                                <ul className={cx('option_select')}>
                                    <li className={cx('option_select_item')}>37</li>
                                    <li className={cx('option_select_item')}>37</li>
                                    <li className={cx('option_select_item')}>37</li>
                                    <li className={cx('option_select_item')}>37</li>
                                    <li className={cx('option_select_item')}>37</li>
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
                                <Button large primary>
                                    Thêm vào giỏ
                                </Button>
                                <Button large primary>
                                    Mua ngay
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
                        <div className="col l-3" key={productPopular.id}>
                            <div className={cx('product_more_item')}>
                                <Link to={``} className={cx('product_more_info')}>
                                    <div className={cx('product_more_img')}>
                                        <img src={productPopular.image} alt="product" />
                                    </div>
                                    <p className={cx('product_more_desc')}>{productPopular.desc}</p>
                                    <div className={cx('product_more_price_wrapper')}>
                                        <h4 className={cx('product_more_price')}>
                                            {productPopular.price.slice(0, 3) + ',' + productPopular.price.slice(3)}
                                        </h4>
                                        <h4 className={`${cx('product_more_price')} ${cx('product_more_price_sale')}`}>
                                            {productPopular.sale.slice(0, 3) + ',' + productPopular.sale.slice(3)}
                                        </h4>
                                    </div>
                                </Link>
                                <div className={cx('product_more_product_btn')}>
                                    <Button primary>Chọn mua</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
