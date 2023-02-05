import classNames from 'classnames/bind';
import styles from './Item.module.scss';

const cx = classNames.bind(styles);

interface IItem {
  id: number;
  content: string;
  status: 'waiting' | 'completed';
  category: string;
  tags?: string[];
}

interface Props {
  item: IItem;
}

const Item = (props: Props) => {
  const { item } = props;
  const { id, content, category } = item;

  return (
    <ul className={cx('todo-item', 'bg-slate-300', 'border-violet-300')}>
      <span>
        {id + 1}. {content} / {category}
      </span>
    </ul>
  );
};

export default Item;
