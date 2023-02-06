import classNames from 'classnames/bind';
import styles from './List.module.scss';
import Item from 'components/common/Item';

const cx = classNames.bind(styles);

interface IItem {
  id: number;
  content: string;
  status: 'waiting' | 'completed';
  category: string;
  tags?: string[];
}

interface Props {
  list: IItem[];
}

const List = (props: Props) => {
  const { list } = props;

  return (
    <li className={cx('todo-list')}>
      {list.map((item, idx) => (
        <Item key={idx} item={item} />
      ))}
    </li>
  );
};

export default List;
