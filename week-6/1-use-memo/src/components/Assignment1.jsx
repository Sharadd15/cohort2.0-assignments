import { useState } from "react";
import { useMemo  } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    var expensiveValue = 0; 
    console.log("Component re-render");
    // Your solution ends here
    expensiveValue = useMemo(() => {
        console.log("Fact Called.");
        var fact = 1;
        for(let i = 2; i <= input; ++i)
        {
            fact *= i;
        }
        return fact;
    }, [input])
    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}