const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://db:pass@ds261136.mlab.com:61136/flutter-restapi', {
        useNewUrlParser: true
    });
    console.log('Database: Connected');
}

module.exports = { connect };
