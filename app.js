// declear variable name for each ID element
const button1 = document.getElementById('first');
const button2 = document.getElementById('second');
const button3 = document.getElementById('third');
const button4 = document.getElementById('fourth');
const button5 = document.getElementById('fifth');
const button6 = document.getElementById('sixth');
const button7 = document.getElementById('seventh');
const memoryCost = document.getElementById('memoryCost');
const storageCost = document.getElementById('storageCost');
const delivaryCost = document.getElementById('delivaryCost');
const mainCost = document.getElementById('mainCost');
const total = document.getElementById('total');
const finalCost = document.getElementById('finalCost');
const promoField = document.getElementById("promoField");
let finallyTotalCost;

// update calculations
function updateData() {
    const momoryPrice = Number(memoryCost.innerText);
    const mainPrice = Number(mainCost.innerText);
    const storageExtraPrice = Number(storageCost.innerText);
    const delivaryPrice = Number(delivaryCost.innerText);
    const totalCost = momoryPrice + mainPrice + storageExtraPrice + delivaryPrice;
    total.innerText = totalCost;
    finalCost.innerText = totalCost;
    finallyTotalCost = Number(finalCost.innerText);
}


// using onclick function for promo code
function apply() {
    updateData();
    const promoFieldText = promoField.value;
    if (promoFieldText.toLowerCase() == 'stevekaku') {
        finallyTotalCost = finallyTotalCost * 0.8;
        finalCost.innerText = finallyTotalCost;
    }
    promoField.value = ' ';
}


// button1 event for 8GB memory
button1.addEventListener('click', function () {
    memoryCost.innerText = "0";

    updateData();
})

// button2 event for 16GB memory
button2.addEventListener('click', function () {
    memoryCost.innerText = "180";

    updateData();
})

// button3 event for 256GB ssd 
button3.addEventListener('click', function () {
    storageCost.innerText = "0";

    updateData();
})

// button4 event for 512GB ssd 
button4.addEventListener('click', function () {
    storageCost.innerText = "100";

    updateData();
})

// button5 event for 1TB ssd 
button5.addEventListener('click', function () {
    storageCost.innerText = "180";
    updateData();
})

// button6 event for free delivery
button6.addEventListener('click', function () {
    delivaryCost.innerText = "0";
    updateData();
})

// button7 event for paid delivery
button7.addEventListener('click', function () {
    delivaryCost.innerText = "20";
    updateData();
})







