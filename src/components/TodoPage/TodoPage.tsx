import React, { useCallback, useEffect, useState } from 'react';
import List from 'components/common/List';
import Input from 'components/common/Input';

interface IItem {
  id: number;
  content: string;
  status: 'waiting' | 'completed';
  category: string;
  tags?: string[];
}

// TODO: 데이터 하드코딩 리팩토링 예정 - hooks(api call), constants 추가
const list = [
  {
    id: 0,
    content: '슬램덩크 따라하기',
    status: 'waiting',
    category: '취미',
    tags: ['운동', '농구'],
  },
  {
    id: 1,
    content: '슬램덩크 단관하기',
    status: 'completed',
    category: '취미',
    tags: ['영화', '농구', '애니'],
  },
];

const TodoPage = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [totalTodos, setTotalTodos] = useState<IItem[] | any[]>(list); // 전체 Todos
  const [waitingTodos, setWaitingTodos] = useState<IItem[] | any[]>([]); // 대기 중인 Todos
  const [completedTodos, setCompletedTodos] = useState<IItem[] | any[]>([]); // 완료된 Todos

  useEffect(() => {
    setWaitingTodos(
      totalTodos.filter((item) => {
        return item.status === 'waiting';
      })
    );
    setCompletedTodos(
      totalTodos.filter((item) => {
        return item.status === 'completed';
      })
    );
  }, [totalTodos]);

  const setTodo = useCallback((text: string) => {
    setNewTodo(text);
  }, []);

  const addTodo = useCallback(
    (e: React.MouseEvent) => {
      const newTodoItem = {
        id: totalTodos.length,
        content: newTodo,
        status: 'waiting',
        category: '신규',
      };
      const newTodos = [...totalTodos, newTodoItem];
      setTotalTodos(newTodos);
      console.log(newTodos, totalTodos);
    },
    [newTodo, totalTodos]
  );

  return (
    <section>
      <Input setText={setTodo} />
      <button onClick={(e) => addTodo(e)}> + </button>
      {waitingTodos && (
        <div>
          <span>해야할 일</span>
          <List list={waitingTodos} />
        </div>
      )}
      {completedTodos && (
        <div>
          <span>완료한 일</span>
          <List list={completedTodos} />
        </div>
      )}
    </section>
  );
};

export default TodoPage;
