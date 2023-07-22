import Album from '@/app/components/Album';
import '@/styles/utils/classes.scss';
import type { Todo as TodoType } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const getTodos = async (): Promise<TodoType[]> =>
  await (await fetch(`${baseUrl}todos?_limit=10`)).json();

const Page = async () => {
  const todos = await getTodos();

  return (
    <div className="column align_items_center gap_4">
      {todos.map((todo) => (
        <Album key={todo.id} album={todo} />
      ))}
    </div>
  );
};

export default Page;
