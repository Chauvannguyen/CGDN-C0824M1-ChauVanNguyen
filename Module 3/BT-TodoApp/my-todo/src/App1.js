import React, { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted hoặc count thay đổi");
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
        </div>
    );
}

export default Timer;
