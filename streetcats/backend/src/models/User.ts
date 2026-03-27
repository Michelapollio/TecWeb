//definizione delle tabelle sequelize
import sequelize from "sequelize";
import { Sequelize, DataTypes, Model } from "sequelize";
import {type createHash} from "crypto";
//import { query } from '../config/db.js'

export function createModel(database: Sequelize) {
    database.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value: string) {
                let hash: string;
                this.setDataValue('passwordHash', value);
            }
        },
        createdAt: {
            type: DataTypes .DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    })
}

function query<T>(arg0: string, arg1: string[]) {
    throw new Error("Function not implemented.");
}
