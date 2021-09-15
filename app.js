const costPrice = document.querySelector('.buyingprice');
const quantity = document.querySelector('.quantity');
const sellingPrice = document.querySelector('.sellingprice');
const checkButton = document.querySelector('.check');
const output = document.querySelector('.output');
const container = document.querySelector('.container');


function checkStockPerformance () {
    document.body.classList.remove('happytheme');
    document.body.classList.remove('sadtheme');
    let cp = Number(costPrice.value);
    let quan = Number(quantity.value);
    let sp = Number(sellingPrice.value);

    if(costPrice.value === '' || quantity.value === '' || sellingPrice.value === '') {
        output.innerText = 'Please Input value to know your stock performance';
        output.style.color = 'red';
        return;
    }

    if(Math.sign(cp) === -1 || Math.sign(quan) === -1 || Math.sign(sp) === -1 || cp === 0 || sp === 0 || quan === 0) {
        output.innerText = 'Please Input values greater than zero!';
        output.style.color = 'red';
        return;
    }

     output.style.color = 'black';

    if(cp > sp) {
        let loss = (cp - sp ) * quan;
        let lossPercent = (((cp - sp ) * 100) / cp).toFixed(2);
        output.innerHTML = `You're total loss is ${loss}$. You lost ${lossPercent}% of your stocks.`;
        document.body.classList.add('sadtheme');
        output.style.color = 'white';
        output.style.borderColor = 'white';

    } else if (sp > cp) {

        let profit = (sp - cp) * quan;
        let profitPercentage = (((sp - cp) * 100) / cp).toFixed(2);
        output.innerHTML = `You're total profit is ${profit}$. You gain ${profitPercentage}% of your stocks.`;
        document.body.classList.add('happytheme');
        container.style.color = 'white';
        output.style.color = 'white';
        output.style.borderColor = 'white';
    } else if (sp === cp) {
        output.innerHTML = `No profit No loss`;
    }
}

checkButton.addEventListener('click', checkStockPerformance);


