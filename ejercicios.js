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

const nombresDeProductos = productos.map(producto => producto.nombre);
console.log(nombresDeProductos);

const categoriaFiltro = productos.filter(producto => producto.categoria === "Ropa");
console.log(categoriaFiltro);

const precioFiltro = productos.filter(producto => producto.precio > 3000);
console.log(precioFiltro);

const buscarNombre = productos.find(producto => producto.nombre === "Gorra");
console.log(buscarNombre);
const hayProducto = productos.some(producto => producto.precio > 10000);
console.log(hayProducto);

const todosMayor = productos.every(producto => producto.precio > 1000);
console.log(todosMayor);
const hayCamperoa = productos.includes("Campera");
console.log(hayCamperoa);
const ordenarPorPrecio = productos.sort();
console.log(ordenarPorPrecio);
