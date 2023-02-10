import classNames from 'classnames/bind';
import styles from './List.module.scss';
import TodoItem from 'components/common/TodoItem';

const cx = classNames.bind(styles);

type TFilter = 'waiting' | 'completed' | 'all';
interface IItem {
  id: number;
  content: string;
  status: 'waiting' | 'completed';
}

interface Props {
  list: IItem[];
  filter: TFilter;
  onUpdate: (todoItem: IItem) => void;
  onDelete: (todoItem: IItem) => void;
}

const List = (props: Props) => {
  const { list, filter, onUpdate, onDelete } = props;

  const filtered = getFilteredItems(list, filter);

  return (
    <li className={cx('todo-list')}>
      {filtered.map((item: IItem, idx: number) => (
        <TodoItem
          key={idx}
          item={item}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </li>
  );
};

export default List;

const getFilteredItems = (list: IItem[], filter: TFilter) => {
  switch (filter) {
    case 'all':
      return list;

    case 'waiting':
    case 'completed':
      return list.filter((todo) => todo.status === filter);
  }
};
