import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

interface Props {
  setText: (text: string) => void;
}

const Input = (props: Props) => {
  const { setText } = props;

  const [curText, setCurText] = useState<string>('');

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurText(e.target.value);
    setText(curText);
  };

  return (
    <input
      className={cx('input-item')}
      type="text"
      placeholder="해야할 일을 입력해주세요!"
      onChange={(e) => changeText(e)}
      value={curText}
    />
  );
};

export default Input;
