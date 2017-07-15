module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define("Categories", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    //   references: "Events",
    //   referencesKey: "category",
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
  
    // {
    //   classMethods: {
    //     associate: function(models) {
    //       users.hasMany(models.Events, {
    //         onDelete: "cascade"
    //       });
    //     }
    //   }
    // }
  Categories.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration

    Categories.hasMany(models.Events, {
        // foreignKey: "name",  
        // sourceKey: "name",  
        onDelete: "CASCADE"
    });
  }
  
 return Categories
};
