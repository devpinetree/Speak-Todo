import classNames from 'classnames/bind';
import styles from './Item.module.scss';

const cx = classNames.bind(styles);
interface IItem {
  id: number;
  content: string;
  completed: boolean;
  category: string;
  tags?: string[];
}

interface Props {
  item: IItem;
}

const Item = (props: Props) => {
  const { item } = props;
  const { id, content, completed, category } = item;

  return (
    <div className={cx('todo-item', 'bg-slate-300', 'border-violet-300')}>
      <div>{id + 1}</div>
      <div>{content}</div>
      <div>{completed}</div>
      <div>{category}</div>
    </div>
  );
};

export default Item;
