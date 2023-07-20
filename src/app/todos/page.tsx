import Album from '@/components/Album';
import '@/styles/utils/classes.scss';
import type { Todo as TodoType } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Page = async () => {
  const todos: TodoType[] = await (await fetch(`${baseUrl}todos`)).json();

  return (
    <div className="column align_items_center gap_4">
      {todos.map((todo) => (
        <Album key={todo.id} album={todo} />
      ))}
    </div>
  );
};

export default Page;
