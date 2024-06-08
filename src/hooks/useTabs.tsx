import { useEffect, useState } from "react";
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
  }, [pinnedTabs])
  useEffect(() => {
    storUnpinnedTabs(unpinnedTabs);
  }, [unpinnedTabs])

  return {
    pinnedTabs,
    unpinnedTabs,
    setPinnedTabs,
    setUnpinnedTabs,
  };
};
