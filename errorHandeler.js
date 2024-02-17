// Middleware para manejar errores
function errorHandler(err, req, res, next) {
    const status = err.status || 500;
    const message = err.message || 'Ha ocurrido un error en el servidor';
    res.status(status).json({ error: message });
}

export const errorHandler = errorHandler;
