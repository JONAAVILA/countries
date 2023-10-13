const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define( 'Activity', {
    id:{
      type: DataTypes.STRING(3),
      primaryKey: true,
      unique: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    difficulty:{
      type: DataTypes.INTEGER(1),
      allowNull: false,
      validate:{
        min: 1,
        max: 5
      }
    },
    duration:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season:{
      type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
      allowNull: false,
    }
  })
  
}
