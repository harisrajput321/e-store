import Product from "../Components/Product"
import $ from 'jquery';
import { useEffect, useState } from "react";
import RecommendedProducts from "../Components/RecommendedProducts";

const ProductDetail = () => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(null)
    useEffect(() => {
        $.ajax({
            url: './data.json',
            type: "GET",
            dataType: "json",
            success: function (data) {
                setProducts(data);
                if (data && data.length > 0) {
                    setProduct(data[0])
                }
            }
        });
    }, [])

    const getSelectedItem = (item) => {
        setProduct(item);
    }

    if (!product) {
        return null
    }

    return (<>
        <Product data={product} productWithDetails={true} />
        <RecommendedProducts products={products} passToParent={getSelectedItem} />
    </>)
}

export default ProductDetail