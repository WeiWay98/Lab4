const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const fakeStoreController = require('./controllers/fakeStoreController');

const app = express();
const PORT = process.env.PORT || 3000;

// Your API routes and controller functions will go here
app.get('/api/fake-store', fakeStoreController.getFakeStoreData);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});