const Loading: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h1>Loading...</h1>
      {children}
    </>
  );
};

export default Loading;
