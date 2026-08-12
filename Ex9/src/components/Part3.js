import { useEffect, useState } from "react";

function Part3 () {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Part 3</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    )
}
export default Part3;