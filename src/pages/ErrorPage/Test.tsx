import { useState, useEffect, useLayoutEffect } from 'react'

export default function App() {
    const [count, setCount] = useState(0);
    
    useLayoutEffect(() => {
        console.log(`useLayoutEffect - count=${count}`)
        // 耗时的操做
        const pre = Date.now();
        while(Date.now() - pre < 500) {}

        if (count === 0) {    
            setCount(10 + Math.random() * 200);
        }
    }, [count]);
  
    return (
        <div onClick={() => setCount(0)}>{count}</div>
    );
}