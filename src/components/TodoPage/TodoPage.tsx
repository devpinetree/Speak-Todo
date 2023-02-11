import { useCallback, useState } from 'react';
import List from 'components/common/List';
import AddTodo from 'components/common/AddTodo';
import Filter from 'components/common/Filter';

type TFilter = 'waiting' | 'completed' | 'all';
interface IItem {
  id: number;
  content: string;
  status: 'waiting' | 'completed';
}

// TODO: 데이터 하드코딩 리팩토링 예정 - hooks(api call), constants 추가
const list = [
  {
    id: 0,
    content: '영화 1편 보기',
    status: 'waiting',
  },
  {
    id: 1,
    content: '데이트 코스 짜기',
    status: 'completed',
  },
];

const TodoPage = () => {
  const filters: TFilter[] = ['all', 'waiting', 'completed'];

  const [totalTodos, setTotalTodos] = useState<IItem[] | any[]>(list); // 전체 Todos
  const [filter, setFilter] = useState<TFilter>('all'); // 필터

  const addTodo = useCallback(
    (text: string) => {
      const newTodoItem = {
        id: totalTodos.length,
        content: text,
        status: 'waiting',
      };
      setTotalTodos([...totalTodos, newTodoItem]);
    },
    [totalTodos]
  );

  const updateTodo = useCallback(
    (todoItem: IItem) => {
      setTotalTodos(
        totalTodos.map((todo) => (todo.id === todoItem.id ? todoItem : todo))
      );
    },
    [totalTodos]
  );

  const deleteTodo = useCallback(
    (todoItem: IItem) => {
      setTotalTodos(
        totalTodos.filter(
          (curItem) =>
            curItem.id !== todoItem.id && curItem.content !== todoItem.content
        )
      );
    },
    [totalTodos]
  );

  return (
    <>
      <section>
        <Filter filters={filters} filter={filter} onFilter={setFilter} />
        <span>TODO</span>
        <List
          list={totalTodos}
          filter={filter}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
        <AddTodo onAdd={addTodo} />
      </section>
    </>
  );
};

export default TodoPage;
