import React, { useContext, useEffect } from 'react'
import TypeBar from '../components/TypeBar'
import DeviceList from '../components/DeviceList'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import Pages from '../components/Pages'

const Shop = observer(()=>{
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])


    return (
        <div className="container-fluid ">
            <div className="row">
                <section className="col-md-12">
                    <div className="row section_title d-flex mt-4">
                        <div className="col-4">
                            <h3 className="title">New Products</h3>
                        </div>
                        <div className="col-8 section_nav d-flex">
                            <TypeBar/>
                        </div>
                    </div>
                    <div className="row mt-4" align="center">
                        <div className="col-md-12">
                            <DeviceList/>
                        </div>
                    </div>
                </section>
                <div className="mt-1 pe-5 d-flex justify-content-end">
                    <Pages/>
                </div>
            </div>
        </div>
    );
})

export default Shop;
