import "./catalog.css"
import Product from "./product"

const Catalog = () => {
    return (
        <div className="catalog">
<h1>Check out my catalog</h1>

<div classname='product-list'>
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>

    </div>
</div>

    );
};

export default Catalog;