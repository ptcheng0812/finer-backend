import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "details",
})
export class Details extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telephone!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  gender!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  dateOfBirth!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  comment!: string;
}
