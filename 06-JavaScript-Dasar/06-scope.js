/// Soal - 01
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam console.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// di dalam console.log akan ditampilan output "Mariah"
/// hal ini dikarenakan name pada function merupakan local function, dimana dalam variabel local akan selalu didahulukan sebelum global. Apabila argumen tidak dideklarasikan maka akan menggunakan global variabel yakni yang berada di luar function.
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan terjadi apabila kita mencoba menjalankan baris kode dibawah?
/// - apa alasan kenapa hal tersebut bisa terjadi?
///   - dari segi salaryWithVar
///   - dari segi salaryWithConst

/// WRITE YOUR ANALYSIS HERE
/// output yang muncul adalah undefined
/// - dari segi salaryWithVar, variabel ini tidak ada sebelum console.log(tidak dideklarasikan), function salaryWithVar (local variabel) tidak dideklarasikan, otomatis mencari global variabel yang berada tepat diatas/ atau sebelum console.log. Karena tidak ditemukan global variabel atau tidak diinisialisasikan maka jadi undefined.
/// - dari segi salaryWithConst, variabel ini tidak ada sebelum console.log(tidak dideklarasikan), function salaryWithConst (local variabel) tidak dideklarasikan, otomatis mencari global variabel yang berada tepat diatas/ atau sebelum console.log. Karena tidak ditemukan global variabel atau tidak diinisialisasikan maka jadi undefined.
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

