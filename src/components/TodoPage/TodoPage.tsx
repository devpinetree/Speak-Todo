import { useEffect, useState } from 'react';
import List from 'components/common/List';

interface IItem {
  id: number;
  content: string;
  status: 'waiting' | 'completed';
  category: string;
  tags?: string[];
}

const TodoPage = () => {
  const [waitingTodos, setWaitingTodos] = useState<IItem[] | any[]>([]); // 대기 중인 Todos
  const [completedTodos, setCompletedTodos] = useState<IItem[] | any[]>([]); // 완료된 Todos

  useEffect(() => {
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

    setWaitingTodos(
      list.filter((item) => {
        return item.status === 'waiting';
      })
    );
    setCompletedTodos(
      list.filter((item) => {
        return item.status === 'completed';
      })
    );
  }, []);

  return (
    <section>
      {waitingTodos && (
        <>
          <span>해야할 일</span>
          <List list={waitingTodos} />
        </>
      )}
      {completedTodos && (
        <>
          <span>완료한 일</span>
          <List list={completedTodos} />
        </>
      )}
    </section>
  );
};

export default TodoPage;
