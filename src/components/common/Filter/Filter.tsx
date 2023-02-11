import classNames from 'classnames/bind';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

type TFilter = 'waiting' | 'completed' | 'all';

interface Props {
  filters: TFilter[];
  filter: TFilter;
  onFilter: (filter: TFilter) => void;
}

const Filter = (props: Props) => {
  const { filters, filter, onFilter } = props;

  return (
    <header className={cx('header')}>
      <ul className={cx('filters')}>
        {filters?.map((value: TFilter, idx: number) => {
          return (
            <li key={idx}>
              <button
                className={cx(
                  'filter-item',
                  `${filter === value && 'selected'}`
                )}
                onClick={() => onFilter(value)}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Filter;
