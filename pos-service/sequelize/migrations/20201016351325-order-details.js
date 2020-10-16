module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    "orderDetails",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      orderId: {
        allowNull: false,
        references: {
          key: "id",
          model: "orders",
        },
        type: DataTypes.UUID,
      },
      productId: {
        allowNull: false,
        references: {
          key: "id",
          model: "products",
        },
        type: DataTypes.INTEGER.UNSIGNED,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      charset: "utf8",
    }
  );
};

module.exports.down = (queryInterface) =>
  queryInterface.dropTable("orderDetails");
