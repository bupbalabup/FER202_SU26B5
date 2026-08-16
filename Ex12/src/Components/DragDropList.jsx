import React, { useState, useRef } from "react";

export default function DragDropList() {
  const [items, setItems] = useState(["Item A", "Item B", "Item C", "Item D"]);
  const draggingItem = useRef(null);

  const handleDragStart = (index) => {
    draggingItem.current = index;
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    const dragIndex = draggingItem.current;
    if (dragIndex === null || dragIndex === index) return;

    const updated = [...items];
    const [removed] = updated.splice(dragIndex, 1);
    updated.splice(index, 0, removed);
    draggingItem.current = index;
    setItems(updated);
  };

  const handleDragEnd = () => {
    draggingItem.current = null;
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnd={handleDragEnd}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
