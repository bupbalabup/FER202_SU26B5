import React, { useState } from "react";

function Input() {
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <p className="mt-2">
        Input text: {text}
      </p>
    </div>
  );
}

export default Input;