import React from 'react';
import { useState } from 'react';
import { act_update_cart, act_delete_cart, act_change_Notify } from '../actions';
import { useDispatch } from 'react-redux';
import { notify_delete_cart, notify_update_cart } from '../constants/notify';

export default function Cart(props) {
    let { cart, stt } = props;
    const [quantity, setQuantity] = useState(0);
    let cartQuantity = (quantity == 0) ? cart.quantity : quantity;
    const dispatch = useDispatch();
    const handleUpdate = () => {
        dispatch(act_update_cart(cart.product, quantity));
        dispatch(act_change_Notify(notify_update_cart));
    }
    const handleDeleteCart = () => {
        dispatch(act_delete_cart(cart.product.productId));
        dispatch(act_change_Notify(notify_delete_cart));
    }
    return (
        <tr>
            <th scope="row">{stt}</th>
            <td>{cart.product.productName}</td>
            <td>{cart.product.price} USD</td>
            <td>
                <input
                    name="cart-item-quantity-1"
                    type="number"
                    min={1}
                    value={cartQuantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </td>
            <td>
                <strong>{cart.quantity * cart.product.price} USD</strong>
            </td>
            <td>
                <a
                    className="label label-info update-cart-item"
                    href="#"
                    data-product=""
                    onClick={handleUpdate}
                >
                    Update
                </a>
                <a
                    className="label label-danger delete-cart-item"
                    href="#"
                    data-product=""
                    onClick={handleDeleteCart}
                >
                    Delete
                </a>
            </td>
        </tr>
    )
}
