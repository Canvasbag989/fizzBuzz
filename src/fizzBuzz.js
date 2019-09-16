let num = []
let fizzBuzz = function(){
    for ( let i = 1; i < 101; i++) {
  if (i % 3 == 0){
    num.push('fizz')
  }
  else if (i % 5 == 0) {
     num.push('buzz')
  }
  else {
     num.push(i)
  }
    }
return num
}
 fizzBuzz()
