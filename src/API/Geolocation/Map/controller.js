const { response } = require('express');
const pool = require('../../../../magedb');
const queries = require('./queries');

const GetAllSettlements = async (req, res) => {
    pool.query(queries.GetAllSettlements, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const GetAgebByCvegeo = async (req, res) => {
    const cvegeo = req.params.cvegeo;
    pool.query(queries.GetAgebByCvegeo, [cvegeo], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    GetAgebByCvegeo,
    GetAllSettlements
};