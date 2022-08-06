import "./product.css"
import QuantityPicker from "./quantityPicker";

const Product = () =>  {
    return <div className="product">
        <img src="https://picsum.photos/200/300" alt="product"></img>


    <h5 class='product-h5'>This is a product</h5>
    
    <QuantityPicker></QuantityPicker>
    </div>    
};

export default Product;