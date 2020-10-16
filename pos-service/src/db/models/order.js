import { DataTypes, Model } from "sequelize";

import sequelize from "#root/db/connection";

export class Order extends Model {}
Order.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    total: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "orders",
    sequelize,
  }
);
export class OrderDetails extends Model {}
OrderDetails.init(
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
  },
  {
    modelName: "orderDetails",
    sequelize,
    updatedAt: false,
  }
);

Order.hasMany(OrderDetails);
