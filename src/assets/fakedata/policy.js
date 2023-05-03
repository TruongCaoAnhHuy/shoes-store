const { FreeShipIcon, CreditCart, DiamondIcon, DonateHeartIcon } = require('~/components/Icons/Icon');

const policy = [
    {
        id: 1,
        title: 'Miễn phí giao hàng',
        desc: 'Miễn phí ship với đơn hàng > 239K',
        icon: <FreeShipIcon />,
    },
    {
        id: 2,
        title: 'Thanh toán COD',
        desc: 'Thanh toán khi nhận hàng (COD)',
        icon: <CreditCart />,
    },
    {
        id: 3,
        title: 'Khách hàng VIP',
        desc: 'Ưu đãi dành cho khách hàng VIP',
        icon: <DiamondIcon />,
    },
    {
        id: 4,
        title: 'Hỗ trợ bảo hành',
        desc: 'Đổi, sửa đồ tại tất cả store',
        icon: <DonateHeartIcon />,
    },
];

export { policy };
