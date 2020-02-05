"use strict"

const {
    Client
} = require('pg');
const client = new Client({
    user: "user",
    password: "pass",
    host: "localhost",
    port: 5432,
    database: "visitor"
})

//NEED TO CREATE DATABASE FIRST

async function addNewVisitor() {
    try {
        await client.connect()
        console.log('connected...')
        const addNew = client.query('CREATE USER');
        console.table(addNew.rows)
    } catch (err) {
        console.log(err);
    } finally {
        await client.end
    }
}

async function listAllVisitors() {
    try {
        const listAll = client.query('SELECT * FROM visitor');
        console.table(listAll.rows);
    } catch (err) {
        console.log(err);
    } finally {
        await client.end();
    }
}

async function deleteAvisitor() {
    try {
        const del = client.query('DELETE ....');
        console.table(del.rows);
    } catch (err) {
        console.log(err);
    } finally {
        await client.end();
    }
}

async function updateAvisitor() {
    try {
        const update = client.query('UPDATE * FROM visitor');
        console.table(update.rows);
    } catch (err) {
        console.log(err)
    } finally {
        await client.end();
    }
}

async function viewOnevisitor(id) {
    try {
        if (id) {
            const viewOne = client.query('SELECT USER WHERE VISITOR_ID = $visitorID');
            console.table(viewOne.rows)
        }
    } catch (err) {
        console.log(err)
    } finally {
        await client.end()
    }
}

async function deleteAllVisitors() {
    try {
        const del = client.query('DELETE * FROM visitors')
        console.table(del.row)
    } catch (err) {
        console.log(err);
    } finally {
        await client.end();
    }
}

//add new visitor should save the visitor into the database
//list all visitor. This should return an array of all the visitor names and ids
//delete a visitor
//update a visitor
//view one visitor: given a visitor’s id, return all information about that visitor
//delete all visitors
