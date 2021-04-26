//require('dotenv').config()

// import * as dotenv from 'dotenv';

import * as express from 'express'
import * as mysql_ from 'mysql';
import * as mysql from 'promise-mysql';
import {router as userRouter} from './routes/users'
// const infoRouter = require('./routes/info')


// dotenv.config();

const app = express()

const configStr = {
    host: "localhost",
    user: "root",
    password: "Euler2718281828",
    // password: "",
    // database: "tech"
    database: "mydatabase"
}

const con = mysql.createPool(configStr);
//const con = mysql.createConnection(configStr)

app.get("/", async (req, res) => {
    res.send('aaswwa')   
})


// import * as infoRouter from './routes/info'
app.use("/user", userRouter)

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



app.listen(3000, () => console.log('Server Started'))


