// Nomor 1
function taxCal(salary){
  if(salary<5000000){
    return 0
  } else if(5000000<=salary<10000000){
      return salary * 0.05
  } else if(10000000<=salary<20000000){
      return salary * 0.1
  } else{
      salary * 0.2
  }
}

console.log(taxCal(4500000))
console.log(taxCal(5000000))
console.log(taxCal(20000000))

// Nomor 2


// Nomor 3
