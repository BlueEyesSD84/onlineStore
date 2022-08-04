
import "./quantityPicker.css";
import { useState } from "react";

const QuantityPicker = () => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        let next = quantity + 1;
        setQuantity(next);
    };
    const decrease = () => {
        let next = quantity - 1;
        if(next > 0) {
           setQuantity(next);
        }
        
    };


    return (
    <div className="qt-picker">
        <button onClick={increase}>+</button>
        <label>{quantity}</label>
        <button onClick={decrease}>-</button>
        </div>
    );

  };

export default QuantityPicker;

//in JSX what ever is type inside the curly braces{} what ever is inside will be excuted as Javascript