const db = require('../models/index')

// Sync Database
module.exports = function () {
    db.sequelize.sync()
        .then(() => {
            console.log("Synced db.");
        })
        .catch((err) => {
            console.log("Failed to sync db: " + err.message);
        });
}