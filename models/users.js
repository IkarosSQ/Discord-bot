const {Model, DataTypes} = require("sequelize");

module.exports = class Users extends Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: DataTypes.STRING,
            },
            discordID: {
                type: DataTypes.STRING
            },
            currentxp: {
                type: DataTypes.STRING
            },
            level: {
                type: DataTypes.INTEGER
            },
            xptolevelup: {
                type:  DataTypes.STRING 
            }
        },
        {
            tableName: "Users",
            sequelize
        })
    }
}