const vulval = [ NaN, 1,12,0 ,-1 , undefined ];
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
console.log(deleteInvalids(vulval)); //cl= [ 1, 12, 0, -1 ]