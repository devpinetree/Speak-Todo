import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './AddTodo.module.scss';

const cx = classNames.bind(styles);

interface Props {
  onAdd: (text: string) => void;
}

const AddTodo = (props: Props) => {
  const { onAdd } = props;

  const [text, setText] = useState<string>('');

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const submitText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={submitText}>
      <input
        className={cx('input-item')}
        type="text"
        placeholder="해야할 일을 입력해주세요!"
        onChange={(e) => changeText(e)}
        value={text}
      />
      <button> + </button>
    </form>
  );
};

export default AddTodo;
