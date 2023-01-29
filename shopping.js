
function productTotal(product, price, isIncresing){
    const phoneInput = document.getElementById(product +'-number');
    let phoneInputAmount = phoneInput.value;
    if(isIncresing){
      phoneInputAmount = parseInt(phoneInput.value) + 1;
    }else if(phoneInputAmount > 0){
        phoneInputAmount = parseInt(phoneInput.value) - 1;
    }
    phoneInput.value = phoneInputAmount;
    const totalAmount = document.getElementById(product + '-total');
    totalAmount.innerText = parseInt(phoneInputAmount) * price;
    calculatePrice()
    
}
function getProductInput(product){
    const productField = document.getElementById(product + '-number');
    const productFieldInput = parseInt(productField.value);
    return productFieldInput;
}

function calculatePrice(){
    const phoneCost = getProductInput('phone') * 1219;
    const caseCost = getProductInput('case') * 59;
    const subtotal = phoneCost + caseCost;
    const tax = subtotal / 10;
    const totalPayment = subtotal + tax;
    const total = document.getElementById('sub-total').innerText = subtotal;
    const taxTotal = document.getElementById('tax-amount').innerText = tax;
    const bill = document.getElementById('total-price').innerText = totalPayment;
}

document.getElementById('plus-phone').addEventListener('click', function(){
    productTotal('phone', 1219, true);
    
})
document.getElementById('minus-phone').addEventListener('click', function(){
    productTotal('phone', 1219,  false);
})
document.getElementById('plus-case').addEventListener('click', function(){
    productTotal('case', 59, true);
})
document.getElementById('minus-case').addEventListener('click', function(){
    productTotal('case', 59, false);
})
