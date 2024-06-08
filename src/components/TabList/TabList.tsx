import { useTabs } from "@/hooks";
import { TabGroup } from "../TabGroup/TabGroup";
import { SelectedTabContextProvider } from "@/contexts";

export function TabList() {
  const { pinnedTabs, unpinnedTabs, setPinnedTabs, setUnpinnedTabs } = useTabs();

  return (
    <SelectedTabContextProvider>
      <div className='flex w-full overflow-x-auto overflow-y-hidden pt-px relative before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-grays-muted' role='tablist'>
        <div className='sticky flex left-0 top-0 z-[1]'>
          <TabGroup items={pinnedTabs} setItems={setPinnedTabs} pinned />
        </div>
        <TabGroup items={unpinnedTabs} setItems={setUnpinnedTabs} />
      </div>
    </SelectedTabContextProvider>
  );
}
