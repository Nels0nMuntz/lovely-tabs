import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Icon } from "../Icon/Icon";
import { TabProps } from "./types";

export const Tab: React.FC<TabProps> = ({
  id,
  title,
  icon,
  active,
  pinned,
  selected,
  dragging,
  onSelect,
}) => {
  if(id === "banking") {
    console.log({
      id,
  title,
  icon,
  active,
  pinned,
  selected,
  dragging,
    });
    
  }
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  const handleClickTab = () => {
    onSelect(id);
  };
  return (
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
        "relative flex flex-shrink-0 origin-center  cursor-pointer touch-manipulation select-none items-center gap-x-2.5 whitespace-nowrap px-5 py-4 leading-4 text-grays transition-colors duration-150 before:absolute before:left-0 before:-top-px before:h-[2px] before:w-full before:rounded-[2px_2px_0_0] before:transition-colors before:duration-150 before:content-[''] hover:bg-blue-light hover:text-grays-dark focus-visible:outline-none focus-visible:bg-blue-light focus-visible:text-grays-dark",
        selected && "bg-blue-light text-grays-dark",
        selected && !pinned && !active && "before:bg-blue",
        selected && pinned && !active && "before:bg-grays",
        !selected && !active && "bg-white",
        active && "bg-blue-light text-grays-dark",
        dragging &&
          "relative z-10 cursor-grabbing bg-grays text-white before:hidden hover:bg-grays hover:text-white",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={handleClickTab}
    >
      <Icon name={icon} />
      <span className={pinned ? "sr-only" : ""}>{title}</span>
    </div>
  );
};
