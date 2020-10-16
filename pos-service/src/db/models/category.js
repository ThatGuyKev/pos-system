import { DataTypes, Model } from "sequelize";
import { Product } from "./product";
import sequelize from "#root/db/connection";

export class Category extends Model {}
Category.init(
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
  },
  {
    modelName: "categories",
    sequelize,
  }
);

Category.hasMany(Product);
