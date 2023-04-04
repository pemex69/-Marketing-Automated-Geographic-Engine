const { Client } = require('pg');

class DatabaseConnection {
    constructor() {
        this._client = new Client({
            user: "mageadmin",
            password: "F82DC03344Do!",
            database: "mage-dev",
            port: 5432,
            host: "mage-postgresql.postgres.database.azure.com",
            ssl: true
        });
        this._connected = false;
    }
    connect() {
        this._client.connect((err) => {
            if (err) {
                console.log("Error connecting to database: " + err);
            }
            else {
                this._connected = true;
                console.log("Connected to PostgreSQL with constructor . . .");
            }
        });
    }
    disconnect() {
        if (this._connected) {
            this._client.end(() => {
                this._connected = false;
                console.log("Disconnected from PostgreSQL");
            });
        }
    }
    excetuteQuery(query, callback) {
        if (!this._connected) {
            console.log("Not connected to database, nothing to execute");
            return;
        }
        this._client.query(query, (err, res) => {
            if (err) {
                console.log("Error executing query: " + err);
            }
            else {
                callback(res.rows);
            }
        });
    }
    get connected() {
        return this._connected;
    }
}
module.exports = DatabaseConnection;