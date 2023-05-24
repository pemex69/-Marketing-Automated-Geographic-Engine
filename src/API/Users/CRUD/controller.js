const { response } = require('express');
const pool = require('../../magedb');
const queries = require('./queries');

const getAllUsers = (req, res) => {
    pool.query(queries.getAllUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserByID = (req, res) => {
    const usr_id = parseInt(req.params.usr_id);
    pool.query(queries.getUserByID, [usr_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const AddUser = (req, res) => {
    const { usr_username, usr_email, usr_pass } = req.body;
    console.log(usr_username, usr_email, usr_pass);
    pool.query(queries.checkEmailExists, [usr_email], (error, results) => {
        if (error) throw error;
        if (results.rows.length) {
            res.send('Ese email ya existe.');
        }
        else {
            pool.query(queries.addUser, [usr_username, usr_email, usr_pass], (error, results) => {
                if (error) throw error;
                res.status(201).send('Nuevo usuario agregado exitosamente.');
            });
        }
    });
};


const deleteUserByID = (req, res) => {
    const usr_id = parseInt(req.params.usr_id);
    pool.query(queries.getUserByID, [usr_id], (error, results) => {
        if (error) throw error;
        //Checks the users existence
        if (!results.rows.length) {
            res.send('No existe el usuario.');
        }
        else {
            pool.query(queries.deleteUserByID, [usr_id], (error, results) => {
                if (error) throw error;
                res.status(200).send(`Usuario con ID ${usr_id} eliminado exitosamente.`);
            });
        }
    });
};

const updateUserByID = (req, res) => {
    const usr_id = parseInt(req.params.usr_id);
    const { usr_username, usr_email, usr_pass } = req.body;
    pool.query(queries.getUserByID, [usr_id], (error, results) => {
        if (error) throw error;
        //Checks the users existence
        if (!results.rows.length) {
            res.send('No existe el usuario.');
        }
        else {
            //Checks if the email already exists
            pool.query(queries.checkEmailExists, [usr_email], (error, results) => {
                if (error) throw error;
                if (results.rows.length) {
                    res.send('Ese email ya existe.');
                }
                else {
                    pool.query(queries.updateUserByID, [usr_username, usr_email, usr_pass, usr_id], (error, results) => {
                        if (error) throw error;
                        res.status(200).send(`Datos del usuario con ID ${usr_id} actualizados exitosamente.`);
                    });
                }
            });
        }
    });
};


module.exports = {
    getAllUsers,
    getUserByID,
    AddUser,
    deleteUserByID,
    updateUserByID
};