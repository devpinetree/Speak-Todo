import classNames from 'classnames/bind';
import React from 'react';
import styles from './TodoItem.module.scss';

const cx = classNames.bind(styles);

interface IItem {
  id: number;
  content: string;
  status: 'waiting' | 'completed';
}

interface Props {
  item: IItem;
  onUpdate: (todoItem: IItem) => void;
  onDelete: (todoItem: IItem) => void;
}

const TodoItem = (props: Props) => {
  const { item, onUpdate, onDelete } = props;
  const { id, content, status } = item;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? 'completed' : 'waiting';
    onUpdate({ ...item, status });
  };

  return (
    <li className={cx('todo-item', 'bg-slate-300', 'border-violet-300')}>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === 'completed'}
        onChange={onChange}
      >
        {/* {id + 1}. {content} */}
      </input>
      <span>
        {id + 1}. {content}
      </span>
      <button onClick={() => onDelete(item)}> X </button>
    </li>
  );
};

export default TodoItem;
