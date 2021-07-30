 let carts = document.querySelectorAll(".product-btn")

let products = [
    {
        name: 'TCL 55 Inch Android 4K UHD Smart Tv',
        price: 63200,
        numberInCart: 0

    },
    {
        name: 'Samsung Galaxy Note 8 4gb 64gb',
        price: 35040,
        numberInCart: 0

    },
    {
        name: 'Commercial Blender RE-2-084',
        price: 10540,
        numberInCart: 0

    },
    {
        name: 'Rebune RE-11-021 6L Pressure Cooker',
        price: 7855,
        numberInCart: 0

    },
    {
        name: 'Washing Machine',
        price: 70899,
        numberInCart: 0

    },
    {
        name: 'Framless Smart LED TV',
        price: 58000,
        numberInCart: 0

    },
    {
        name: 'Tecno',
        price: 16480,
        numberInCart: 0

    },
    {
        name: 'Treadmill',
        price: 80861,
        numberInCart: 0

    }

]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function(){
        cartNumbers(products[i]);
        Total(products[i]);
    })
    
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    if (productNumbers) {
        document.querySelector('.itemsNumber').textContent = productNumbers;
        
    }
}
function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.itemsNumber').textContent = productNumbers + 1;
        
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.itemsNumber').textContent = 1;
    }
    setItems(products)
}
function setItems (products){
    let cartItems = JSON.parse(localStorage.getItem('productsNumberInCart'));
    if (cartItems != null) {
        if (cartItems[products.name] == undefined) {
            cartItems = {
                ...cartItems,
                [products.name]: products 
            }
        }
        cartItems[products.name].numberInCart += 1
    } else {
        products.numberInCart = 1
     cartItems = {
        [products.name]: products 
    }
   
    }
   
    localStorage.setItem('productsNumberInCart', JSON.stringify( cartItems));
}

function Total(products){
    let cartCost =  localStorage.getItem('Total')
    
    if (cartCost != null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem('Total', cartCost + products.price)
    } else {
        localStorage.setItem('Total', products.price)
    }
   
}
onLoadCartNumbers()