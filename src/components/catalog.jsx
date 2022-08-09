import "./catalog.css"
import Product from "./product"
import { useEffect, useState } from "react"; //acts the same as windows.onload, importing "useState" to be able to create a new instance of the DataService class.
import DataService from "../services/dataService"; //importing the class

const Catalog = () => {
    const [products, setProducts] = useState([]);//using an array for the products empty [] inside ().

    const loadData = () => {
        let service = new DataService(); //creating a new instance named "service" of the class DataService.
        let prods = service.getCatalog();//defining the object "prods" using the instance "service".
        setProducts(prods);
    };

useEffect(() => {
    loadData();

}, []);



    return (
        <div className="catalog">
<h1>JA JA Designs</h1>

<div className='product-list'>
{ products.map(prod => //using .map to "transform into products" kinda like a for loop and used for an array.
    <Product key={prod._id} data= {prod} ></Product>
    
    )}


    </div>
</div>

    );
};

export default Catalog;