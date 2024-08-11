
function password(object){
    if(!object.name||!object.siteName||!object.birthYear){
            return 'invalid';
        }else if(object.birthYear.toString().length !== 4){
            return 'invalid';
        }
        const usn = object.siteName[0].toUpperCase() + object.siteName.slice(1);
        return usn + '#' + object.name + '@' + object.birthYear;
}
console.log(password({ name: "rahat", birthYear: 2022, siteName: "Facebook" }));
// cl= Facebook#rahat@2022