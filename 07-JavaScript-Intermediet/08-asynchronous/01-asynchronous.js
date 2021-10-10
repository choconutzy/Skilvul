/// Nomor 1

// 1. Apa itu synchronous? operasi akan dijalankan setelah operasi sebelumnya selesai dijalankan alias berurutan
// 2. Apa itu asynchronous? operasi selanjutnya dapat dijalankan tanpa menunggu operasi sebelumnya jalan
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser? ya bisa
// 4. Apa hasil yang akan tercetak pada baris kode dibawah? 
/*
first log:  1
first log:  2
first log:  3
first log:  4
first log:  5
second log:  6
second log:  6
second log:  6
second log:  6
second log:  6 
*/
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi console log ke dua terpending atau dijalankan setelah satu detik program dijalankan, karena i sudah mencapai 5, console.log kedua meneruskan
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
// for (var i = 1; i<=5; i++) {
//     console.log("first log: ", i); // 01 - Pertama
//     setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
// }

/// Cara 1
for (let i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}


// /// Cara 2
// for (var i = 1; i<=5; i++) {
//     console.log("first log: ", i); // 01 - Pertama
//     setTimeout(() => console.log("second log: ", i>5? i=1 : i+=1), 100); // 02 - Kedua
// }