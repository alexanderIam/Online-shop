import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../../utils/consts';
import style from './style.module.css'
import AddToCartButton from '../AddToCartButton';

const DeviceItem = ({device})=>{
    const navigate = useNavigate()

    return (
        <div className={`text-center ${style.device_item} mb-4 ${style.product}`}>
            <div className={style.product_card}>
                <div className='m-2'>
                    <img 
                        src={process.env.REACT_APP_API_URL + device.img} 
                        onClick={() => navigate(DEVICE_ROUTE + '/' + device.id )}
                        className={style.img}
                    />
                </div>
                <div className={`${style.product_name} mt-3`}>
                    {device.name}
                </div>
                <div className={`${style.product_price} mt-2`}>
                    ${device.price}
                </div><hr className='me-2 ms-2'/>
                <div className={`${style.product_footer} d-flex justify-content-center`}>
                    <div className={`${style.container_buttons} d-flex justify-content-evenly w-50`}>
                        <button className={style.tooltip_container}><i className="fa fa-heart-o"></i><span className={`${style.tooltip} bottom-100 translate-middle-x mb-3`}>add to wishlist</span></button>
                        <button className={style.tooltip_container}><i className={`${style.fa} fa fa-eye`}></i><span className={`${style.tooltip} bottom-100 translate-middle-x mb-3`}>quick view</span></button>
                    </div>
                </div>
                <div className={`${style.add_to_card}`}>
                    <AddToCartButton id = {device.id} />
                </div>          
            </div>
        </div>                            
    );
}

export default DeviceItem;
