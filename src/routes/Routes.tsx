import { BrowserRouter, Routes as AppRotes, Route } from "react-router-dom";
import { MainLayout, Page } from "@/components";

export const Rotes = () => {
  return (
    <BrowserRouter>
      <AppRotes>
        <Route path='/' element={<MainLayout />}>
          <Route path='lagerverwaltung' element={<Page heading="Lagerverwaltung" />} />
          <Route path='dashboard' element={<Page heading="Dashboard" />} />
          <Route path='banking' element={<Page heading="Banking" />} />
          <Route path='telefonie' element={<Page heading="Telefonie" />} />
          <Route path='accounting' element={<Page heading="Accounting" />} />
          <Route path='verkauf' element={<Page heading="Verkauf" />} />
          <Route path='statistik' element={<Page heading="Statistik" />} />
          <Route path='post-office' element={<Page heading="Post Office" />} />
          <Route path='administration' element={<Page heading="Administration" />} />
          <Route path='help' element={<Page heading="Help" />} />
          <Route path='warenbestand' element={<Page heading="Warenbestand" />} />
          <Route path='auswahllisten' element={<Page heading="Auswahllisten" />} />
          <Route path='einkauf' element={<Page heading="Einkauf" />} />
          <Route path='rechn' element={<Page heading="Rechn" />} />
        </Route>
      </AppRotes>
    </BrowserRouter>
  );
};
