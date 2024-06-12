import { useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import { useHiddenTabs, useTabs } from "@/hooks";
import { TabGroup } from "../TabGroup/TabGroup";
import { SelectedTabContextProvider } from "@/contexts";
import { TabDropdown } from "../TabDropdown/TabDropdown";

export const TabList: React.FC = () => {
  const { pinnedTabs, unpinnedTabs, movePinnedTab, moveUnpinnedTab, pinTab, unpinTab, closeTab } =
    useTabs();
  const { hiddenTabs, onChangeTabVisibility, closeHiddenTab } = useHiddenTabs();
  const tablistRef = useRef<HTMLDivElement | null>(null);
  const handleCloseHiddenTab = (id: string) => {
    closeHiddenTab(id);
    closeTab(id);
  };

  return (
    <SelectedTabContextProvider>
      <div ref={tablistRef}>
        <SimpleBar style={{ width: "100%", maxWidth: "100%" }} autoHide={false}>
          <div
            className='relative flex w-full border-t border-solid border-grays-muted bg-off-white'
            role='tablist'
          >
            <div className='sticky left-0 top-0 z-10 flex'>
              <TabGroup items={pinnedTabs} onMoveTab={movePinnedTab} onUnpin={unpinTab} pinned />
            </div>
            <div className='flex flex-nowrap'>
              <TabGroup
                items={unpinnedTabs}
                onMoveTab={moveUnpinnedTab}
                onCloseTab={closeTab}
                onPin={pinTab}
                onChangeTabVisibility={onChangeTabVisibility}
              />
            </div>
            {Boolean(hiddenTabs.length) && (
              <TabDropdown items={hiddenTabs} onClose={handleCloseHiddenTab} />
            )}
          </div>
        </SimpleBar>
      </div>
    </SelectedTabContextProvider>
  );
};
