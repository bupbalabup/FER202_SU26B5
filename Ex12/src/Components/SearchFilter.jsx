import React, { useState } from "react";

export default function SearchFilter() {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Blueberry"];

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
