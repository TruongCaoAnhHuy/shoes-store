import { useLayoutEffect } from 'react';
import Cartlist from '~/layouts/components/Cartlist/Cartlist';
import Sidebar from '~/layouts/components/Sidebar/Sidebar';

function Catalog() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div className="row">
            <Sidebar className="col l-3" />
            <Cartlist className="col l-9" />
        </div>
    );
}

export default Catalog;
