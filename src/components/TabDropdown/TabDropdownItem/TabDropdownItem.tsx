import { useState } from "react";
import { Icon } from "@/components/Icon/Icon";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib";
import { TabDropdownItemProps } from "./types";
import { Link } from "react-router-dom";

export const TabDropdownItem: React.FC<TabDropdownItemProps> = ({ tab, onClose }) => {
  const [highlighted, setHighlighted] = useState(false);
  const handleMouseEnter = () => setHighlighted(true);
  const handleMouseLeave = () => setHighlighted(false);
  return (
    <DropdownMenuItem
      key={tab.id}
      className='bg-white p-0 hover:text-grays-dark'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={`/${tab.id}`}
        className={cn(
          "flex h-auto w-full items-center gap-x-2.5 bg-white p-[15px] pr-10 text-grays hover:bg-white",
          highlighted && "bg-white text-grays-dark",
        )}
      >
        <Icon name={tab.icon} className='flex-shrink-0 transition-colors duration-100' />
        <span className='flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-left leading-4 transition-colors duration-100'>
          {tab.title}
        </span>
      </Link>
      <Button
        variant='link'
        size='icon'
        className='absolute right-[15px] top-1/2 h-auto w-auto flex-shrink-0 -translate-y-1/2 text-grays transition-colors duration-100 hover:text-red'
        onClick={(e) => {
          e.stopPropagation();
          onClose(tab.id);
        }}
      >
        <Icon name='close' className='pointer-events-none' />
        <span className='sr-only'>close tab</span>
      </Button>
    </DropdownMenuItem>
  );
};
