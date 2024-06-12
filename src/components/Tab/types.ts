import { UniqueIdentifier } from "@dnd-kit/core";
import { IconName } from "../Icon/types";

export type UniqueId = string;

export interface Tab {
  id: UniqueId;
  title: string;
  icon: IconName;
}

export interface TabProps extends Tab {
  active?: boolean;
  pinned?: boolean;
  selected?: boolean;
  dragging?: boolean;
  onSelect: (id: string) => void;
  onClose: (id: string) => void;
  onPin?: (id: string) => void;
  onUnpin?: (id: string) => void;
  onChangeTabVisibility?: (tab: Tab, isVisible: boolean) => void;
}
