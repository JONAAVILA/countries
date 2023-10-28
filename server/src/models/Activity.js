const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define( 'Activity', {
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    difficulty:{
      type: DataTypes.ENUM('1','2','3','4','5'),
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
  }, {timestamps : false})
  
}
