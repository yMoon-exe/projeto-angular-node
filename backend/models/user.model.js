module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
  });
};
