import { useLayoutEffect } from 'react';
import ProductDetail from '~/layouts/components/ProductDetail/ProductDetail';

function Product() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return <ProductDetail />;
}

export default Product;
