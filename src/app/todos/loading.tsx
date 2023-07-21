import styles from '@/styles/components/Card.module.scss';
import '@/styles/utils/classes.scss';

const Loading: React.FC<{}> = () => {
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
