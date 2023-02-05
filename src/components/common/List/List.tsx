import classNames from 'classnames/bind';
import styles from './List.module.scss';
import Item from 'components/common/Item';

const cx = classNames.bind(styles);

const List = () => {
  const list = [
    {
      id: 0,
      content: '슬램덩크 따라하기',
      completed: true,
      category: '취미',
      tags: ['운동', '농구'],
    },
    {
      id: 1,
      content: '슬램덩크 단관하기',
      completed: false,
      category: '취미',
      tags: ['영화', '농구', '애니'],
    },
  ];

  return (
    <section className={cx('todo-list')}>
      {list.map((item) => (
        <Item item={item} />
      ))}
    </section>
  );
};

export default List;
