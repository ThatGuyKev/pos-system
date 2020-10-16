module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "products",
    {
      id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      category: {
        allowNull: false,
        references: {
          key: "id",
          model: "categories",
        },
        type: DataTypes.INTEGER.UNSIGNED,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    { charset: "utf8" }
  );
};

module.exports.down = (queryInterface) => queryInterface.dropTable("products");
