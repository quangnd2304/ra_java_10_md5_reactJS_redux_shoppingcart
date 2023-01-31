import React from 'react';
import { useDispatch } from "react-redux";
import { act_buy_product, act_change_Notify } from '../actions';
import { useState } from 'react';
import { notify_buy_success } from '../constants/notify';

export default function Product(props) {
    const [quantity, setQuantity] = useState(1);
    let dispatch = useDispatch();
    let { product } = props;
    let elementBuy = "";
    const handleBuyProduct = () => {
        dispatch(act_buy_product(product, quantity));
        dispatch(act_change_Notify(notify_buy_success));
    }
    if (product.quantity == 0) {
        elementBuy = <span className="price"> {product.price} USD</span>;
    } else {
        elementBuy = <div>
            <input
                name="quantity-product-1"
                type="number"
                defaultValue={1}
                min={1} onChange={(event) => setQuantity(event.target.value)}
            />
            <a data-product={1} href="#" className="price" onClick={handleBuyProduct}>
                {" "}
                {product.price} USD{" "}
            </a>
        </div>
    }

    return (
        <div className="media product">
            <div className="media-left">
                <a href="#">
                    <img
                        className="media-object"
                        src={product.image}
                        alt={product.productName}
                    />
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{product.productName}</h4>
                <p>
                    {product.title}
                </p>
                {elementBuy}
            </div>
        </div>
    )
}
