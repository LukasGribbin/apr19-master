import * as express from 'express'
import { send } from 'node:process';
import * as mysql from 'promise-mysql'

const router = express.Router()


const configStr = {
    host: "localhost",
    user: "root",
    password: "",
    // password: "",
    // database: "tech"
    database: "mydatabase",
}
let mytable = "mytable"


const con = mysql.createPool(configStr);
//const con = mysql.createConnection(configStr)

// Getting All
router.get('/', async (req, res) => {
    try {
        let con_ = await con
        const result = await con_.query("SELECT * FROM " + mytable)
        // console.log(JSON.stringify(result));
        res.send(JSON.stringify(result))
        res.end();    

    } catch (err) {
        res.status(500).json({message: err.message})
    }
    res.send('Hello World!')
})
// Getting One
router.get('/:id', async (req, res) => {
    try {
        // let id: string = req.params.id
        let con_ = await con
        const result = await con_.query("SELECT * FROM " + mytable + " WHERE id = " + req.params.id)
        res.send(JSON.stringify(result))
        res.end();    
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
// Creating One
router.post('/', async (req, res) => {
    try {
        let con_ = await con;
        const result = await con_.query("INSERT INTO " + mytable + " (firstname, lastname, age, Gender) VALUES ('Billy', 'Bob', '52', 'M')")
        res.status(201).send(JSON.stringify(result))
        res.end();  
    } catch (err){
        res.status(400).json({message: err.message})
    }

})
// Updating One
router.patch('/:id', (req, res) => {
    
})
// Deleting One
router.delete('/:id', async (req, res) => {
    try {
        // let id: string = req.params.id
        let con_ = await con
        const result = await con_.query("DELETE FROM " + mytable + " WHERE id = " + req.params.id)
        res.send(JSON.stringify(result))
        res.end();    
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


export {router}