// Nomor 01
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(array) { 
    if(array.length===0) return 0
    return array[0] + sumOfArray(array.slice(1)) 
 }

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Nomor 02

const avg1 = sumOfArray(arr1)/arr1.length;
const avg2 = sumOfArray(arr2)/arr2.length;
function countAboveAvg(array, avg) {
        if(array.length===0) return 0
        return (array[0]>=avg) + countAboveAvg(array.slice(1), avg)
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);


// Nomor 03
const arr = [1, 2, 3, 4, 5];
let i = 0
function searchInArray(array, value) { 
    if(array.length===0){
            return "angka tidak ditemukan"
    }
    if(array[array.length-1]===value){
        return "angka ditemukan pada index: " + (array.length-1)
    }
    return searchInArray(array.slice(0,-1), value)
 }

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));


// Nomor 04
function trianglePattern(x,y) {
        if(x===0){
            return;
        }
        let space = ""
        for(let i=0;i<y;i++){
            if(i<x-1){
                space += " "
            } else{
                space += String.fromCharCode(64 + (y-x + (i-x) +2))
            }
        }
        console.log(space);
        trianglePattern(x-1, y);
}

trianglePattern(5, 5);