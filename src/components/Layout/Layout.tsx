export function Layout() {
  return (
    <div className='min-h-[100dvh] flex'>
      <aside className='w-[62px] border border-r-grays-muted'></aside>
      <div className='flex-grow'>
        <header className="h-[68px] border-b border-b-grays-muted"></header>
        <main>
          Main
        </main>
      </div>
    </div>
  );
}
