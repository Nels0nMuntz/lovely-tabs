import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { TabList } from "../TabList/TabList";

export const MainLayout: React.FC = () => {
  return (
    <div className='flex min-h-[100dvh] w-full'>
      <Sidebar />
      <div className='flex w-full flex-grow  flex-col sm:w-[calc(100vw-var(--sidebar-width))]'>
        <Header />
        <main className='flex w-full flex-grow flex-col'>
          <TabList />
          <section className='flex-grow bg-blue-light p-6'>
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  );
};
