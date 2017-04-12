module.exports = function (sequelize, DataTypes) {

    var Wings = sequelize.define("wings", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hungry: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'wings'

    });
    return Wings;
};