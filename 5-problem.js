function monthlySavings(arr,llivingCost){
    if(!Array.isArray(arr) || !llivingCost === 'number'){
        return 'invalid input';
    }else{
        let sum = 0;
        let percent = 0;
        for(const ar of arr){
        sum = sum + ar;
        if(ar >= 3000){
            percent = percent + ar * 20 / 100;
        }
        }
        const saving = sum - (llivingCost + percent);
        if(saving < 0){

            return 'earn more';
        }
        return saving;
    }
    
}
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));