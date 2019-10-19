var isValid = false;

function toggleBoolean(booleanVar){
   if (typeof booleanVar === 'boolean'){
	   return !booleanVar;
   }else{
	   console.log('warning!Not a boolean.');
   }
}
var newBoolean = toggleBoolean(isValid);
console.log(newBoolean);
       
