const { response } = require('express');
const pool = require('../../../../magedb');
const queries = require('./queries');
const jwt = require('jsonwebtoken');

const getUserByID = (req, res) => {
    const usr_id = parseInt(req.params.usr_id);
    pool.query(queries.getUserByID, [usr_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addJWT = (req, res) => {

};


module.exports = {
    getUserByID,
};