export default class ShoppingCartDTO{
    constructor({id, email, date, products, address}){
        this.id = id;
        this.email = email;
        this.date = date;
        this.products = products;
        this.address = address;
    }
}

export function transformarShoppingCartDTO(shoppingCarts) {
    if(Array.isArray(shoppingCarts)){
        shoppingCarts.map(shoppingCart => {
            return new ShoppingCartDTO(shoppingCart);
        });
    }
    return Array.isArray(shoppingCarts) ? shoppingCarts.map(shoppingCart => new ShoppingCartDTO(shoppingCart)) : new ShoppingCartDTO(shoppingCarts);
}