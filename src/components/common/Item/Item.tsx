import style from './Item.module.scss';

interface Item {
  id: number;
  content: string;
  completed: boolean;
  category: string;
  tags?: string[];
}

interface Props {
  item: Item;
}

const Item = (props: Props) => {
  const { item } = props;
  const { id, content, completed, category, tags } = item;

  return (
    <div>
      <div>{id}</div>
      <div>{content}</div>
      <div>{completed}</div>
      <div>{category}</div>
    </div>
  );
};

export default Item;
