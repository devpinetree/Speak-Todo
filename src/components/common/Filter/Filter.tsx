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
    <li>
      {filters?.map((value: TFilter, idx: number) => {
        return (
          <ul key={idx}>
            <button onClick={() => onFilter(value)}>{value}</button>
          </ul>
        );
      })}
    </li>
  );
};

export default Filter;
