 let carts = document.querySelectorAll(".product-btn")


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function(){
        cartNumbers()
    })
    
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    if (productNumbers) {
        document.querySelector('.itemsNumber').textContent = productNumbers;
        
    }
}
function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.itemsNumber').textContent = productNumbers + 1;
        
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.itemsNumber').textContent = 1;
    }
}
onLoadCartNumbers()