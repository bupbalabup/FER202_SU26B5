import React, { useEffect, useState } from "react";

function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h3>Window Size</h3>
      <p>
        {size.width} x {size.height}
      </p>
    </div>
  );
}

export default WindowSize;
