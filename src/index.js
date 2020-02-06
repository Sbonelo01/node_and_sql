"use strict"

require('dotenv').config();
require('../.env');

const {
    Client
} = require('pg');

    let user = process.env.PGUSER;
    let password = process.env.PGPASSWORD;
    let host = process.env.PGHOST;
    let port = process.env.PGPORT;
    let database = process.env.PGDATABASE; 

const client = new Client({
   user,
   password,
   host,
   port,
   database
});

 client.connect()

async function createTable() {
    try {
        await client.connect()
        const table = await client.query(
            `CREATE TABLE IF NOT EXISTS 
            visistors(
                customerID SERIAL primary key,
                visitorName varchar(50),
                visitorAge integer,
                dateOfVisit varchar(50),
                timeOfVisit varchar(50),
                assistantName varchar(50),
                comments varchar(50);
                `
        );
        //console.table(table.rows)
        return table.rows;
    } catch (err) {
        console.table(err)
    } finally {
        await client.end()
    }
}

async function addNewVisitor(visitorName, visitorAge, dateOfVisit, timeOfVisit, assistantName, comments) {
    try {
        await client.connect()
        const addNew = await client.query(
            'INSERT INTO visitors(visitorName, visitorAge, dateOfVisit, timeOfVisit, assistantName, comments) VALUES($1, $2, $3, $3, $4, $5, $6)', [visitorName, visitorAge, dateOfVisit, timeOfVisit, assistantName, comments]
        );
        //console.table(addNew.rows)
        return addNew.rows;
    } catch (err) {
        console.log(err);
    } finally {
        await client.end();
    }
}

async function listAllVisitors() {
    try {
        await client.connect()
        const listAll = client.query('SELECT * FROM visitors');
        //console.table(listAll.rows);
        return listAll.rows
    } catch (err) {
        console.log(err);
    } finally {
        await client.end();
    }
}

async function deleteAvisitor(id) {
    try {
        await client.connect()
        const del = client.query('DELETE FROM visitors WHERE visitorId = ${id}');
        //console.table(del.rows);
        return del.rows
    } catch (err) {
        console.log(err);
    } finally {
        await client.end();
    }
}

async function updateAvisitor(id) {
    try {
        await client.connect()
        const update = client.query('UPDATE FROM visitors WHERE visitorId = ${id}');
        //console.table(update.rows);
        return update.rows;
    } catch (err) {
        console.log(err)
    } finally {
        await client.end();
    }
}

async function viewOnevisitor(id) {
    try {
        await client.connect()
        const view = client.query('SELECT * FROM visitors visitorID = ${id}')
            //console.table(view.rows)
        return view.rows;
    } catch (err) {
        console.log(err)
    } finally {
        await client.end()
    }
}

async function deleteAllVisitors() {
    try {
        await client.connect()
        const del = client.query('DELETE * FROM visitors')
            //console.table(del.rows)
        return del.rows;
    } catch (err) {
        console.log(err);
    } finally {
        await client.end();
    }
}

module.exports = {
    createTable,
    addNewVisitor,
    listAllVisitors,
    deleteAvisitor,
    updateAvisitor,
    viewOnevisitor,
    deleteAllVisitors
}


//add new visitor should save the visitor into the database
//list all visitor. This should return an array of all the visitor names and ids
//delete a visitor
//update a visitor
//view one visitor: given a visitor’s id, return all information about that visitor
//delete all visitors
