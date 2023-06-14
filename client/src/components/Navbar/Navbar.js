import React from "react";
import { Navbar as BootNavbar, Nav }  from 'react-bootstrap';
import { observer } from 'mobx-react-lite'
import { SHOP_ROUTE } from "../../utils/consts";
import style from './style.module.css'

const Navbar = observer(()=>{

    return (
        <BootNavbar className={style.navigation}>
            <Nav className="ms-3">
                <Nav.Item>
                    <Nav.Link href={SHOP_ROUTE} className={style.nav_link}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className={style.nav_link}>Brands</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='#' className={style.nav_link}>Categories</Nav.Link>                   
                </Nav.Item>
            </Nav>
      </BootNavbar>
    );
})

export default Navbar;
