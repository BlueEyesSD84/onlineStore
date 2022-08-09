import "./product.css"
import QuantityPicker from "./quantityPicker";

const Product = (props) =>  {
    return <div className="product">
        <img src={"/images/" + props.data.image} alt="product"></img>


    <h5 className='product-h5'>{props.data.title}</h5>
    <div className="prices">
    <label className="price">Price: ${props.data.price.toFixed(2)}</label>
    <label className="total">Total: ${props.data.price.toFixed(2)} </label>
    </div>
    <QuantityPicker></QuantityPicker>
    </div>
};

export default Product;