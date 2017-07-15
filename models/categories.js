module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define("Categories", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    }, 
    imgURL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }    
  });

  Categories.associate = function(models) {


    Categories.hasMany(models.Events, {
        onDelete: "CASCADE"
    });
  }
  
 return Categories
};
