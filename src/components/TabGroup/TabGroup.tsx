import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
  DragOverlay,
  DropAnimation,
  defaultDropAnimationSideEffects,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useSelectedTabContext } from "@/contexts";
import type { Tab as ITab } from "../Tab/types";
import { Tab } from "../Tab/Tab";
import { IconName } from "@/constants";
import { useNavigate } from "react-router-dom";

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.5",
      },
    },
  }),
};

interface Props {
  items: ITab[];
  setItems: React.Dispatch<React.SetStateAction<ITab[]>>;
  pinned?: boolean;
}

export const TabGroup: React.FC<Props> = ({ items, setItems, pinned }) => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState<string | null>(null);
  const { selectedTabId, setSelectedTabId } = useSelectedTabContext();
  useEffect(() => {
    navigate(`/${selectedTabId}`);
  }, [selectedTabId]);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,

    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 2000,
        tolerance: 5,
      },
    }),
  );

  const getIndex = (id: string) => items.findIndex((item) => item.id === id);
  const getPosition = (id: string) => getIndex(id) + 1;
  const activeIndex = activeId ? getIndex(activeId) : -1;
  const activeItem = items[activeIndex];
  const handleRemoveTab = (id: string) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleDragStart = ({ active }: DragStartEvent) => {
    if (!active) {
      return;
    }
    setActiveId(active.id as string);
    setSelectedTabId(active.id as string);
  };
  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    setActiveId(null);

    if (over) {
      const overIndex = getIndex(over.id as string);
      if (activeIndex !== overIndex) {
        setItems((items) => arrayMove(items, activeIndex, overIndex));
      }
    }
  };
  const handleSelectTab = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveId(null)}
    >
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        {items.map((tab) => (
          <Tab
            key={tab.id}
            {...tab}
            active={tab.id === activeId}
            selected={tab.id === selectedTabId}
            pinned={pinned}
            onSelect={handleSelectTab}
          />
        ))}
      </SortableContext>
      {createPortal(
        <DragOverlay adjustScale={false} dropAnimation={dropAnimationConfig}>
          {activeId ? (
            <Tab
              key={activeId}
              selected={activeId === selectedTabId}
              pinned={pinned}
              onSelect={handleSelectTab}
              icon={activeItem.icon}
              id={activeItem.id}
              title={activeItem.title}
              dragging={true}
            />
          ) : null}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
};
