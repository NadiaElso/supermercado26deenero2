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
let precioAceite: number = 90;
let precioCremaDeLeche: number = 90;
let precioDulceDeLeche: number = 60;
let precioGalletitas: number = 40;

console.log(" precio Leche es:" + precioLeche);
console.log(" precio Azucar es:" + precioAzucar);
console.log(" precio Yogurt es:" + precioYogurt);
console.log("precio Manteca es:" + precioManteca);
console.log("precio Queso es" + precioQueso);
console.log("precio Fideos es:" + precioFideos);
console.log(" precio Salsa De Tomate es:" + preciosalsaDeTomates);
console.log("precion Galletitas es:" + precioGalletitas);
console.log(" precion Crema De Leche es:" + precioCremaDeLeche);
console.log("precion Dulce De Leche es:" + precioDulceDeLeche);

let ingresonuevoproducto:string =String( prompt("Ingresa el nombre del nuevo producto"));
let stockinicialnuevoproducto:number = Number(prompt(
  "Ingresa el stock inicial del nuevo producto"
));
let ingresoprecionuevoproducto:number = Number(prompt(
  "Ingresa el  precio del nuevo producto"
));
let productonuevo = ingresonuevoproducto;
let stocknuevoproducto = stockinicialnuevoproducto;
let precionuevoproducto = ingresoprecionuevoproducto;
console.log(
 `Nuevo producto es, ${productonuevo}, su stock inicial es, ${stocknuevoproducto}, su precio inicial es, ${precionuevoproducto} `
);

console.log("Bienvenido a Mercado 3 supermercado Madariaga");
console.log("Los productos disponibles son:");

if (stockLeche != 0) {
  console.log("Leche $" + precioLeche);
}
if (stockAzucar != 0) {
  console.log("Azucar $" + precioAzucar);
}
if (stockYogurt != 0) {
  console.log("Yogurt $" + precioYogurt);
}
if (stockManteca != 0) {
  console.log("Manteca $" + precioManteca);
}
if (stockQueso != 0) {
  console.log("Queso $" + precioQueso);
}
if (stockFideos != 0) {
  console.log("Fideo $" + precioFideos);
}
if (stockSalsaDeTomate != 0) {
  console.log("Salsa de Tomate $" + preciosalsaDeTomates);
}
if (StockAceite != 0) {
  console.log("Aceite $" + precioAceite);
}
if (StockCremaDeLeche != 0) {
  console.log("Crema de Leche $" + precioCremaDeLeche);
}
if (stockDulceDeLeche != 0) {
  console.log("Dulce de Leche $" + precioDulceDeLeche);
}
if (stockGalletitas != 0) {
  console.log("Galletitas $" + precioGalletitas);
}
if (stocknuevoproducto != 0) {
  console.log(productonuevo + precionuevoproducto);
}

let nombredelproductoacomprar=prompt("Que producto desea  comprar");
if (nombredelproductoacomprar==="leche") {
let acomprar="leche $"
  console.log( acomprar + precioLeche)
  console.log("El stock disponible de Leche es:" + stockLeche);
   let cantidaddelproductoacomprar:number=Number(prompt("Cuantos desea comprar"));
  if (cantidaddelproductoacomprar>stockLeche) {
    console.log("No hay suficiente  stock; el stock  disponible de Leche es: " +stockLeche)
  } else { if(cantidaddelproductoacomprar===stockLeche){
    stockLeche=stockLeche-cantidaddelproductoacomprar;
    console.log("Has agotado el stock de Leche" +stockLeche);
    let compratotal=cantidaddelproductoacomprar*precioLeche;
    console.log("Total a pagar:"+ compratotal);

  }else {if (cantidaddelproductoacomprar<stockLeche){
    stockLeche=stockLeche-cantidaddelproductoacomprar;
    console.log("Gracias por su compra ahora queda un  Stock de Leche de:" +stockLeche);
    let compratotal=cantidaddelproductoacomprar*precioLeche;
    console.log("Total a pagar:"+ compratotal);
  }

 
  let ingresoproductonuevos1=prompt("ingreso de  producto nuevo 1");
let stockinicialdelosproductosnuevos1:number=Number(prompt("Ingresa stock inicial "));
let preciodelosproductosnuevos1:number=Number(prompt("ingresa el precio "));
 

if (stockinicialdelosproductosnuevos1!=0&&preciodelosproductosnuevos1!=0) {
 console.log(" producto nuevo:" + ingresoproductonuevos1);
 console.log("Su stock inicial es :"  + stockinicialdelosproductosnuevos1);
 console.log("El precio  nuevo producto es:" + preciodelosproductosnuevos1);
 let productonuevo1=ingresoproductonuevos1;
 let stocknuevoproducto1=stockinicialdelosproductosnuevos1;
 let precioproductonuevo1=preciodelosproductosnuevos1;
}

let ingresoproductonuevos2=prompt("ingreso de  producto nuevo 2");
let stockinicialdelosproductosnuevos2:number=Number(prompt("Ingresa stock inicial "));
let preciodelosproductosnuevos2:number=Number(prompt("ingresa el precio "));
 

if (stockinicialdelosproductosnuevos2!=0&&preciodelosproductosnuevos2!=0) {
 console.log(" producto nuevo:" + ingresoproductonuevos2);
 console.log("Su stock inicial es :"  + stockinicialdelosproductosnuevos2);
 console.log("El precio  nuevo producto es:" + preciodelosproductosnuevos2);
 let productonuevo2=ingresoproductonuevos2;
 let stocknuevoproducto2=stockinicialdelosproductosnuevos2;
 let precioproductonuevo2=preciodelosproductosnuevos2;
}

let ingresoproductonuevos3=prompt("ingreso de  producto nuevo 3");
let stockinicialdelosproductosnuevos3:number=Number(prompt("Ingresa stock inicial "));
let preciodelosproductosnuevos3:number=Number(prompt("ingresa el precio "));
 

if (stockinicialdelosproductosnuevos3!=0&&preciodelosproductosnuevos1!=0) {
 console.log(" producto nuevo:" + ingresoproductonuevos3);
 console.log("Su stock inicial es :"  + stockinicialdelosproductosnuevos3);
 console.log("El precio  nuevo producto es:" + preciodelosproductosnuevos3);
 let productonuevo3=ingresoproductonuevos3;
 let stocknuevoproducto3=stockinicialdelosproductosnuevos3;
 let precioproductonuevo3=preciodelosproductosnuevos3;
}

