import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { TabContextMenuProps } from "./types";
import { Icon } from "../Icon/Icon";

export const TabContextMenu: React.FC<TabContextMenuProps> = ({ title, onClick, children }) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent
        alignOffset={20}
        collisionPadding={{ top: 20, left: 20 }}
        className='shadow-popup border border-solid border-grays-muted'
      >
        <ContextMenuItem className='flex cursor-pointer items-center gap-x-2.5 px-[11px] text-sm leading-[165%] text-grays' onClick={onClick}>
          <Icon name='pin' className='h-4 w-4 flex-shrink-0' />
          {title}
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};
