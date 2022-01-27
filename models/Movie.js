function Movie(sequelize, DataTypes) {
    return sequelize.define("movie", {
      title: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      director: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      actorsList: {
          type: DataTypes.ARRAY(DataTypes.TEXT)
      }
    });
  }
  
  module.exports = Movie;
  