import type { Album as AlbumType } from '@/types';
import styles from '@/styles/components/Album.module.scss';
import Card from './Card';

type Props = {
  album: AlbumType;
};

const Album: React.FC<Props> = ({ album }) => {
  return (
    <Card>
      <div className={styles.container}>
        <p className={styles.album_title}>{album.title}</p>
      </div>
    </Card>
  );
};

export default Album;
