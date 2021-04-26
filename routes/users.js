"use strict";
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
exports.router = void 0;
const express = require("express");
const mysql = require("promise-mysql");
const router = express.Router();
exports.router = router;
const configStr = {
    host: "localhost",
    user: "root",
    password: "",
    // password: "",
    // database: "tech"
    database: "mydatabase",
};
let mytable = "mytable";
const con = mysql.createPool(configStr);
//const con = mysql.createConnection(configStr)
// Getting All
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let con_ = yield con;
        const result = yield con_.query("SELECT * FROM " + mytable);
        // console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
        res.end();
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.send('Hello World!');
}));
// Getting One
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let id: string = req.params.id
        let con_ = yield con;
        const result = yield con_.query("SELECT * FROM " + mytable + " WHERE id = " + req.params.id);
        res.send(JSON.stringify(result));
        res.end();
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Creating One
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let con_ = yield con;
        const result = yield con_.query("INSERT INTO " + mytable + " (firstname, lastname, age, Gender) VALUES ('Billy', 'Bob', '52', 'M')");
        res.status(201).send(JSON.stringify(result));
        res.end();
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Updating One
router.patch('/:id', (req, res) => {
});
// Deleting One
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let id: string = req.params.id
        let con_ = yield con;
        const result = yield con_.query("DELETE FROM " + mytable + " WHERE id = " + req.params.id);
        res.send(JSON.stringify(result));
        res.end();
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
