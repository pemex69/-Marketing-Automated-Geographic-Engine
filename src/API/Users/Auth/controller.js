const { response } = require('express');
const pool = require('../../magedb');
const queries = require('./queries');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const validateUser = (req, res) => {
    const { usr_email, usr_pass } = req.params;
    pool.query(queries.checkEmailExists, [usr_email], (error, results) => {
        if (error) throw error;
        if (!results.rows.length) {
            res.send('No existe el usuario.');
        } else {
            pool.query(queries.validateUser, [usr_email, usr_pass], (error, results) => {
                if (error) throw error;
                if (!results.rows.length) {
                    res.send('Contraseña incorrecta.');
                } else {
                    const userId = results.rows[0].usr_id;
                    const token = jwt.sign({ userId }, 'secret', { expiresIn: '1w' });
                    console.log('Token: ' + token);
                    res.cookie('authToken', token, {
                        maxAge: 1000 * 60 * 60 * 24 * 7, // 1w
                        secure: true,
                        httpOnly: true,
                        sameSite: 'None',
                        path: '/'
                    });
                    res.send('Usuario validado.');
                    return;
                }
            });
        }
    });
};

const verifyToken = (req, res, next) => {
    const authToken = req.cookies['authToken'];
    console.log("Request cookies . . ., authToken=?" + authToken);
    if (!authToken) {
        console.log('No token provided');
        return res.status(401).json({ message: 'Unauthorized, No token found' });
    }
    try {
        const decodedToken = jwt.verify(authToken, 'secret');
        let values = JSON.stringify(decodedToken);
        console.log("Decoded token: " + values);
        return res.status(200).json({ values });
    } catch (err) {
        console.log('Error trying to verify token, expired ?');
        return res.status(401).json({ message: 'Error trying to verify token, possibly expired.' });
    }
};


module.exports = {
    validateUser,
    verifyToken
};