function addItemToCart(itemName, itemPrice) {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    console.log(`Adicionando ${itemName} ao carrinho por R$${itemPrice.toFixed(2)}`);

    const newItem = document.createElement('li');
    newItem.textContent = `${itemName} - R$${itemPrice.toFixed(2)}`;
    
    cartList.appendChild(newItem);

    const currentTotal = parseFloat(cartTotal.textContent.replace('R$', '')) || 0;
    const newTotal = currentTotal + itemPrice;

    console.log(`Total atual do carrinho: R$${newTotal.toFixed(2)}`);

    cartTotal.textContent = `Total: R$2${newTotal.toFixed(0)}`;
}

addItemToCart('Hamburguer Clássico', 20.00);
addItemToCart('Batata Frita', 7.00);

document.getElementById('checkout').addEventListener('click', function() {
    alert('Compra finalizada! Obrigado por escolher a Burguer Art.');
    limparCarrinho();
});
