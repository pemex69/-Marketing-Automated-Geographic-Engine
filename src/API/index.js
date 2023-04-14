const express = require('express');
const cors = require('cors');
const compression = require('compression');
const usersRoutes = require('./Users/CRUD/routes');
const geolocationRoutes = require('./Geolocation/Map/routes');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(compression());

app.get('/', (req, res) => {
    res.send('so');
});
app.use(express.static('public'));
app.use('/locationwise/v1/users', usersRoutes);
app.use('/locationwise/v1/geocode-settlement', geolocationRoutes);

app.listen(port, () => console.log(`App escuchando en puerto ${port} . . .`));