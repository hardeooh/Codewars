function lovefunc(flower1, flower2){
  if (flower1 === 0 && flower2 === 0) {
    return false
  }
  else if (flower1%2 === 0 && flower2%2 !== 0 || flower2 === 1){
    return true
  }
  else if (flower1%2 !== 0 && flower2%2 === 0 || flower1 === 1) {
    return true
  } else {
    return false
  }}