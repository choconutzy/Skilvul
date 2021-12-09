## Description
 Pada technical assignment ini kamu diharapkan mampu menjelaskan fundamental konsep dari Web Server and RESTful API

## Specs
 > Kamu dapat membuat file web-server-and-restful-api.md atau web-server-and-restful-api.txt lalu didalamnya tuliskan jawaban sesuai nomor perintah pada soal.

Contoh:
1. Create a folder called `git-basic`. **mkdir git-basic**
2. `cd` into the `git-basic` folder. **cd git-basic**
3. ...

Jawablah pertanyaan di bawah ini:
1. Apa perbedaan antara static web server dan dynamic web server?
Static web server mengirimkan file ke browser sedangkan dynamic web server terdapat static web server serta terdapat extra software seperti aplikasi server dan database
2. Jelaskan arsitektur static site dan dynamic site
### Static site
Browser (Client-side) mengirimkan HTTP request ke web server, lalu web server mengambil data/files dari computer/repository  untuk selanjutnya mengirimkan HTTP Response ke browser sebagai response ke Browser (Client-side). Response ini berupa tampilan, gambar dari files HTML, CSS, Javascript, dll.
### Dynamic site
Browser (Client-side) mengirimkan HTTP request ke web server lalu meneruskan request data berupa URL encoding, GET/POST data, atau Cookies ke Web Application. Pada web application diteruskan ke Database untuk melakukan query sesuai request data. Setelah itu Web Application mengirimkan perubahan atau hasil dari query database berupa html untuk dikirimkan ke web server, lalu web server mengirimkan HTTP Response ke browser (Client-side).
3. Apa saja yang dapat kita buat pada sisi server?
a. efisiensi storage (penyimpanan) dan mengiriman informasi
b. Meningkatkan kualitas user experience, server dapat menyimpan dan menggunakan informasi mengenai client dimana penggunaanya dapat dilihat pada Google maps menyimpan lokasi terkini untuk menyajikan informasi rute secara otomatis.
c. Menyimpan session/state information, contohnya sebuah situs dapat mengetahui pengguna pernah log in sebelumnya, sehingga ketika akan menggunakan situs tersebut kembali tanpa log in ulang
d. Notifikasi dan komunikasi, server dapat mengirimkan notifikasi spesifik kepada user melalui email ataupun sms.
e. Data analysis, website dapat mengumpulkan data dari user untuk menampilkan rekomendasi dari history pencarian seperti iklan product yang pernah dikunjungi akan muncul di website lain sebagai iklan.
4. Mohon jelaskan apa itu RESTful?
sebuah arsitektur komunikasi berbasis web yang dapat memudahkan sistem untuk komunikasi antar komputer.
5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)
GET — mengambil data tertentu (berdasarkan id) atau kumpulan data
POST — membuat atau menambah data baru
PUT — update data tertentu (berdasarkan id)
DELETE — menghapus data tertentu (berdasarkan id)
6. Apa fungsi dari Response Codes?
response code berisi status code untuk peringatan kepada client tentang informasi mengenai berhasil atau tidaknya sebuah proses operasi/query. 