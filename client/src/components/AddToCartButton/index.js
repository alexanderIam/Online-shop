import React, { useContext } from 'react'
import style from './style.module.css';
import { addToCart } from '../../http/deviceAPI';
import { Context } from '../..';

function AddToCartButton({id, qnt = 1}){
	let { device } = useContext(Context)

    const toCart = () => {
       	addToCart({deviceId: id}).then(data => {
            device.setIsCartSet(true)
        })
    }

	return (
		<div className={`${style.add_to_cart}`}>
			<button 
				className={`${style.add_to_cart_btn}`} 
				onClick={toCart}
			>
				<i className="fa fa-shopping-cart"></i>
				add to cart
			</button>
		</div>
	);
		
}

export default AddToCartButton;
