import {express} from ('express');
import { bodyParser } from ('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para parsear el cuerpo de las solicitudes HTTP
app.use(bodyParser.json());

// Mocking Module
const mockingModule = require('./mockingModule');

// Manejador de Errores Personalizado
const errorHandlers = require('./errorHandlers');

// Endpoint para Mocking de Productos
app.get('/mockingproducts', (req, res) => {
    const mockedProducts = mockingModule.generateMockProducts(100);
    res.json(mockedProducts);
});

// Endpoint de ejemplo para manejar errores
app.post('/createproduct', (req, res) => {
    // Supuesto error al crear el producto----//
    const error = new Error('No se pudo crear el producto');
    error.status = 500;
    throw error;
});

// Middleware para manejar errores
app.use(errorHandlers);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
