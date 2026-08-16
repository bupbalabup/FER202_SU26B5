import React, { useEffect, useState } from "react";

function ValidatedInput() {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(true);

  useEffect(() => {
    setValid(value.length >= 3);
  }, [value]);

  return (
    <div>
      <input
        type="text"
        placeholder="At least 3 characters"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {!valid && <p>Input is too short!</p>}
    </div>
  );
}

export default ValidatedInput;
