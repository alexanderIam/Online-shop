import React, { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import MinMax from '../components/MinMax';
import AddToCartButton from '../components/AddToCartButton';

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
	let [qnt, setQnt] = useState(1)
    const {id} = useParams()

	const productQnt = (qnt) => {
		setQnt(qnt)
	}
	
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
		<section>
			<div className="container">
				<div className="row w-100 pt-5">
					<div className="col-md-6">
						<div id="product-main-img">
							<div className="product-preview">
								<img src={process.env.REACT_APP_API_URL + device.img} alt=""/>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="product_details">
							<h2 className="product_name">{device.name}</h2>
							<div>
								<div className="product_rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o"></i>
								</div>
                                {device.rating}
							</div>
							<div>
								<h3 className="product_price">$980.00</h3>
								<span className="product_available">In Stock</span>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							<div className="product_options">
								<label>
									Size
									<select className="input_select ms-2">
										<option value="0">X</option>
									</select>
								</label>
								<label>
									Color
									<select className="input_select ms-2">
										<option value="0">Red</option>
									</select>
								</label>
							</div>
                            <div className="qty_label d-flex align-items-center mb-4">
                                Qty
                                <div className="ms-2 me-4">
                                    <MinMax onClick={productQnt}/>
                                </div>
                                <div  className="d-flex align-items-center">
                                    <AddToCartButton id = {device.id} qnt={qnt}/>
                                </div>
							</div>
							<ul className="product_btns p-0">
								<li><a href="#"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
							</ul>
							<ul className="product_links">
								<li>Category:</li>
								<li><a href="#">Accessories</a></li>
							</ul>
							<ul className="product_links">
								<li>Share:</li>
								<li><a href="#"><i className="fa fa-facebook"></i></a></li>
								<li><a href="#"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
								<li><a href="#"><i className="fa fa-envelope"></i></a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-12">
						<div id="product_tab">
							<ul className="tab_nav">
								<li className="active"><a data-toggle="tab" href="#tab1">Details</a></li>
							</ul>
                            <div className="row">
                                <div className="col-md-12">
                                    {device.info.map((info, index) =>
                                        <div key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                                            {info.title}: {info.description}
                                        </div>
                                    )}
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default DevicePage;
