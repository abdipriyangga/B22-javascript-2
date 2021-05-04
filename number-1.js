// Number Methods
// 1. toExponential() adalah sebuah method yang mengubah angka kedalam notasi ekspoonen
let num = 50
console.log(`Expnential dari ${num} = ${num.toExponential()} `) //output: 5e+1

// 2. toFixed() adalah sebuah method yang memberi format pada angka dengan jumlah digit tertentu, dan terletak disebelah kanan.
console.log(`Nilai toFixed dari ${num} = ${num.toFixed(4)}`) //output: 50.0000

//3. toPresicion() adalah sebuah method yang merepresentasikan angka secara spesifik.
const val = 8.12345
console.log(`Nilai toPrecision dari ${val} = ${val.toPrecision(4)}`) //output: 8.1234

//String Methods
//1. charAt() adalah sebuah method yang mengembalikan nilai sesuaii dengan index
const string = "Saya beli rumah,"
console.log(`Hasil charAt() dari ${string} adalah ${string.charAt(0)}`) //output: S

//2. concat() adalah method yang berguna untuk menggabungkan dua string menjadi string baru
const string2 = "Rumah dibeli saya"
const newString = string.concat(string2)
console.log(`Gabungan dari string dan string 2 menjadi: ${newString}`) //output: Gabungan dari string dan string 2 menjadi: Saya beli rumah,Rumah dibeli saya

//3. length() adalah metode yang berguna untuk menghitung panjang dalam sebuah string
console.log(`panjang dari string : ${string.length}`) //output : 15

//Array Method
//1. find() adalah method yang digunakan untuk mengambil nilai dari indeks dalam sebuah array, sesuai dengan kondisi yang ditentukan.
const daftarNama = ["Ari", "Budi", "Andi", "Rio"]
const cariNama = daftarNama.find(function (nama) {
    return nama === "Andi"
})
console.log(cariNama) //output: Andi