const express = require('express');

const sequelize = require('./config/database');

const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

sequelize.authenticate()
.then(() => {
    console.log('Conexion exitosa');
})
.catch((err) => {
    console.log(err);
});


app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});