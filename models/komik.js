module.exports = (sequelize, DataTypes) => {
    const komik = sequelize.define('komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
    });
    return komik;
}