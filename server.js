"use strict";
//require('dotenv').config()
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as dotenv from 'dotenv';
const express = require("express");
const mysql = require("promise-mysql");
const users_1 = require("./routes/users");
// const infoRouter = require('./routes/info')
// dotenv.config();
const app = express();
const configStr = {
    host: "localhost",
    user: "root",
    password: "Euler2718281828",
    // password: "",
    // database: "tech"
    database: "mydatabase"
};
const con = mysql.createPool(configStr);
//const con = mysql.createConnection(configStr)
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('aaswwa');
}));
// import * as infoRouter from './routes/info'
app.use("/user", users_1.router);
// async (req, res) => {
//     let con_ = await con;
//     const result = await con_.query("SELECT * FROM mytable");
//     // console.log(JSON.stringify(result));
//     res.send(JSON.stringify(result))
//     res.end();    
// })
// con.connect(function(err) {
//     if (err) {
//         console.log('Something went wrong here')
//         throw err
//     }
//     console.log("Connected!")
// })
app.listen(3000, () => console.log('Server Started'));
