// Burger models
// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Events", {
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Date: DataTypes.DATE

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Project;
};
