import { Tab } from "@/components";
import { useState } from "react";

export const useHiddenTabs = () => {
  const [hiddenTabs, setHiddenTabs] = useState<Tab[]>([]);
  const onChangeTabVisibility = (tab: Tab, isVisible: boolean) => {
    if (isVisible) {
      setHiddenTabs((items) => items.filter((item) => item.id !== tab.id));
    } else {
      setHiddenTabs((tabs) => [tab, ...tabs]);
    }
  };
  const closeHiddenTab = (id: string) => {
    setHiddenTabs((items) => items.filter((item) => item.id !== id));
  };

  return { hiddenTabs, onChangeTabVisibility, closeHiddenTab };
};
