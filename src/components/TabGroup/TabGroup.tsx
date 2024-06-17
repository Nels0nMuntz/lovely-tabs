import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
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
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useSelectedTabContext } from "@/contexts";
import { TabGroupProps } from "./types";
import { Tab as ITab } from "../Tab/types";
import { Tab } from "../Tab/Tab";

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.5",
      },
    },
  }),
};

export const TabGroup: React.FC<TabGroupProps> = ({
  items,
  pinned,
  onMoveTab,
  onCloseTab,
  onPin,
  onUnpin,
  onChangeTabVisibility,
}) => {
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
        onMoveTab(activeIndex, overIndex);
      }
    }
  };
  const handleSelectTab = (id: string) => {
    setSelectedTabId(id);
  };
  const handleCloseTab = (id: string) => {
    if (id === selectedTabId) {
      const currentTabIndex = getIndex(id);
      if (items[currentTabIndex + 1]) {
        setSelectedTabId(items[currentTabIndex + 1].id);
      } else if (items[currentTabIndex - 1]) {
        setSelectedTabId(items[currentTabIndex - 1].id);
      } else {
        setSelectedTabId("");
      }
    }
    onCloseTab(id);
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
        {items.map((tab, index) => (
          <Tab
            key={tab.id}
            {...tab}
            onChangeTabVisibility={onChangeTabVisibility}
            active={tab.id === activeId}
            selected={tab.id === selectedTabId}
            pinned={pinned}
            index={index}
            onSelect={handleSelectTab}
            onClose={handleCloseTab}
            onPin={onPin}
            onUnpin={onUnpin}
          />
        ))}
      </SortableContext>
      {createPortal(
        <DragOverlay adjustScale={false} dropAnimation={dropAnimationConfig}>
          {activeId ? (
            <Tab
              key={activeId}
              // selected={activeId === selectedTabId}
              // pinned={pinned}
              onSelect={handleSelectTab}
              onClose={handleCloseTab}
              icon={activeItem.icon}
              id={activeItem.id}
              title={activeItem.title}
              dragging={true}
              // onPin={onPin}
              // onUnpin={onUnpin}
            />
          ) : null}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
};
