const express = require('express');
const cors = require('cors');
const compression = require('compression');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const usersRoutes = require('./Users/CRUD/routes');
const authRoutes = require('./Users/Auth/routes');
const geolocationRoutes = require('./Geolocation/Map/routes');
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.use(express.json({ extended: true }));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/locationwise/setUserCookie', (req, res) => {
    res.cookie('nombre de cookie', 'cookie value', {
        maxAge: 1000 * 10,
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
    });
    res.send('cookie set');
});

app.get('/locationwise/getUserCookie', (req, res) => {
    res.send('leyendo cookies . . .');
    console.log(req.cookies);
});

app.get('/locationwise/deleteUserCookie', (req, res) => {
    res.clearCookie('nombre de cookie');
    res.send('cookie borrada');
});

app.get('/', (req, res) => {
    res.send('soo');
});


app.post('/locationwise/v1/token', (req, res) => {
    // Get user from database

    const token = null
    res.send({ token })
});

app.get('/locationwise/v1/public', (req, res) => {
    res.send('publico');
});

app.get('/locationwise/v1/private', (req, res) => {
    try {
        res.send('privado');
    } catch (error) {
        res.send(401).send('no autorizado');
    }
});

app.use(express.static('public'));
app.use('/locationwise/v1/users', usersRoutes);
app.use('/locationwise/v1/geocode-settlement', geolocationRoutes);

app.listen(port, () =>
    console.log(`App escuchando en puerto ${port} . . .`));