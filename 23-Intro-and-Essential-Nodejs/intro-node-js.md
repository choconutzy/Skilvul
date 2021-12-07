1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
Nodejs adalah platform Runtime Environment Javascript bersifat open source yang berjalan dengan V8 engine dan secara sederhana mengeksekusi Javascript dari sisi server.
Bedanya dengan Javascript yakni Javascript hanya dapat dijalankan pada Frontend atau sisi Client, sedangkan Nodejs dapat menjalankan Javascript pada sisi Backend. Query di Nodejs tidak bisa dijalankan pada Frontend sedangkan Javascript bisa di Frontend dan Backend.
2. Mohon jelaskan arsitektur dari Node.js?
Node.js memiliki dua komponen utama, yaitu engine JavaScript V8 Google dan Libuv Library.
    a. Engine V8
       Dengan komponen ini, input berupa kode JavaScript dapat di-compile menjadi kode dalam tingkat assembly.
    b. Libuv Library
       Library C++ ini bertugas mengelola operasi asynchronous I/O (input/output) di Node.js dan main event loop. Dengan menggunakan konsep arsitektur javascript, walaupun menggunakan single thread tetapi javascript seperti menggunakan multi thread.
    c. Design Pattern
       Ada dua jenis design pattern yang digunakan oleh Node.js, yaitu object pool dan facade.
       a. Object pool — design pattern berisi kumpulan objek yang dapat digunakan untuk task tertentu
       b. Facade — design pattern yang memberikan tampilan antarmuka untuk body kode
3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
Built in module adalah module yang merupakan bawaan dari Nodejs tersebut
External module merupakan module yang perlu di install menggunakan command line
Custom module merupakan module yang di custom sendiri dengan membuatnya di file baru lalu di export.
4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?
Built in module : http
External module : express
Custom module : logger dan serial serializer middlewares