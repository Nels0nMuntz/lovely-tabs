import { IconName } from "@/constants";
import { UniqueIdentifier } from "@dnd-kit/core";

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
  onSelect: (id: UniqueIdentifier) => void;
}
