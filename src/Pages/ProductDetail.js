import Product from "../Components/Product"
import $ from 'jquery';
import { useEffect, useState } from "react";
// import {} from "./../Common/data.json"
const ProductDetail = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        $.ajax({
            url: './data.json',
            type: "GET",
            dataType: "json",
            success: function (data) {
                console.log(data)
                setproducts(data);
            }
        });
        console.log('YES')
    }, [])
    return (<><Product data={products[0]} /></>)
}

export default ProductDetail