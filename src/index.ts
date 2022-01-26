console.log("Supermercado Madariaga");
console.log("productos disponibles");
console.log(
  "Leche,azucar,yogurt, manteca, queso, fideos, salsa de tomate,aceite, crema de leche, dulce de leche, galletitas"
);
console.log("stock de los productos disponibles");
console.log(
  "4 packs de leche, 1 pack de azucar, 5 yogures, 4 mantecas, 4 quesos, 10 fideos, 10 salsa de tomates, 4 crema de leches, 6 paquetes de galletitas"
);

let nombreDesupermercado: string = "Madariaga";
let productosDisponibles: string =
  "Leche,Azucar, Yogurt, manteca, queso, fideos, salsa de tomate, aceite, crema de leche, dulce de leche, galletitas";
let stockLeche: number = 15;
let stockAzucar: number = 9;
let stockYogurt: number = 20;
let stockManteca: number = 10;
let stockQueso: number = 10;
let stockFideos: number = 20;
let stockSalsaDeTomate: number = 30;
let StockAceite: number = 15;
let StockCremaDeLeche: number = 9;
let stockDulceDeLeche: number = 7;
let stockGalletitas: number = 20;

console.log(nombreDesupermercado);
console.log(productosDisponibles);
console.log("Stock de leche:" + stockLeche);
console.log("Stock de Azucar" + stockAzucar);
console.log("Stock de Manteca" + stockManteca);
console.log("Stock de Queso" + stockQueso);
console.log("Stock de Fideos" + stockFideos);
console.log("Stock de Salsa de Tomates" + stockSalsaDeTomate);
console.log("Stock de Crema de Leche" + StockCremaDeLeche);
console.log("Stock de Dulce de Leche" + stockDulceDeLeche);
console.log("Stock de Galletitas" + stockGalletitas);
console.log("Stock de Aceite" + StockAceite);
console.log("Stock de Yogurt" + stockYogurt);

let precioLeche: number = 100;
let precioAzucar: number = 90;
let precioYogurt: number = 130;
let precioManteca: number = 80;
let precioQueso: number = 120;
let precioFideos: number = 70;
let preciosalsaDeTomates: number = 80;
let precioAceite:number=90;
let precioCremaDeLeche: number = 90;
let precioDulceDeLeche: number = 60;
let precioGalletitas: number = 40;

console.log("El precio unitario es:" + precioLeche);
console.log("El  precio unitario es:" + precioAzucar);
console.log("El precio unitario es:" + precioYogurt);
console.log("EL precio unitario es:" + precioManteca);
console.log("El precio unitario es" + precioQueso);
console.log("El precio unitario es:" + precioFideos);
console.log("El precio unitario es:" + preciosalsaDeTomates);
console.log("El precion unitario es:" + precioGalletitas);
console.log("El precion unitario es:" + precioCremaDeLeche);
console.log("El precion unitario es:" + precioDulceDeLeche);

//let ingresonuevoproducto = prompt("Ingresa el nombre del nuevo producto");
let stockinicialnuevoproducto=(
  //prompt("Ingresa el stock inicial del nuevo producto")
);
let ingresoprecionuevoproducto = (
 
  //prompt("Ingresa el  precio del nuevo producto")
);
let productonuevo = ingresonuevoproducto;
let stocknuevoproducto = stockinicialnuevoproducto;
let precionuevoproducto = ingresoprecionuevoproducto;
console.log(
  `Nuevo producto es, ${productonuevo}, su stock inicial es, ${stocknuevoproducto}, su precio inicial es, ${precionuevoproducto} `
);


console.log("Bienvenido a supermercado Madariaga");
console.log("Los productos disponibles son:");

if (stockLeche!=0) {
  console.log("Leche $"+ precioLeche);
} if (stockAzucar!=0) {
  console.log("Azucar $" +precioAzucar);
}if (stockYogurt!=0) {
  console.log("Yogurt $" + precioYogurt);
}if (stockManteca!=0) {
  console.log("Manteca $" + precioManteca);
}if (stockQueso!=0) {
  console.log("Queso $" + precioQueso);
}if (stockFideos!=0) {
  console.log("Fideo $"  + precioFideos);

}if (stockSalsaDeTomate!=0) {
  console.log("Salsa de Tomate $" + preciosalsaDeTomates);
}if (StockAceite!=0) {
  console.log("Aceite $" + precioAceite);
}if (StockCremaDeLeche!=0) {
  console.log("Crema de Leche $" + precioCremaDeLeche);
}if (stockDulceDeLeche!=0) {
  console.log("Dulce de Leche $" + precioDulceDeLeche);
}if (stockGalletitas!=0) {
  console.log("Galletitas $" + precioGalletitas);
}if (stocknuevoproducto!=0) {
  console.log(productonuevo + precionuevoproducto);
}
