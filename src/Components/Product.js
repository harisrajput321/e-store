import { useEffect, useState } from 'react'
import $ from 'jquery';
import './styles/product.scss'

const Product = ({ data, productWithDetails = false, passToParent }) => {
    const [productImage, setProductImage] = useState(null);
    const [productColors, setProductColors] = useState([]);

    useEffect(() => {
        if (data) {
            setProductImage(data.masterProductImg)
            setProductColors(data.sizes[0].colors)
        }
    })


    $('.sizesButtons').on('click', 'button', (e) => {
        $('.sizesButtons').children().removeClass('selectedSize')
        $(e.target).addClass('selectedSize');
        $("#selectedSize").val($(e.target).val())
    })

    $('.colorsButtons').on('click', 'button', (e) => {
        $('.colorsButtons').children().removeClass('selectedColor')
        $(e.target).addClass('selectedColor');
        let selectedImage = $(e.target).next('input[type=hidden]').val();
        $(".p-image img").attr("src", selectedImage);
        $("#selectedColor").val($(e.target).val())
    })

    $('.addToCart').on('click', (e) => {
        let selectedSize = $("#selectedSize").val();
        let selectedColor = $("#selectedColor").val();
        $('.alert').removeClass('alert-danger')
        $('.alert').removeClass('alert-success')
        $('.alert').text('')
        if (!selectedSize) {
            $('.alert').addClass('alert-danger')
            $('.alert').text('Please select size')
            return;
        }
        if (!selectedColor) {
            $('.alert').addClass('alert-danger')
            $('.alert').text('Please select color')
            return;
        }
        $('.alert').addClass('alert-success')
        $('.alert').text('Item Added')
    })

    const selectedItem = (item) => {
        passToParent(item);
    }

    if (!data) {
        return null;
    }
    return (
        <div className="row">
            <section className={`col-md p-image productImageWrapper`} onClick={() => { selectedItem(data) }}>
                <img src={productImage} alt={data.title} />
            </section>
            {
                productWithDetails &&
                <section className={`col-md-8 productDetailWrapper`}>
                    <h2>{data.title}</h2>
                    <h3 className="note">AED {data.price}</h3>
                    <div className="availableSizes">
                        <h4>Available Sizes:</h4>
                        <div className="sizesButtons">
                            {data.sizes && data.sizes.map((x, i) =>
                                <>
                                    <button className="btn btn-link" value={x.value}>{x.displayName}</button>
                                </>
                            )}
                            <input type="hidden" id="selectedSize" />
                        </div>
                    </div>
                    <div className="availableColors">
                        <h4>Colors</h4>
                        <div className="colorsButtons">
                            {productColors && productColors.map((x, i) =>
                                <>
                                    <button className={`btn color-${x.id}`} style={{ backgroundColor: x.value }} value={x.id}>&nbsp;</button>
                                    <input type="hidden" value={x.imageUrl} />
                                </>
                            )}
                            <input type="hidden" id="selectedColor" />
                        </div>
                    </div>
                    <button type="submit" className="addToCart btn btn-primary">Add To Cart</button>
                    <div className="alert mt-3"></div>
                    <div className="description">
                        <h4>Description</h4>
                        <p>{data.description}</p>
                    </div>
                </section>
            }
        </div>
    )
}

export default Product;