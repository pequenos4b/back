const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {PORT} = process.env;
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {


  server.listen(PORT, () => {

    console.log(`Listening at PORT ${PORT} `); // eslint-disable-line no-console

 
  });
});
 
