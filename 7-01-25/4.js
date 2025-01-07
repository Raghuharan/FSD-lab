function merge(...obj){
    let object ={}
    for(let o of obj);{
  } 
console.log(object);
}
const userDetails = {name:"CVR",age:25}
const userAddress = {address: "Mangalpally", city: "Hyderabad"}
const userPreferences = {theme: "Engineering Edu", language: "EN"}
merge(userDetails,userAddress,userPreferences);

