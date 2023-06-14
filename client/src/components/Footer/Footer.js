import React from 'react'
import style from './style.module.css'
import { ADRESS, EMAIL, TEL } from '../../utils/consts'

const Footer = () => {

    return(
		<footer id={style["footer"]}>
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-xs-6">
						<div className={style.footer}>
							<h3 className={style.footer_title}>About Us</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
							<ul className={style.footer_links}>
								<li><a href="#"><i className="fa fa-map-marker"></i>{ADRESS}</a></li>
								<li><a href="#"><i className="fa fa-phone"></i>{TEL}</a></li>
								<li><a href="#"><i className="fa fa-envelope"></i>{EMAIL}</a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-3 col-xs-6">
					<div className={style.footer}>
					<h3 className={style.footer_title}>Categories</h3>
							<ul className={style.footer_links}>
								<li><a href="#">Hot deals</a></li>
								<li><a href="#">Laptops</a></li>
								<li><a href="#">Smartphones</a></li>
								<li><a href="#">Cameras</a></li>
								<li><a href="#">Accessories</a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-3 col-xs-6">
						<div className={style.footer}>
							<h3 className={style.footer_title}>Information</h3>
							<ul className={style.footer_links}>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Orders and Returns</a></li>
								<li><a href="#">Terms & Conditions</a></li>
							</ul>
						</div>
					</div>
					<div className="col-md-3 col-xs-6">
					<div className={style.footer}>
					<h3 className={style.footer_title}>Service</h3>
							<ul className={style.footer_links}>
								<li><a href="#">My Account</a></li>
								<li><a href="#">View Cart</a></li>
								<li><a href="#">Wishlist</a></li>
								<li><a href="#">Track My Order</a></li>
								<li><a href="#">Help</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div id={style["bottom_footer"]} className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<span className={style.copyright}>
								Copyright &copy; All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://git" target="_blank">AlexG</a>
							</span>
						</div>
					</div>		
				</div>
			</div>
		</footer>
    );
}

export default Footer
