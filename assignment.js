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

function checkName(name){
    const lastIndex = name.length-1;
    if(typeof name !== 'string'){
        return 'invalid';
    }else if(name.toLowerCase()[lastIndex] === 'a'
          || name.toLowerCase()[lastIndex] === 'y'
          || name.toLowerCase()[lastIndex] === 'i'
          || name.toLowerCase()[lastIndex] === 'e'
          || name.toLowerCase()[lastIndex] === 'o'
          || name.toLowerCase()[lastIndex] === 'u'
          || name.toLowerCase()[lastIndex] === 'w'){
          return 'Good Name';
    }
    return 'Bad Name';
}

function deleteInvalids(array){
   if(Array.isArray(array)){
    const cleanArray = [];
    for(const aray of array){
        if(typeof aray === 'number' && !isNaN(aray)){
            cleanArray.push(aray);
        }
    }
    return cleanArray;
   }
   return 'Invalid Array;'
}

function password(object){
    if(!object.name||!object.siteName||!object.birthYear){
            return 'invalid';
        }else if(object.birthYear.toString().length !== 4){
            return 'invalid';
        }
        const usn = object.siteName[0].toUpperCase() + object.siteName.slice(1);
        return usn + '#' + object.name + '@' + object.birthYear;
}

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
