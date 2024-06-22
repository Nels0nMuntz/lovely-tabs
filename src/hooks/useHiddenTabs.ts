import { Tab } from "@/components";
import { useState } from "react";

export const useHiddenTabs = () => {
  const [hiddenTabs, setHiddenTabs] = useState<Tab[]>([]);
  const [isFirstTabHidden, setIsFirstTabHidden] = useState(false);
  const onChangeTabVisibility = (tab: Tab, index: number, isVisible: boolean) => {
    if (isVisible) {
      setHiddenTabs((items) => items.filter((item) => item.id !== tab.id));
    } else {
      setHiddenTabs((tabs) => [tab, ...tabs]);
    }
    if (index === 0) {
      setIsFirstTabHidden(!isVisible);
    }
  };
  const closeHiddenTab = (id: string) => {
    setHiddenTabs((items) => items.filter((item) => item.id !== id));
  };

  return { hiddenTabs, isFirstTabHidden, onChangeTabVisibility, closeHiddenTab };
};
