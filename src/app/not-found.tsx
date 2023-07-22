import styles from '@/styles/components/NotFound.module.scss';

// This component will be rendered if no matching route found for requested url
const NotFound = () => {
  return (
    <div className={styles.content}>
      <h1>Page is not found</h1>
    </div>
  );
};

export default NotFound;
