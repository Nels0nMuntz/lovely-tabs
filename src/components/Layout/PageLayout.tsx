export const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section className='flex-grow bg-blue-light p-6'>
      <div className='bg-off-white h-full rounded-md p-6'>{children}</div>
    </section>
  );
};
