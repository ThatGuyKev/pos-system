import { DataTypes, Model } from "sequelize";
import { OrderDetails } from "./order";

import sequelize from "#root/db/connection";

export class Product extends Model {}
Product.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
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
  },
  {
    modelName: "products",
    sequelize,
  }
);
Product.hasMany(OrderDetails);
