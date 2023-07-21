'use client'; // Error components must be Client Components

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error: React.FC<Props> = ({ error, reset }) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
