// Map was the best solution, using element plus its index to iterate. 
function nthChar(words){
 return words.map((e,i)=>e[i]).join('')
}

