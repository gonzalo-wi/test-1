const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
];

console.log("Listar primer producto: "+productos[0].nombre);

for (const producto of productos){
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Categoria: ${producto.categoria}`);
}

productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`);
    
});
