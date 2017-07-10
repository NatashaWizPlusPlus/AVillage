// Customer model
// The Customer has a "customer" attribute of type DataTypes.String
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    Item: {
        Name: DataTypes.STRING,
        Description: DataTypes.STRING,
        Quantity: Datatypes.INTEGER,
        Donated: DataTypes.INTEGER,
        DonatedBy: DataTypes.STRING,
    }
  });
  return Item;
};