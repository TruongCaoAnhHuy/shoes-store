import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Policy.module.scss';
import '~/components/GlobalStyles/grid.css';
import { Popper as PopperWrapper } from '../Popper';
import { policy as policyData } from '~/assets/fakedata/policy';

const cx = classNames.bind(styles);

function Policy() {
    return (
        <div className="row">
            {policyData.map((policy) => (
                <div className="col l-3" key={policy.id}>
                    <PopperWrapper className={cx('wrapper_hover')}>
                        <Link to="/policy" className={cx('wrapper')}>
                            <div className={cx('icon')}>{policy.icon}</div>
                            <div className={cx('description')}>
                                <h3 className={cx('title')}>{policy.title}</h3>
                                <p>{policy.desc}</p>
                            </div>
                        </Link>
                    </PopperWrapper>
                </div>
            ))}
        </div>
    );
}

export default Policy;
