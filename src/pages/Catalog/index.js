import { useState, useLayoutEffect } from 'react';
import Cartlist from '~/layouts/components/Cartlist/Cartlist';
import Sidebar from '~/layouts/components/Sidebar/Sidebar';

function Catalog() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    const [checkedType, setCheckedType] = useState([]);
    const [checkedColor, setCheckedColor] = useState([]);
    const [checkedSize, setCheckedSize] = useState([]);

    const value = [checkedType, checkedColor, checkedSize];

    const ConsoleParent = (type, color, size) => {
        setTimeout(() => {
            setCheckedType([...type]);
            setCheckedColor([...color]);
            setCheckedSize([...size]);
        }, 300);
    };

    return (
        <div className="row">
            <Sidebar ConsoleParent={ConsoleParent} className="col l-3" />
            <Cartlist value={value} className="col l-9" />
        </div>
    );
}

export default Catalog;
