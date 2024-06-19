import { useRef, useState } from "react";
import { useHiddenTabs, useTabs } from "@/hooks";
import { TabGroup } from "../TabGroup/TabGroup";
import { SelectedTabContextProvider } from "@/contexts";
import { TabDropdown } from "../TabDropdown/TabDropdown";
import { Tab } from "../Tab/types";
import { StickyTabContainer } from "../TabContainer/StickyTabContainer";
import { ScrollableTabContainer } from "../TabContainer/ScrollableTabContainer";

export const TabList: React.FC = () => {
  const { pinnedTabs, unpinnedTabs, movePinnedTab, moveUnpinnedTab, pinTab, unpinTab, closeTab } =
    useTabs();
  const { hiddenTabs, onChangeTabVisibility, closeHiddenTab } = useHiddenTabs();
  const [isFirstTabVisible, setIsFirstTabVisible] = useState(true);
  const isScrollbarVisible = Boolean(hiddenTabs.length);

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
        <div
          className='relative grid w-full grid-cols-[auto,1fr] border-t border-solid border-grays-muted bg-off-white'
          role='tablist'
        >
          <StickyTabContainer isScrollbarVisible={isScrollbarVisible}>
            <TabGroup items={pinnedTabs} onMoveTab={movePinnedTab} onUnpin={unpinTab} pinned />
          </StickyTabContainer>
          <ScrollableTabContainer
            isScrollbarVisible={isScrollbarVisible}
            isShadowVisible={!isFirstTabVisible}
          >
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
          </ScrollableTabContainer>
        </div>
      </div>
    </SelectedTabContextProvider>
  );
};
