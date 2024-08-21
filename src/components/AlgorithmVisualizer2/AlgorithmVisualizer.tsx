import { useStore } from "@/store";
import { Reorder } from "framer-motion";
import { Item } from "./Item";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

export const AlgorithmVisualizer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemMaxHeight, setItemMaxHeight] = useState(0);

  const {
    items,
    setItems,
    activeItems,
    doneItems,
    tempItems,
    arrayId,
    displayMode,
  } = useStore();

  useEffect(() => {
    if (containerRef.current) {
      setItemMaxHeight(containerRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div className="border border-accent/50 rounded flex items-center justify-center overflow-hidden h-full p-1 md:p-4">
      <Reorder.Group
        ref={containerRef}
        axis="x"
        values={items}
        onReorder={setItems}
        className={cn(
          "w-full flex items-end justify-center md:gap-4 gap-1 h-full",
          {
            "items-center": displayMode === "numbers",
          }
        )}
      >
        {items.map((item) => (
          <Item
            key={`${arrayId}-${item}`}
            itemMaxHeight={itemMaxHeight}
            item={item}
            isActive={activeItems.includes(item)}
            isDone={doneItems.includes(item)}
            isTemp={tempItems.includes(item)}
          />
        ))}
      </Reorder.Group>
    </div>
  );
};