import Album from '@/app/components/Album';
import '@/styles/utils/classes.scss';
import type { Album as AlbumType } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const Page = async () => {
  const albums: AlbumType[] = await (
    await fetch(`${baseUrl}albums?_limit=10`)
  ).json();

  return (
    <div className="column align_items_center gap_4">
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export default Page;
