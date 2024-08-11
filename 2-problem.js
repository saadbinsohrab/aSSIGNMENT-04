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
console.log(checkName(['sa'])); //cl= invalid