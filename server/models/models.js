const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    user_type: { type: DataTypes.STRING, defaultValue: 'C'}
})

const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const DeviceInfo = sequelize.define('device_info', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false }
})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
})

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
})

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: { type: DataTypes.STRING, allowNull: false, unique: true }
})

const BasketDevice = sequelize.define('basket_device', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
})

const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    rate: { type: DataTypes.INTEGER, allowNull: false },
})

const TypeBrand = sequelize.define('type_brand', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
})

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasOne(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Device.hasMany(DeviceInfo, {as: 'info'});
DeviceInfo.belongsTo(Device);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Type.hasMany(Device);
Device.belongsTo(Type);

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through: TypeBrand});

module.exports = {
 User,
 Basket,
 Rating,
 BasketDevice,
 Device,
 DeviceInfo,
 Type,
 Brand
}

