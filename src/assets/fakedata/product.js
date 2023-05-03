import images from '../image';

const product = [
    {
        id: 1,
        isNew: true,
        image: images.grayShoes,
        desc: 'Giày chạy bộ Run One - Xám',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunone-xam',
        size: [40, 41, 42],
    },
    {
        id: 2,
        isNew: true,
        image: images.grayShoes2,
        desc: 'Giày chạy bộ Run One - Xám nhạt',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunone-xamnhat',
        size: [37, 38, 39, 40],
    },
    {
        id: 3,
        isNew: true,
        isPopular: true,
        image: images.cushionShoesDen,
        desc: 'Giày chạy bộ Run Cushion - Đen',
        price: '194000',
        sale: '399000',
        pPath: 'giayruncushion-den',
        size: [38, 39, 40],
    },
    {
        id: 4,
        isTrend: true,
        image: images.activeShoesXanhLa,
        desc: 'Giày chạy bộ Run Active - Xanh lá',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunactive-xanhla',
        size: [37, 38, 39, 40, 41, 42],
    },
    {
        id: 5,
        isNew: true,
        image: images.activeShoesTrangHong,
        desc: 'Giày chạy bộ Run Active - Trắng Hồng',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunactive-tranghong',
        size: [37, 38, 39],
    },
    {
        id: 6,
        isNew: true,
        image: images.fitnessShoesXam,
        desc: 'Giày chạy bộ Run Fitness - Xám',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunfitness-xam',
        size: [39, 40, 41, 42],
    },
    {
        id: 7,
        isNew: true,
        isPopular: true,
        image: images.supportShoesDen,
        desc: 'Giày chạy bộ Run Support - Đen',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunsupport-den',
        size: [40, 41, 42],
    },
    {
        id: 8,
        isNew: true,
        isPopular: true,
        image: images.cushionShoesDenDo,
        desc: 'Giày chạy bộ Run Active - Đen Đỏ',
        price: '194000',
        sale: '399000',
        pPath: 'giayruncushion-den',
        size: [39, 40, 41, 42],
    },
    {
        id: 9,
        isTrend: true,
        isPopular: true,
        image: images.activeShoesXanhDen,
        desc: 'Giày chạy bộ Run Active - Xanh đen',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunactive-xanhden',
        size: [37, 38, 39, 40, 41, 42],
    },
    {
        id: 10,
        isTrend: true,
        isPopular: true,
        image: images.activeShoesDenCam,
        desc: 'Giày chạy bộ Run Active - Đen cam',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunactive-dencam',
        size: [37, 38, 39, 40, 41, 42],
    },
    {
        id: 11,
        isTrend: true,
        image: images.activeShoesTrangCam,
        desc: 'Giày chạy bộ Run Active - Trắng cam',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunactive-trangcam',
        size: [37, 38, 39, 40, 41, 42],
    },
    {
        id: 12,
        isNew: true,
        isPopular: true,
        image: images.activeShoesDenHong,
        desc: 'Giày chạy bộ Run Active - Đen hồng',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunactive-denhong',
        size: [37, 38, 39, 40, 41, 42],
    },
    {
        id: 13,
        isTrend: true,
        image: images.supportShoesHong,
        desc: 'Giày chạy bộ Run Support - Hồng',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunsupport-hong',
        size: [37, 38, 39, 40, 41, 42],
    },
    {
        id: 14,
        isTrend: true,
        image: images.supportShoesXanhLa,
        desc: 'Giày chạy bộ Run Support - Xanh lá',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunsupport-xanhla',
        size: [37, 38, 39, 40, 41, 42],
    },
    {
        id: 15,
        isTrend: true,
        image: images.fastShoesXanhLa,
        desc: 'Giày chạy bộ Kiprun Fast - Xanh lam',
        price: '194000',
        sale: '399000',
        pPath: 'giaykimprunfast-xanhlam',
        size: [37, 38, 39],
    },
    {
        id: 16,
        isTrend: true,
        image: images.fastShoesXanhLa2,
        desc: 'Giày chạy bộ Run Support - Xanh đậm',
        price: '194000',
        sale: '399000',
        pPath: 'giaykimprunfast-xanhdam',
        size: [38, 39, 40, 41],
    },
    {
        id: 17,
        isPopular: true,
        image: images.fitnessShoesXanhXam,
        desc: 'Giày chạy bộ Run Fitness - Xanh xám',
        price: '194000',
        sale: '399000',
        pPath: 'giayrunfitness-xanhxam',
        size: [41, 42],
    },
    {
        id: 18,
        isPopular: true,
        image: images.fastShoesDenXanhLa,
        desc: 'Giày chạy bộ Kiprun Fast - Đen xanh lá',
        price: '194000',
        sale: '399000',
        pPath: 'giaykiprunfast-xanhla',
        size: [37, 38, 39, 40, 41, 42],
    },
];

const productTrends = product.filter((item) => item.isTrend);
const productNews = product.filter((item) => item.isNew);
const productPopulars = product.filter((item) => item.isPopular);

export { product, productTrends, productNews, productPopulars };