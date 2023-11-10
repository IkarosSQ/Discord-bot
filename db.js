const Sequelize = require("sequelize");
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './dat.sqlite', // Replace with the path to your SQLite database file,
    logging:false
})

sequelize.sync()
    .then(() => {
        console.log('Tables created successfully!')
    })
    .catch((error) => {
        console.error('Error creating tables:', error)
    })
module.exports = sequelize