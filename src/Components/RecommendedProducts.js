import Product from "./Product";
import './styles/recommended-products.scss'

const RecommendedProducts = ({ products, passToParent }) => {
    const getSelectedItem = (item) => {
        passToParent(item)
    }
    return (
        <div className="recommendedWrapper">
            <h2>See More Products</h2>
            <div className="recommendedList">
                {
                    products && products.map(x =>
                        <Product data={x} passToParent={getSelectedItem} />
                    )
                }
            </div>
        </div>
    )
}

export default RecommendedProducts;