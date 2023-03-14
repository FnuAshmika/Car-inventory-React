import { useState } from "react";

export default function Counter(props){
    const [count, setCount] = useState(props.initialCount || 0)

    function increment(incrementor){
        setCount(count+incrementor)
    }
    return (
        <div>
            <h2>{props.title || "Add new Car"}</h2>
            Count: {count}
            <div>
                <button onClick={()=>increment(1)}>Increment</button>
                {
                    (count > 0) ?
                    <button onClick={()=>increment(-1)}>Decrement</button>
                    :
                    <></>
                }
            </div>
        </div>
    )
}