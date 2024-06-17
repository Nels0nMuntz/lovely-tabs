import { useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import { useHiddenTabs, useTabs } from "@/hooks";
import { TabGroup } from "../TabGroup/TabGroup";
import { SelectedTabContextProvider } from "@/contexts";
import { TabDropdown } from "../TabDropdown/TabDropdown";
import { Tab } from "../Tab/types";
import { cn } from "@/lib";

export const TabList: React.FC = () => {
  const { pinnedTabs, unpinnedTabs, movePinnedTab, moveUnpinnedTab, pinTab, unpinTab, closeTab } =
    useTabs();
  const { hiddenTabs, onChangeTabVisibility, closeHiddenTab } = useHiddenTabs();
  const [isFirstTabVisible, setIsFirstTabVisible] = useState(true);
  const tablistRef = useRef<HTMLDivElement | null>(null);
  const handleCloseHiddenTab = (id: string) => {
    closeHiddenTab(id);
    closeTab(id);
  };
  const handleChangeTabVisibility = (tab: Tab, index: number, isVisible: boolean) => {
    onChangeTabVisibility(tab, isVisible);
    if (index === 0) {
      setIsFirstTabVisible(isVisible);
    }
  };

  return (
    <SelectedTabContextProvider>
      <div ref={tablistRef}>
        {/* <SimpleBar style={{ width: "100%", maxWidth: "100%" }} autoHide={false}> */}
        <div
          className='relative grid w-full grid-cols-[auto,1fr] border-t border-solid border-grays-muted bg-off-white'
          role='tablist'
        >
          <div className={cn("sticky left-0 top-0 z-10 flex-shrink-0")}>
            <div className={cn("relative flex")}>
              <TabGroup items={pinnedTabs} onMoveTab={movePinnedTab} onUnpin={unpinTab} pinned />
            </div>
          </div>
          <SimpleBar
            id='scroll-container'
            className={cn(
              "w-full min-w-full flex-1",
              !isFirstTabVisible &&
                "before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-5 before:bg-gradient-to-l before:from-transparent before:to-white",
            )}
            autoHide={false}
          >
            <div className='flex'>
              <div className='flex w-full flex-nowrap'>
                <TabGroup
                  items={unpinnedTabs}
                  onMoveTab={moveUnpinnedTab}
                  onCloseTab={closeTab}
                  onPin={pinTab}
                  onChangeTabVisibility={handleChangeTabVisibility}
                />
              </div>
              {Boolean(hiddenTabs.length) && (
                <TabDropdown items={hiddenTabs} onClose={handleCloseHiddenTab} />
              )}
            </div>
          </SimpleBar>
        </div>
        {/* </SimpleBar> */}
      </div>
    </SelectedTabContextProvider>
  );
};
