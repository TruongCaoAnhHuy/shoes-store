import { useLayoutEffect } from 'react';
import Policy from '~/layouts/components/Policy/Policy';
import Product from '~/layouts/components/Product/Product';
import Slider from '~/layouts/components/Slider/Slider';

function Home() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <div className="slider">
                <Slider />
            </div>
            <div className="policy">
                <Policy />
            </div>
            <div className="product">
                <Product />
            </div>
        </>
    );
}

export default Home;
