function Opinion(sequelize, DataTypes) {
    return sequelize.define("opinion", {
      pseudo: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      grade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5
        }
      },
      message: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
    });
  }
  
  module.exports = Opinion;
  