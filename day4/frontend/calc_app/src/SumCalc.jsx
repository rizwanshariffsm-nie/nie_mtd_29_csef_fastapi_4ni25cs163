import { useState } from "react";

export default function SumCalc(){
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [result, setResult] = useState(0);
   
    return (
        <>
            <p>First number: <input type="number"
            value={firstNum} onChange={(e) => {setFirstNum(Number(e.target.value));} }/></p>
            <p>Second number: <input type="number"
            value={secondNum} onChange={(e) => {setSecondNum(Number(e.target.value));} }/></p>
            <p><button onClick={() => {setResult(firstNum + secondNum);}}>Calculate</button></p>
            <p>Sum of {firstNum} and {secondNum} is {result}</p>
        </>
    )
}