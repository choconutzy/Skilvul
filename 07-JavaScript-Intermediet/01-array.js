/// Soal - 01
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(array) {
    return array.reverse()
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

/// Soal - 02
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

const getAverage = (arr) => { 
    const rata2 = arr.reduce((a, value) => a + value, 0)/arr.length;
    const hasil = arr.reduce((a, value) => (value > rata2) ? a+1 : a,0);
    return hasil;
 }

console.log(getAverage(arr1))
console.log(getAverage(arr2))

/// Soal - 03
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(array, val) { 
    let result = null
    let newArr = []
    array.forEach(e => e.forEach(f => newArr.push(f)));
    for(let i = 0; i<newArr.length;i++){
        if(newArr[i]===val){
            result = i
        }
    }
    return result
   }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));
  