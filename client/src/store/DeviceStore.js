import { makeAutoObservable } from "mobx";
import { LIMIT } from "../utils/consts";

export class DeviceStore{
    constructor(){
        this._types = []
        this._brands  = []
        this._devices  = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = LIMIT
        this._cartCount = 0
        this._isCartSet = false
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setIsCartSet(bool){
        this._isCartSet = bool
    }

    setBrands(brands){
        this._brands = brands
    }

    setDevices(devices){
        this._devices = devices
    }

    setSelectedType(type){
        this._selectedType = type
    }


    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    setPage(page){
        this._page = page
    }

    setLimit(limit){
        this._limit = limit
    }

    setTotalCount(totalCount){
        this._totalCount = totalCount
    }

    setCartCount(cartCount){
        this._cartCount = cartCount
    }

    get cartCount(){
        return this._cartCount
    }

    get isCartSet(){
        return this._isCartSet
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }

    get page(){
        return this._page
    }

    get limit(){
        return this._limit
    }

    get totalCount(){
        return this._totalCount
    }
}
