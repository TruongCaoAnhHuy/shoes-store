import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

function Checkbox(props) {
    const { children, checked, onChange } = props;

    return (
        <div className={cx('input-wrapper')} key={props.id}>
            <label className={cx('label')}>
                <input className={cx('input-hidden')} type="checkbox" checked={checked} onChange={onChange} />
                <span className={cx('square')}></span>
                {children}
            </label>
        </div>
    );
}

export default Checkbox;
