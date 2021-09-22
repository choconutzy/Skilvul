/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

let result = []
for(let i=2; i<=100;i++){
  let isPrime = true;
  for(let j=2; j<i;j++){
    if(i%j==0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    result.push(i)
  }
}
console.log(result.toString())


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 



/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
