import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '..';
import { v4 } from 'uuid'

const Shop = observer(()=>{
    const { device } = useContext(Context)

    return (
        <ul className="d-flex justify-content-between align-items-center ms-auto">
            {device.types.map((type)=>
                <li key={v4()}
                    onClick={()=> device.setSelectedType(type)}
                    className={`pe-3 section_tab_nav  ${device.selectedType.name === type.name ? "selected_type" : ""}`}>
                        {type.name}
                </li>
            )}            
        </ul>
    );
})

export default Shop;
