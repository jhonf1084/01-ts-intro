//Interfase de producto
interface Product {
    description: String;
    price: number;
}


//Productos
const phone: Product = {
    description: 'Moto G20',
    price: 150,
}

const table: Product = {
    description: 'iPaf Air',
    price: 350,
}


//Interfase de calculo
interface taxCalculationOptions {
    tax: number;
    products: Product [];
}

//Funcion de calculo, 'options' es de tipo 'taxCalculationOption'
function taxCalculation(options: taxCalculationOptions): number [] {
    
    //Vatiable total inicializada en cero
    let total = 0;

    //ForEach recorreo el arreglo de productos para sumar sus precios
    options.products.forEach(product => {
        total += product.price;
    })

    return [total, total * options.tax]
}



const shoppingCart = [phone,table];
const IVA = 0.19;


const result = taxCalculation({
    products: shoppingCart,
    tax: IVA,
})


console.log ('Total ', result[0]);
console.log ('IVA ', result[1]);

console.table (result);


export {};