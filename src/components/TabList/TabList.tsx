import { useCallback, useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import { useTabs } from "@/hooks";
import { TabGroup } from "../TabGroup/TabGroup";
import { SelectedTabContextProvider } from "@/contexts";
import { TabDropdown } from "../TabDropdown/TabDropdown";
import { isElementScrollable } from "@/helpers";

export function TabList() {
  const { pinnedTabs, unpinnedTabs, setPinnedTabs, setUnpinnedTabs } = useTabs();
  const tablistRef = useRef<HTMLDivElement | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const checkIfScrollable = useCallback(() => {
    if (tablistRef.current) {
      setIsScrollable(isElementScrollable(tablistRef.current));
    }
  }, []);
  useEffect(() => {
    checkIfScrollable();
    const handleResize = () => {
      checkIfScrollable();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [checkIfScrollable]);
  return (
    <SelectedTabContextProvider>
      <SimpleBar style={{ maxWidth: "100%" }} autoHide={false}>
        <div
          className={[
            'relative flex w-full border-t border-solid border-grays-muted',
            isScrollable && 'pb-[9px]',
          ].filter(Boolean).join(' ')}
          role='tablist'
          ref={tablistRef}
        >
          <div className='sticky left-0 top-0 z-10 flex'>
            <TabGroup items={pinnedTabs} setItems={setPinnedTabs} pinned />
          </div>
          <div className='flex'>
            <TabGroup items={unpinnedTabs} setItems={setUnpinnedTabs} />
          </div>
          {isScrollable && <TabDropdown />}
        </div>
      </SimpleBar>
    </SelectedTabContextProvider>
  );
}
