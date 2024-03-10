// Función para generar productos de ejemplo
function generateMockProducts(count) {
    const products = [];
    for (let i = 0; i < count; i++) {
        products.push({
            id: i + 1,
            name: `Producto ${i + 1}`,
            price: Math.floor(Math.random() * 100) + 1
        });
    }
    return products;
}

export const generateMockProducts = {generateMockProducts};
