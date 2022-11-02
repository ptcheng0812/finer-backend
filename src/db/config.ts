import { Sequelize } from "sequelize-typescript";
import { Details } from "../models/details";

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "12345678",
  database: "finer",
  logging: false,
  models: [Details],
});

export default connection;
