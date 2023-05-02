import { Product, taxCalculation } from './06-funtion-destructuring';


const shoppingCart: Product[] = [
    {
        description: 'Moto G60',
        price: 230
    },
    {
        description: 'Tablet LG',
        price: 450
    }
];


// Tax = 0.15
const [total, tax] = taxCalculation ({
    products:shoppingCart,
    tax: 0.15
});



console.log ('Total', total);
console.log ('Tax', tax);


