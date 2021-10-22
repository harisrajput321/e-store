import style from './styles/product.module.scss'
const Product = () => {
    return (
        <div className="row">
            <section className={`col-md-4 ${style.productImageWrapper}`}>
                <img src="./images/p1-v1.png" />
            </section>
            {/* Product Details */}
            <section className={`col-md-8 ${style.productDetailWrapper}`}>
                <h2>Title</h2>
                <h3 className="note">Sub Title</h3>
                <div className={style.availableSize}>
                    <h4>Available Sizes:</h4>
                    <ul>
                        <li><button className="btn btn-link">S</button></li>
                        <li><button className="btn btn-link">M</button></li>
                    </ul>
                </div>
                <div>
                    <h4>Colors</h4>
                    <div>many colors list</div>
                </div>
                <button>Add To Cart</button>
                <div>
                    <h4>Description</h4>
                    <p>Hello</p>
                </div>
            </section>
        </div>
    )
}

export default Product;