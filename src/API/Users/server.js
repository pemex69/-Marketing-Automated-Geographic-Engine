const express = require('express');
const usersRoutes = require('./routes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('so');
});

app.use('/api/v1/users', usersRoutes);


app.listen(port, () => console.log(`App escuchando en puerto ${port} . . .`));