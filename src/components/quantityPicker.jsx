
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
        <button className="increase" onClick={increase}>+</button>
        <label className="qty">{quantity}</label>
        <button className="decrease" onClick={decrease}>-</button>
        </div>
    );

  };

export default QuantityPicker;

//in JSX what ever is typed inside the curly braces{} will be excuted as Javascript