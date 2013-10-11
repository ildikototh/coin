$.fn.coinCounter = function (amount, coins) {
    var quo = new Array();
    var coinText = '';
    var amountInP = '';

    amountInP = amountConvert(amount);
    //convert the number into a penny amount
    $.each(coins, function (item) {
        //quotient of the coin in the left-over
        quo[coins[item].name] = Math.floor(amountInP / coins[item].value);
        //left-over
        amountInP = amountInP - (quo[coins[item].name] * coins[item].value);
        if (quo[coins[item].name] != 0) {
            coinText = coinText + quo[coins[item].name] + ' x ' + coins[item].name + ', ';
        }
        //if no left-over then quit from the loop and remove the last comma
        if (amountInP == 0) {
            coinText = coinText.replace(/\, $/g, '');
            return false;
        }
    });

    return coinText;
}