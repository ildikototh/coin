function amountConvert(amount) {
    var amountInP = '';

    //remove the last p if it's in an  amount
    if (amount.slice(-1) == 'p' ){
        amount = amount.substring(0, amount.length - 1);
        amountInP = amount;
        //when the amount also contains pound symbol remove that but the result will counted in pound
        if (amount.indexOf('\u00A3') != -1){
            amount = amount.replace(/\u00A3/g, '');
            amountInP = 100*amount;
        } else if (amount.indexOf('.') != -1){
            amountInP = amount;
        }
    } else {
        //replacing the pound symbol -> in this case amount is multipled by 100, because of the structure
        amount = amount.replace(/\u00A3/g, '');
        amountInP = 100*amount;
    }
    return amountInP;
}