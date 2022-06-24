const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(100),
            },
            status: {
                type: DataTypes.STRING(100),
            }
        }, {
            timestamps: false,
            sequelize: sequelize,
            modelName: 'User'
        })
    }
}

module.exports = User