module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
  }
  }
    // {
    //   classMethods: {
    //     associate: function(models) {
    //       users.hasMany(models.Events, {
    //         onDelete: "cascade"
    //       });
    //     }
    //   }
    // }
  ); 
  Users.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration

    Users.hasMany(models.Events, {
      onDelete: "CASCADE"
    });
  }
  
 return Users
};






