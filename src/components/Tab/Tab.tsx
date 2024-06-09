import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "../Icon/Icon";
import { TabProps } from "./types";
import { Button } from "../ui/button";

export const Tab: React.FC<TabProps> = ({
  id,
  title,
  icon,
  active,
  pinned,
  selected,
  dragging,
  onSelect,
  onClose,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  const handleClickTab = (e: React.MouseEvent<HTMLDivElement>) => {
    onSelect(id);
  };
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log({ id });
    onClose(id);
    e.stopPropagation();
  };
  return (
    <div className='group/tab relative'>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        id={`${id}-tab`}
        role='tab'
        aria-selected={selected ? "true" : "false"}
        aria-controls={`${id}-tabpanel`}
        tabIndex={0}
        className={[
          "relative flex flex-shrink-0  origin-center cursor-pointer touch-manipulation select-none items-center gap-x-2.5 whitespace-nowrap px-5 py-4 leading-4 text-grays transition-colors duration-150 before:absolute before:left-0 before:top-0 before:h-[2px] before:w-full before:rounded-[2px_2px_0_0] before:transition-colors before:duration-150  before:content-['']  after:absolute after:left-0 after:top-1/2 after:h-4 after:w-px after:-translate-y-1/2 hover:bg-blue-light hover:text-grays-dark   hover:after:hidden focus-visible:bg-blue-light focus-visible:text-grays-dark focus-visible:outline-none",
          selected && "bg-blue-light text-grays-dark after:bg-blue-light",
          selected && !pinned && !active && "before:bg-blue",
          selected && pinned && !active && "before:bg-grays",
          !selected && !active && "bg-white  after:bg-grays-muted",
          pinned && "after:hidden",
          !pinned && "group-hover/tab:pr-2.5",
          active && "bg-blue-light text-grays-dark after:bg-blue-light",
          dragging &&
            "relative z-10 cursor-grabbing bg-grays text-white before:hidden hover:bg-grays hover:text-white",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={handleClickTab}
      >
        <Icon name={icon} className='h-4 w-4 flex-shrink-0' />
        {!pinned ? (
          <span className='overflow-hidden text-ellipsis group-hover/tab:max-w-[calc(100%-40px)] group-hover/tab:pr-[10px]'>
            {title}
          </span>
        ) : null}
      </div>
      {!pinned && (
        <Button
          variant='link'
          size='icon'
          className='absolute right-2.5 top-1/2 z-[1] h-auto w-auto flex-shrink-0 -translate-y-1/2 opacity-0 group-hover/tab:opacity-100'
          onClick={handleClose}
        >
          <Icon name='close' className='pointer-events-none' />
          <span className='sr-only'>close tab</span>
        </Button>
      )}
    </div>
  );
};
