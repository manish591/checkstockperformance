const costPrice = document.querySelector('.buyingprice');
const quantity = document.querySelector('.quantity');
const sellingPrice = document.querySelector('.sellingprice');
const checkButton = document.querySelector('.check');
const output = document.querySelector('.output');


function checkStockPerformance () {
    let cp = Number(costPrice.value);
    let quan = Number(quantity.value);
    let sp = Number(sellingPrice.value);

    if(costPrice.value === '' || quantity.value === '' || sellingPrice.value === '') {
        output.innerText = 'Please Input value to know your stock performance';
        output.style.color = 'red';
        return;
    }
     output.style.color = 'black';

    if(cp > sp) {
        let loss = (cp - sp ) * quan;
        let lossPercent = (((cp - sp ) * 100) / cp).toFixed(2);
        output.innerHTML = `You're total loss is ${loss}$. You lost ${lossPercent}% of your stocks.`
    } else if (sp > cp) {
        let profit = (sp - cp) * quan;
        let profitPercentage = (((sp - cp) * 100) / cp).toFixed(2);
        output.innerHTML = `You're total profit is ${profit}$. You gain ${profitPercentage}% of your stocks.`
    } else if (sp === cp) {
        output.innerHTML = `You're total profit is 0$. You gain 0.00% of your stocks.`
    }
}

checkButton.addEventListener('click', checkStockPerformance);