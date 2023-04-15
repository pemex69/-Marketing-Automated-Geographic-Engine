const express = require('express');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const usersRoutes = require('./Users/CRUD/routes');
const geolocationRoutes = require('./Geolocation/Map/routes');
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(compression());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('soo');
});

app.get ('/locationwise/setUserCookie', (req, res) => {
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

app.use(express.static('public'));
app.use('/locationwise/v1/users', usersRoutes);
app.use('/locationwise/v1/geocode-settlement', geolocationRoutes);

app.listen(port, () => console.log(`App escuchando en puerto ${port} . . .`));