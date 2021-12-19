## Description
 Pada technical assignment ini kamu diharapkan mampu menjelaskan fundamental konsep dari **Docker.**

## Specs
 > Kamu dapat membuat file docker.md atau docker.txt lalu didalamnya tuliskan jawaban sesuai nomor perintah pada soal.

Contoh:
1. Create a folder called `git-basic`. **mkdir git-basic**
2. `cd` into the `git-basic` folder. **cd git-basic**
3. ...

Jawablah pertanyaan di bawah ini:
1. Jelaskan apa yang dimaksud dengan **container** pada docker !
Wadah untuk mengemas dan menjalankan aplikasi. Wadah ini mencakup kode, runtime, system tools, dan pengaturan. Container hanya bisa mengakses resource yang telah ditentukan dalam Docker image.
2. Jelaskan apa perbedaan antara konsep **container** dengan **virtual machine** !
- VM adalah  perangkat lunak yang dapat mengisolasi sebuah mesin komputer serta dapat menjalankan semua program yang sama seperti pada komputer aslinya atau biasa disebut duplikat dari sebuah mesin komputer asli.
  Container adalah suatu teknologi yang dapat mengisolasi sebuah proses dari proses yang lainnya yang akan mengisolasi library dan aplikasi yang digunakan saja tanpa mengisolasi seluruh komponen seperti perangkat keras, kernel, sistem operasi, dan lain - lain.
- Container lebih efektif dan ringan dibandingkan dengan VM
- VM (Virtual Machine) menggunakan seluruh resource yang ada pada host, sedangkan Container hanya menggunakan sedikit resource dari host
- Container tidak diizinkan untuk mengakses kernel, sedangkan Virtuam Machine dapat menggunakan kernel tersendiri
3. Apa yang dimaksud dengan **docker file** ?
Dockerfile adalah file teks yang berisi semua perintah yang bisa dijalankan user pada baris perintah untuk membuat image.
4. Apa yang dimaksud dengan **docker registery** ?
tempat menyimpan dan mengelola Docker Image.
5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !
Menggunakan docker compose 
1. Buat file NAMA_FILE.yaml di dalam project yang kamu buat
2. Tulis beberapa perintah ke dalam sana
3. Jalankan menggunakan perintah docker-compose NAMA_FILE.yaml up
