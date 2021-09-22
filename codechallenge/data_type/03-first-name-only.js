function firstNameOnly(namaLengkap){
  split = namaLengkap.split(" ")
  awal = split[0]
  akhir = split[1]
  return (awal + " " + akhir[0] + ".")
}

console.log(firstNameOnly("David Winalda"));
