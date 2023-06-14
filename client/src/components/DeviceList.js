import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '..';
import DeviceItem from './DeviceItem/DeviceItem'
import { v4 } from 'uuid'

const DeviceList = observer(()=>{
    const { device } = useContext(Context)
    
    return (
        <div className='container-fluid d-flex flex-wrap justify-content-evenly'>           
                {device.devices.map((device)=>
                    <div className='col-md-3' key={v4()}>
                        <DeviceItem device={device}/>
                    </div>
                )}
        </div>
    );
})

export default DeviceList;
