import { useEffect, useState } from 'react'
import style from './styles/product.module.scss'
const Product = ({ data }) => {
    const [productImage, setProductImage] = useState(null);
    const [productColors, setProductColors] = useState([]);
    useEffect(() => {
        console.log('data', data)
        if (data) {
            setProductImage(data.masterProductImg)
            setProductColors(data.sizes[0].colors)
        }
    })
    if (!data) {
        return null;
    }
    return (
        <div className="row">
            <section className={`col-md ${style.productImageWrapper}`}>
                <img src={productImage} alt={data.title} />
            </section>
            <section className={`col-md-8 ${style.productDetailWrapper}`}>
                <h2>{data.title}</h2>
                <h3 className="note">AED {data.price}</h3>
                <div className={style.availableSizes}>
                    <h4>Available Sizes:</h4>
                    <ul>
                        {data.sizes && data.sizes.map((x, i) =>
                            <li><button className="btn btn-link" value={x.value}>{x.displayName}</button></li>
                        )}
                    </ul>
                </div>
                <div className={style.availableColors}>
                    <h4>Colors</h4>
                    <div>
                        {productColors && productColors.map((x, i) =>
                            <button className={`btn ${x.selecetd ? style.selectedColor : ''}`} style={{ backgroundColor: x.value }} value={x.value}>&nbsp;</button>
                        )}
                    </div>
                </div>
                <button className={"btn btn-primary"}>Add To Cart</button>
                <div className={style.description}>
                    <h4>Description</h4>
                    <p>{data.description}</p>
                </div>
            </section>
        </div>
    )
}

export default Product;