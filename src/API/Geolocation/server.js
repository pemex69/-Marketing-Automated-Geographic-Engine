const express = require('express');
const geolocationRoutes = require('../Geolocation/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('so');
});

app.use('/api/v1/AGEBS', geolocationRoutes);

app.listen(port, () => console.log(`App escuchando en puerto ${port} . . .`));