import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Card, Row} from 'react-bootstrap'
import { Context } from '..';

const BrandBar = observer(()=>{
    const { device } = useContext(Context)

    return (
            <Row className='mt-3 ms-1 d-flex flex-row'>
                {device.brands.map((brand)=> 
                    <Card 
                        onClick={()=> device.setSelectedBrand(brand)}
                        key={brand.id}
                        className="brandbar selected_item"
                    >{brand.name}</Card>)}
            </Row>
    );
})

export default BrandBar;
