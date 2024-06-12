import { useEffect, useRef, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { useLocalStorage } from "./useLocalStorage";
import { PINNED_TABS, UNPINNED_TABS } from "@/constants";
import { Tab } from "@/components";


export const useTabs = () => {
  const [storedPinnedTabs, storPinnedTabs] = useLocalStorage({
    key: "PINNED_TABS",
    initialValue: PINNED_TABS,
  });
  const [storedUnpinnedTabs, storUnpinnedTabs] = useLocalStorage({
    key: "UNPINNED_TABS",
    initialValue: UNPINNED_TABS,
  });

  const [pinnedTabs, setPinnedTabs] = useState<Tab[]>(PINNED_TABS);
  const [unpinnedTabs, setUnpinnedTabs] = useState<Tab[]>(UNPINNED_TABS);
  // const [pinnedTabs, setPinnedTabs] = useState<Tab[]>(storedPinnedTabs);
  // const [unpinnedTabs, setUnpinnedTabs] = useState<Tab[]>(storedUnpinnedTabs);  

  useEffect(() => {
    storPinnedTabs(pinnedTabs);
  }, [pinnedTabs]);
  useEffect(() => {
    storUnpinnedTabs(unpinnedTabs);
  }, [unpinnedTabs]);

  const movePinnedTab = (activeIndex: number, overIndex: number) => {
    setPinnedTabs((items) => arrayMove(items, activeIndex, overIndex));
  }
  const moveUnpinnedTab = (activeIndex: number, overIndex: number) => {
    setUnpinnedTabs((items) => arrayMove(items, activeIndex, overIndex));
  }
  const pinTab = (id: string) => {
    const item = unpinnedTabs.find((item) => item.id === id);
    setUnpinnedTabs((items) => items.filter((item) => item.id !== id));
    setPinnedTabs((items) => [...items, item]);
  };
  const unpinTab = (id: string) => {
    const item = pinnedTabs.find((item) => item.id === id);
    setPinnedTabs((items) => items.filter((item) => item.id !== id));
    setUnpinnedTabs((items) => [...items, item]);
  };
  const closeTab = (id: string) => setUnpinnedTabs(items => items.filter(item => item.id !== id))

  return {
    pinnedTabs,
    unpinnedTabs,
    movePinnedTab,
    moveUnpinnedTab,
    pinTab,
    unpinTab,
    closeTab,
  };
};
