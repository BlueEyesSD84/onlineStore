import "./product.css"
import QuantityPicker from "./quantityPicker";
import { useState } from "react";

const Product = (props) =>  {
    const [quanity, setQuantity] = useState(1);


    const add2Cart = () => {
        console.log(props.data.title);
    };

    const onQuantityChange = (quanity) => {
        setQuantity(quanity);
    
    };

    const getTotal = () => {
        let total = quanity * props.data.price;
        return total.toFixed(2);
    }

    return ( <div className="product">
        <img src={"/images/" + props.data.image} alt="product"></img>


    <h5 className='product-h5'>{props.data.title}</h5>
    <div className="prices">
    <label className="price">Price: ${(props.data.price).toFixed(2)}</label>
    <label className="total">Total: ${getTotal()} </label>
   
    </div>

    <div className="controls">
    <QuantityPicker onChange={onQuantityChange} mininum="1" max="10" />
    <button onClick={add2Cart} className="btn btin-sm btn-success">Add</button>
    </div>
</div>
    );
};


export default Product;