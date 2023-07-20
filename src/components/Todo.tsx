import styles from '@/styles/components/Album.module.scss';
import type { Todo as TodoType } from '@/types';
import Card from './Card';

type Props = {
  todo: TodoType;
};

const Todo: React.FC<Props> = ({ todo }) => {
  return (
    <Card>
      <div className={styles.container}>
        <p className={styles.album_title}>{todo.title}</p>
      </div>
    </Card>
  );
};

export default Todo;
