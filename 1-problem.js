function calculateMoney(ticketSale){
    const ticketPrice = 120;
    const watchmenCost = 500;
    const staffLunchCost = 400;
    if(ticketSale < 0){
        return 'Invalid Number';
    }
    const totalCost = watchmenCost + staffLunchCost;
    return ticketSale * ticketPrice - totalCost;

}
console.log(calculateMoney(100)); //cl= 11100