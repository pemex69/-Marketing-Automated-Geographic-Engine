const express = require('express');
const usersRoutes = require('./src/API/Users/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('localhost:3000 5335');
});

app.use('/api/v1/users', usersRoutes);

app.listen(port, () => console.log(`App escuchando en puerto ${port} . . .`));