"use client";
import { useState } from "react";
import { create, all } from "mathjs";

const math = create(all);

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [previousNumber, setpreviousNumber] = useState("");
  const [operation, setoperation] = useState(null);

  const handleClick = (value: any) => {
    const clearCalculator = () => {
      setCurrentNumber("");
      setpreviousNumber("");
      setoperation(null);
    };

    if (value === "C") {
      clearCalculator();
    } else if (value === "=") {
      const expression = `${previousNumber}${operation}${currentNumber}`.replace(/\0/g, '');
      try {
        const result = math.evaluate(expression);
        setCurrentNumber(result.toString());
        setpreviousNumber("");
        setoperation(null);
      } catch (error) {
        console.error("Invalid expression:", error);
        setCurrentNumber("Error");
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      setoperation(value);
      setpreviousNumber(currentNumber);
      setCurrentNumber("")
      
    } else {
      setCurrentNumber((prevNumber) => prevNumber + value);
    }
  };

  return (
    <div>
      <div className="box1">
        <div className="box">{previousNumber}  {operation !== null ? operation : ""}{currentNumber}</div>
        <div className="box">
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("1")}
          >
            1
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("2")}
          >
            2
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("3")}
          >
            3
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("4")}
          >
            4
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("/")}
          >
            /
          </button>
        </div>

        <div className="box">
       
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("5")}
          >
            5
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("6")}
          >
            6
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("7")}
          >
            7
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("8")}
          >
            8
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("*")}
          >
            *
          </button>
        </div>

        <div className="box">
         
          
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("9")}
          >
            9
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("0")}
          >
            0
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick(".")}
          >
            •
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("-")}
          >
            -
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("+")}
          >
            +
          </button>
        </div>

        <div className="box">
        
        <button
            className="button"
            type="submit"
            onClick={() => handleClick("C")}
          >
            C
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => handleClick("=")}
          >
            =
          </button>
        </div>
       
        
        
      </div>
    </div>
  );
};

export default Calculator;