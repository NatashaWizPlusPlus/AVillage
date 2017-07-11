module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define("Items", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    donated: {
      type: DataTypes.BOOLEAN,
      allowNull: false 
    },
    donatedBy: {
      type: DataTypes.STRING,
      allowNull: true 
    }
  } 
    // {
    //   // Events have many Items
    //   classMethods: {
    //     associate: function(models) {
    //       // An Event (foreignKey) is required or an Item can't be made
    //       Items.belongsTo(models.Events,{
    //         foreignKey: {
    //           allowNull: false
    //         }
    //       });
    //     }  
    //   }
    // }
  );
  return Items;
};