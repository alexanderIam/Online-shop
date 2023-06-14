import React, { useContext, useEffect, useState } from 'react'
import style from '../Header/style.module.css'
import { DEVICE_ROUTE } from '../../utils/consts'
import { Context } from '../..'
import { fetchFromCart, fetchOneDevice } from '../../http/deviceAPI'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { useClickAway } from "@uidotdev/usehooks";

const Cart = observer(() => {
	const {device} = useContext(Context)
	const [cartCount, setCartCount] = useState(0);
	const [dropdown, setDropdown] = useState(false);
	const toggleOpen = () => setDropdown(!dropdown);

	const ref = useClickAway(() => {
		setDropdown(false);
	  });
	
	const navigate = useNavigate()
	const [devices, setDevices] = useState([])

    const fillBasket = () => {
        fetchFromCart().then(data =>{
			setCartCount(data.length)
			data.map(device => {
				fetchOneDevice(device.deviceId).then(data => {
					setDevices(device => [...device, data]);
				})
			})
        })
    }
	
    if(device.isCartSet){
        try {
            fillBasket();
            device.setIsCartSet(false)
        } catch (error) {
            alert("Could not get data for busket  " + error)
        }   
    }

	useEffect(() => {
        fillBasket();
	}, [])
	
    return (
        <div className={`dropdown ${dropdown ? style.open : ''}`} ref={ref}>
            <a href="#" 
                className="dropdown-toggle" 
                data-toggle="dropdown" 
                aria-expanded="true"
                onClick={toggleOpen}
            >
                <i className="fa fa-shopping-cart"></i>
                <span>Your Cart</span>
                <div className={`${style.qty}`}>{cartCount}</div>
            </a>
            <div className={`${style.cart_dropdown}`} >
                <div className={style.cart_list} >
                    {devices.map(device => {
                        return (
                        <div  className={style.product_widget} key={v4()}>
                            <div className={style.product_img}>
                                <img 
                                    src={process.env.REACT_APP_API_URL + device.img}
                                    alt=""
                                    onClick={() => {navigate(DEVICE_ROUTE + '/' + device.id)}}
                                />
                            </div>
                            <div className={style.product_body}>
                                <h3 className={style.product_name}>
                                    <a href="#">{device.name}</a>
                                </h3>
                                <h4 className={style.product_price}>
                                    <span className={style.qty}></span>
                                    ${device.price}
                                </h4>
                            </div>
                            <button className={style.delete}>
                                <i className="fa fa-close"></i>
                            </button>
                        </div>);
                    })}	
                </div>
                <div className={style.cart_summary}>
                    <small>{cartCount} Item(s) selected</small>
                    <h5>SUBTOTAL: ${devices.reduce((sum, device)=> sum + device.price ,0)}</h5>
                </div>
                <div className={style.cart_btns}>
                    <a href="#">View Cart</a>
                    <a href="#">Checkout  <i className="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
        </div>
    );
})

export default Cart
