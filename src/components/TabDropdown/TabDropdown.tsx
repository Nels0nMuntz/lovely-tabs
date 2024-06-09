import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Icon } from "../Icon/Icon";

export const TabDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleChangeOpen = (open: boolean) => setOpen(open);
  return (
    <DropdownMenu onOpenChange={handleChangeOpen}>
      <DropdownMenuTrigger asChild>
        <div className='sticky right-0 top-0'>
          <Button
            className=' before:from-transparent flex h-12 w-9 flex-shrink-0 items-center justify-center rounded-none bg-white before:absolute before:-left-5 before:top-0 before:z-10 before:h-full before:w-5 before:bg-gradient-to-r before:to-white hover:bg-white'
            variant='secondary'
          >
            <span className='flex-shrink-0'>
              <Icon name='chevronDown' className={open ? 'rotate-180' : ''} />
            </span>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuItem>
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
