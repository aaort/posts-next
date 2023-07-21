import styles from '@/styles/components/Card.module.scss';
import '@/styles/utils/classes.scss';

// Render feature content skeleton
const Loading: React.FC<React.PropsWithChildren> = () => {
  return (
    <div className="column align_items_center gap_4">
      <div className={`${styles.container_lighten}`}></div>
      <div className={`${styles.container_lighten}`}></div>
      <div className={`${styles.container_lighten}`}></div>
      <div className={`${styles.container_lighten}`}></div>
    </div>
  );
};

export default Loading;
