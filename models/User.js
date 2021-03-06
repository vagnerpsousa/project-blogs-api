module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        timestamps: false,
    });

    user.associate = (models) => {
        user.hasMany(models.BlogPosts, { as: 'posts', foreignKey: 'userId' });
    };

    return user;
};