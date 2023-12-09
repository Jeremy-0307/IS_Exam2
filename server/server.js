const express = require('express');
const app = express();
const cors = require('cors'); 
const apiRouter = require('./routes/api');

app.use(express.json());
app.use(cors());

app.use('/', apiRouter);

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Hubo un error en el servidor' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
}); 

module.exports = app;
