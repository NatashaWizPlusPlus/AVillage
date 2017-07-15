module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
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
    date: {
      type: DataTypes.DATE,
      allowNull: false 
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false 
    }
  }  );

   Events.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Events.belongsTo(models.Users, {
      onDelete: "CASCADE",
    });
    Events.belongsTo(models.Categories, {
        onDelete: "CASCADE"
      });
    Events.hasMany(models.Items, {
      onDelete: "CASCADE"
    });
  }
  // , 
  //   {
  //     // We're saying that we want our Users to have Events
  //     classMethods: {
  //       associate: function(models) {
  //         // A User (foreignKey) is required or an Event can't be made
  //         Events.belongsTo(models.Users,{
  //           foreignKey: {
  //             field: 'id',
  //             allowNull: false
  //           }
  //         });
  //         Events.hasMany(models.Items,{
  //              onDelete: "cascade"
  //         });
  //       }  
  //     }
  //   }

  return Events;
};