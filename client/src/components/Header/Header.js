import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import style from './style.module.css'
import { ADMIN_ROUTE, ADRESS, EMAIL, LOGIN_ROUTE, SHOP_ROUTE, TEL } from '../../utils/consts'
import { Context } from '../..'
import 'font-awesome/css/font-awesome.min.css';
import { observer } from 'mobx-react-lite'
import Cart from '../Cart/Cart'

const Header = observer(() => {
	const { user } = useContext(Context)

	const logOut = async () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem('token', '')
    }

    return (
        <header>
			<div className="container-fluid d-flex"  id={style["top_header"]}>
				<div className="row w-100">
					<div className='col-md-12 d-flex pb-2 ms-3'>
						<ul className={`${style.header_links} d-flex p-0`}>
							<li><a href="#"><i className="fa fa-phone"></i>{TEL}</a></li>
							<li><a href="#"><i className="fa fa-envelope"></i>{EMAIL}</a></li>
							<li><a href="#"><i className="fa fa-map-marker"></i>{ADRESS}</a></li>
						</ul>
						{user.isAuth ? 
							<ul className={`${style.header_links} d-flex ms-auto me-2`}>
								<li><a href={SHOP_ROUTE}><i className="fa fa-user"></i> My Account</a></li>
								<li><a href={ADMIN_ROUTE}><i className="fa fa-user-circle"></i>Admin Panel</a></li>
								<li><a href={LOGIN_ROUTE} onClick={logOut}><i className="fa fa-sign-out"></i>Log Out</a></li>
							</ul>
							:
							<ul className={`${style.header_links} ms-auto`}>
								<li><a href={LOGIN_ROUTE}><i className="fa fa-sign-in"></i>Sign In</a></li>
							</ul>
						}
					</div>
				</div>	
			</div>
			<div className="container-fluid " id={style["header"]}>
				<div className="row ms-1 d-flex align-items-center">
					<div className="col-md-3">
						<div className={`${style.header_logo}`}>
							<a href="#" className={`${style.logo}`}>
								<img className="mt-1" src='' alt="LOGO" />
							</a>
						</div>
					</div>
					<div className="col-md-6">
						<div className={style.header_search}>
							<form>
								<select className={style.input_select}>
									<option value="0">All Categories</option>
								</select>
								<input className={`${style.input} input`} placeholder="Search here"/>
								<button className={style.search_btn}>Search</button>
							</form>
						</div>
					</div>
					<div className="col-md-3 p-1">
						<div className={`${style.header_ctn}`}>
							<div>
								<a href="#">
									<i className="fa fa-heart"></i>
									<span>Your Wishlist</span>
									<div className={`${style.qty}`}>0</div>
								</a>
							</div>
							<Cart/>
						</div>
					</div>
				</div>
			</div>
			<Navbar/>
		</header>
    );
})

export default Header
